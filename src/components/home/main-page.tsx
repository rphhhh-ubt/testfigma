"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent,
} from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Footer } from "@/components/home/footer";
import { Header } from "@/components/home/header";
import {
  featuredGalleryImage,
  galleryImages,
  mainAgendaCards,
  partnersBottom,
  partnersTop,
  residents,
  shopCategories,
  shopItems,
  teamMembers,
  type ShopCategory,
  zineCategories,
  zinePosts,
} from "@/data/main-home";

const reveal = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
};

const INITIAL_ZINE_VISIBLE = 5;
const MOBILE_INITIAL_ZINE_VISIBLE = 3;
const heroLines = ["we are/", "inclusive space for those", "who loves art"];
const agendaSpotlightStyle = { "--mx": "50%", "--my": "50%" } as CSSProperties;

export function MainPage() {
  const reducedMotion = useReducedMotion();
  const [isCompact, setIsCompact] = useState(false);
  const heroRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroBackgroundY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const heroBackgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  const [shopCategory, setShopCategory] = useState<ShopCategory>("decor");
  const [zineCategory, setZineCategory] = useState<(typeof zineCategories)[number]>(
    "All",
  );
  const [visibleZineCount, setVisibleZineCount] = useState(INITIAL_ZINE_VISIBLE);
  const [activeGalleryImage, setActiveGalleryImage] = useState(featuredGalleryImage);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 820px)");

    const syncCompact = () => {
      const nextIsCompact = mediaQuery.matches;

      setIsCompact((prevIsCompact) => {
        if (prevIsCompact !== nextIsCompact) {
          setVisibleZineCount(
            nextIsCompact ? MOBILE_INITIAL_ZINE_VISIBLE : INITIAL_ZINE_VISIBLE,
          );
        }

        return nextIsCompact;
      });
    };

    syncCompact();
    mediaQuery.addEventListener("change", syncCompact);

    return () => {
      mediaQuery.removeEventListener("change", syncCompact);
    };
  }, []);

  const filteredZinePosts = useMemo(() => {
    if (zineCategory === "All") {
      return zinePosts;
    }

    return zinePosts.filter((post) => post.category === zineCategory);
  }, [zineCategory]);

  const visibleZinePosts = filteredZinePosts.slice(0, visibleZineCount);
  const canLoadMoreZine = visibleZineCount < filteredZinePosts.length;

  const visibleAgendaCards = useMemo(
    () => (isCompact ? mainAgendaCards.slice(0, 2) : mainAgendaCards.slice(0, 4)),
    [isCompact],
  );

  const visibleTeamMembers = useMemo(
    () => (isCompact ? teamMembers.slice(0, 2) : teamMembers),
    [isCompact],
  );

  const visibleResidents = useMemo(
    () => (isCompact ? residents.slice(0, 3) : residents),
    [isCompact],
  );

  const partnersRowTop = useMemo(
    () => (isCompact ? partnersTop.slice(0, 4) : partnersTop),
    [isCompact],
  );

  const partnersRowBottom = useMemo(
    () => (isCompact ? partnersBottom.slice(0, 4) : partnersBottom),
    [isCompact],
  );

  const visibleShopImages = useMemo(
    () => (isCompact ? shopItems[shopCategory].slice(0, 2) : shopItems[shopCategory]),
    [isCompact, shopCategory],
  );

  const handleChangeZineCategory = (category: (typeof zineCategories)[number]) => {
    setZineCategory(category);
    setVisibleZineCount(isCompact ? MOBILE_INITIAL_ZINE_VISIBLE : INITIAL_ZINE_VISIBLE);
  };

  const handleAgendaCardPointerMove = (event: PointerEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    event.currentTarget.style.setProperty("--mx", `${x}px`);
    event.currentTarget.style.setProperty("--my", `${y}px`);
  };

  const handleAgendaCardPointerLeave = (event: PointerEvent<HTMLElement>) => {
    event.currentTarget.style.setProperty("--mx", "50%");
    event.currentTarget.style.setProperty("--my", "50%");
  };

  return (
    <div className="main-home">
      <section ref={heroRef} className="main-folder" aria-label="Hero section">
        <motion.div
          className="main-folder-bg-wrap"
          style={
            reducedMotion
              ? undefined
              : {
                  y: heroBackgroundY,
                  scale: heroBackgroundScale,
                }
          }
        >
          <Image
            src="/figma-home/folder-hero-bg.png"
            alt="ArtConnection hero"
            fill
            priority
            className="main-folder-bg"
            sizes="100vw"
          />
        </motion.div>
        <div className="main-folder-overlay" />

        <div className="main-container main-folder-inner">
          <Header tone="light" />

          <motion.div
            className="main-folder-copy"
            variants={reveal}
            initial={reducedMotion ? undefined : "hidden"}
            animate={reducedMotion ? undefined : "visible"}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <p className="main-folder-logo">
              <span className="main-folder-logo-art">art</span>
              <span className="main-folder-logo-collection">co ection</span>
              <Image
                src="/figma-home/logo-glyph-desktop.png"
                alt=""
                width={174}
                height={120}
                className="main-folder-logo-symbol-desktop"
                aria-hidden
              />
              <Image
                src="/figma-home/logo-glyph-mobile.png"
                alt=""
                width={63}
                height={43}
                className="main-folder-logo-symbol-mobile"
                aria-hidden
              />
            </p>
            <h1>
              {heroLines.map((line, index) => (
                <span key={line} className="main-folder-line">
                  <motion.span
                    initial={
                      reducedMotion ? undefined : { opacity: 0, y: 22, filter: "blur(4px)" }
                    }
                    animate={
                      reducedMotion ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }
                    }
                    transition={{
                      duration: 0.55,
                      delay: 0.18 + index * 0.09,
                      ease: "easeOut",
                    }}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h1>
            <p className="main-folder-subtitle">Discover the new and rediscover the classic</p>
          </motion.div>
        </div>
      </section>

      <motion.section
        id="agenda"
        className="main-agenda"
        initial={reducedMotion ? undefined : "hidden"}
        whileInView={reducedMotion ? undefined : "visible"}
        viewport={{ once: true, margin: "-10%" }}
        variants={reveal}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <div className="main-container">
          <header className="main-section-head">
            <span>Agenda/</span>
            <h2>
              Introduce our most expected
              <br />
              events in this season/
            </h2>
            <Link href="/events/paradigm">see full agenda</Link>
          </header>

          <div className="main-agenda-grid">
            {visibleAgendaCards.map((card, index) => (
              <motion.article
                key={card.id}
                className="main-agenda-card"
                style={agendaSpotlightStyle}
                initial={reducedMotion ? undefined : { opacity: 0, y: 20 }}
                whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8%" }}
                transition={{ duration: 0.45, delay: index * 0.05, ease: "easeOut" }}
                whileHover={reducedMotion ? undefined : { y: -5 }}
                onPointerMove={handleAgendaCardPointerMove}
                onPointerLeave={handleAgendaCardPointerLeave}
              >
                <Image src={card.image} alt={card.title} fill className="main-agenda-card-image" />
                <div className="main-agenda-card-overlay" />
                <div className="main-agenda-card-content">
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                  <div>
                    <span>{card.type}</span>
                    <span>{card.date}</span>
                  </div>
                  <Link href={card.href}>See more</Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        id="about"
        className="main-about"
        initial={reducedMotion ? undefined : "hidden"}
        whileInView={reducedMotion ? undefined : "visible"}
        viewport={{ once: true, margin: "-10%" }}
        variants={reveal}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <div className="main-container">
          <span className="main-label">About/</span>
          <h2>
            <span className="dark">We curate and organize</span>
            <br />
            <span className="light">art events,</span>
            <br />
            <span className="light">providing a stage</span>
            <br />
            <span className="dark">for self-expression/</span>
          </h2>

          <Link className="main-about-cta" href="/about">
            read more
          </Link>

          <div className="main-about-columns">
            <p>
              The art space is a platform designed to unite creative communities and foster inclusivity.
              Our mission is to reveal the potential of art as a universal language capable of connecting
              people from diverse backgrounds, abilities, and interests.
            </p>
            <p>
              Our goal is to become a place where everyone can find inspiration and reconsider perspectives.
              We believe that through creative interaction, society can become more open, understanding,
              and empowered.
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="main-gallery"
        initial={reducedMotion ? undefined : "hidden"}
        whileInView={reducedMotion ? undefined : "visible"}
        viewport={{ once: true, margin: "-8%" }}
        variants={reveal}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <div className="main-container main-gallery-grid">
          <div className="main-gallery-left">
            <span className="main-label">Gallery/</span>
            <div className="main-gallery-thumbs">
              {galleryImages.map((image, index) => (
                <button
                  type="button"
                  className={`main-gallery-thumb ${activeGalleryImage === image ? "is-active" : ""}`}
                  key={image}
                  onClick={() => setActiveGalleryImage(image)}
                  aria-label={`Show gallery slide ${index + 1}`}
                >
                  <Image
                    src={image}
                    alt={`Gallery thumbnail ${index + 1}`}
                    fill
                    className="main-gallery-thumb-image"
                  />
                </button>
              ))}
            </div>
            <button type="button">drag</button>
          </div>

          <article className="main-gallery-feature">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeGalleryImage}
                className="main-gallery-feature-media"
                initial={reducedMotion ? undefined : { opacity: 0.42, scale: 1.04 }}
                animate={reducedMotion ? undefined : { opacity: 1, scale: 1 }}
                exit={reducedMotion ? undefined : { opacity: 0.4, scale: 0.98 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
              >
                <Image
                  src={activeGalleryImage}
                  alt="Main entrance to gallery"
                  fill
                  className="main-gallery-feature-image"
                />
              </motion.div>
            </AnimatePresence>
            <div className="main-gallery-feature-overlay" />
            <div className="main-gallery-feature-content">
              <h3>Main entrance to gallery</h3>
              <p>
                The true favorite spot for all visitors was created by two architects from New Zealand,
                with Anita Redmaine gifting this sculpture as the centerpiece.
              </p>
              <Link href="/about">see more</Link>
            </div>
          </article>
        </div>
      </motion.section>

      <motion.section
        className="main-team"
        initial={reducedMotion ? undefined : "hidden"}
        whileInView={reducedMotion ? undefined : "visible"}
        viewport={{ once: true, margin: "-8%" }}
        variants={reveal}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <div className="main-container">
          <span className="main-label">Team/</span>
          <h2>
            Our qualified specialists can make
            <br />
            art conceptions
            <br />
            into a real project/
          </h2>

          <div className="main-team-table">
            <div className="main-team-list">
              {visibleTeamMembers.map((member) => (
                <article key={member.name}>
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </article>
              ))}
            </div>

            <div className="main-team-photo">
              <Image
                src="/figma-home/team-member-photo-1.png"
                alt="Team portrait"
                fill
                className="main-team-photo-image"
              />
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="residents"
        className="main-residents"
        initial={reducedMotion ? undefined : "hidden"}
        whileInView={reducedMotion ? undefined : "visible"}
        viewport={{ once: true, margin: "-8%" }}
        variants={reveal}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <div className="main-container">
          <span className="main-label">Residents/</span>
          <h2>
            We invite guests not only to
            <br />
            enjoy art but to engage
            <br />
            in a dialogue
          </h2>

          <Link className="main-residents-cta" href="/about#residents">
            became our resident
          </Link>

          <div className="main-residents-grid">
            {visibleResidents.map((resident) => (
              <article key={resident.title}>
                <h3>{resident.title}</h3>
                <p>{resident.text}</p>
              </article>
            ))}
          </div>
        </div>
      </motion.section>

      <section className="main-partners">
        <div className="main-container">
          <span className="main-label">Partners/</span>
          <h2>
            The platform was designed
            <br />
            to unite creative people
            <br />
            &amp; foster inclusivity/
          </h2>

          <div className="main-partners-marquee">
            <div className="main-partners-track">
              {[...partnersRowTop, ...partnersRowTop].map((partner, index) => (
                <article key={`${partner}-${index}`} className="main-partners-card">
                  {partner}
                </article>
              ))}
            </div>
          </div>

          <div className="main-partners-marquee reverse">
            <div className="main-partners-track">
              {[...partnersRowBottom, ...partnersRowBottom].map((partner, index) => (
                <article key={`${partner}-${index}`} className="main-partners-card">
                  {partner}
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <motion.section
        id="shop"
        className="main-shop"
        initial={reducedMotion ? undefined : "hidden"}
        whileInView={reducedMotion ? undefined : "visible"}
        viewport={{ once: true, margin: "-10%" }}
        variants={reveal}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <div className="main-container">
          <div className="main-shop-head">
            <div>
              <span className="main-label">Shop/</span>
              <h2>art connection shop</h2>
            </div>
            <Link href="/about#shop">view all</Link>
          </div>

          <p className="main-shop-subtitle">
            Made by our residents. A portion of the proceeds from sales is donated to foundations that
            protect rights of people with disabilities.
          </p>

          <div className="main-shop-tabs" role="tablist" aria-label="Shop category">
            {shopCategories.map((category) => (
              <button
                key={category}
                type="button"
                className={shopCategory === category ? "is-active" : ""}
                onClick={() => setShopCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="main-shop-grid">
            {visibleShopImages.map((image, index) => (
              <div className="main-shop-item" key={`${image}-${index}`}>
                <Image src={image} alt={`${shopCategory} item ${index + 1}`} fill className="main-shop-item-image" />
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        id="zine"
        className="main-zine"
        initial={reducedMotion ? undefined : "hidden"}
        whileInView={reducedMotion ? undefined : "visible"}
        viewport={{ once: true, margin: "-10%" }}
        variants={reveal}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <div className="main-container">
          <div className="main-zine-head">
            <span className="main-label">Zine/</span>
            <h2>A.C. journal</h2>
          </div>

          <div className="main-zine-tabs" role="tablist" aria-label="Zine category">
            {zineCategories.map((category) => (
              <button
                key={category}
                type="button"
                className={zineCategory === category ? "is-active" : ""}
                onClick={() => handleChangeZineCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="main-zine-grid">
            {visibleZinePosts.map((post) => (
              <article key={post.id} className="main-zine-card">
                <div className="main-zine-image-wrap">
                  <Image src={post.image} alt={post.title} fill className="main-zine-image" />
                </div>
                <h3>{post.title}</h3>
              </article>
            ))}
          </div>

          <button
            type="button"
            className="main-zine-load-more"
            onClick={() => setVisibleZineCount((count) => Math.min(count + 2, filteredZinePosts.length))}
            disabled={!canLoadMoreZine}
          >
            {canLoadMoreZine ? (isCompact ? "show more" : "load more") : "all posts loaded"}
          </button>
        </div>
      </motion.section>

      <div className="main-container">
        <Footer />
      </div>
    </div>
  );
}

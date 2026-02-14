"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Footer } from "@/components/home/footer";
import { Header } from "@/components/home/header";
import { StatusBar } from "@/components/home/status-bar";

const principles = [
  {
    title: "Open residency",
    text: "We host cross-disciplinary residents and support long-form research with public outcomes.",
    id: "residents",
  },
  {
    title: "Curated concept store",
    text: "Limited editions, books, and artist collaborations selected around each seasonal program.",
    id: "shop",
  },
  {
    title: "Editorial feed",
    text: "Weekly process notes, interviews, and visual essays connecting local and global scenes.",
    id: "feed",
  },
];

const timeline = [
  "2008 - founded as an independent art initiative",
  "2015 - expanded with residency and educational lab",
  "2020 - launched hybrid talks and digital archive",
  "2024 - restructured into ArtConnection inclusive space",
];

export function AboutPage() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="agenda-shell">
      <main className="agenda-page about-page">
        <StatusBar />
        <Header />

        <section className="about-hero" aria-labelledby="about-title">
          <motion.h1
            id="about-title"
            initial={reducedMotion ? undefined : { opacity: 0, y: 18 }}
            animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            About ArtConnection
          </motion.h1>

          <motion.p
            initial={reducedMotion ? undefined : { opacity: 0, y: 18 }}
            animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
          >
            We build public cultural programs where exhibition language, education,
            and performance meet in one adaptive environment.
          </motion.p>

          <motion.div
            className="about-actions"
            initial={reducedMotion ? undefined : { opacity: 0, y: 18 }}
            animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12, ease: "easeOut" }}
          >
            <Link href="/#feed">See current agenda</Link>
            <a href="mailto:rent@artconnection.com">Partner with us</a>
          </motion.div>
        </section>

        <section className="about-timeline" aria-label="Key milestones">
          {timeline.map((item, index) => (
            <motion.p
              key={item}
              initial={reducedMotion ? undefined : { opacity: 0, x: -12 }}
              whileInView={reducedMotion ? undefined : { opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.4, delay: index * 0.06, ease: "easeOut" }}
            >
              {item}
            </motion.p>
          ))}
        </section>

        <section className="about-principles">
          {principles.map((principle, index) => (
            <motion.article
              key={principle.id}
              id={principle.id}
              initial={reducedMotion ? undefined : { opacity: 0, y: 20 }}
              whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ duration: 0.45, delay: index * 0.05, ease: "easeOut" }}
            >
              <h2>{principle.title}</h2>
              <p>{principle.text}</p>
            </motion.article>
          ))}
        </section>

        <Footer />
      </main>
    </div>
  );
}

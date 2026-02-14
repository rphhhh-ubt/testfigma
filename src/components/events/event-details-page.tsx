"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Footer } from "@/components/home/footer";
import { Header } from "@/components/home/header";
import { StatusBar } from "@/components/home/status-bar";
import type { AgendaEvent } from "@/types/agenda";

interface EventDetailsPageProps {
  event: AgendaEvent;
  relatedEvents: AgendaEvent[];
}

export function EventDetailsPage({ event, relatedEvents }: EventDetailsPageProps) {
  const reducedMotion = useReducedMotion();

  return (
    <div className="agenda-shell">
      <main className="agenda-page event-page">
        <StatusBar />
        <Header />

        <section className="event-hero" aria-labelledby="event-title">
          <motion.div
            className="event-hero-media"
            initial={reducedMotion ? undefined : { opacity: 0, scale: 0.98 }}
            animate={reducedMotion ? undefined : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <Image
              src={event.image}
              alt={event.title}
              fill
              sizes="(max-width: 1000px) 100vw, 55vw"
              className="event-page-image"
            />
          </motion.div>

          <motion.div
            className="event-hero-content"
            initial={reducedMotion ? undefined : { opacity: 0, y: 18 }}
            animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
          >
            <p className="event-breadcrumb">Agenda / {event.month}</p>
            <h1 id="event-title">{event.title}</h1>

            <div className="event-info-grid">
              <div>
                <span>Category</span>
                <strong>{event.category}</strong>
              </div>
              <div>
                <span>Date</span>
                <strong>{event.date}</strong>
              </div>
              <div>
                <span>Location</span>
                <strong>{event.location}</strong>
              </div>
            </div>

            <p className="event-description">{event.description}</p>

            <div className="event-page-actions">
              <a href="mailto:rent@artconnection.com?subject=Event%20booking">
                Book a visit
              </a>
              <Link href="/#feed">Back to agenda</Link>
            </div>
          </motion.div>
        </section>

        <section className="related-events" aria-label="Related events">
          <h2>Related events</h2>

          <div className="related-grid">
            {relatedEvents.map((related) => (
              <Link key={related.id} href={`/events/${related.id}`} className="related-item">
                <span>{related.title}</span>
                <span>
                  {related.category} / {related.date}
                </span>
              </Link>
            ))}
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}

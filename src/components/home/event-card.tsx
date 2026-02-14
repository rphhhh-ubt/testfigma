"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import type { AgendaEvent } from "@/types/agenda";

interface EventCardProps {
  event: AgendaEvent;
  index: number;
}

export function EventCard({ event, index }: EventCardProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.article
      className={`event-card event-${event.size}`}
      initial={reducedMotion ? undefined : { opacity: 0, y: 20 }}
      whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.55, delay: index * 0.045, ease: "easeOut" }}
      whileHover={reducedMotion ? undefined : { y: -6 }}
    >
      <Image
        src={event.image}
        alt={event.title}
        fill
        sizes="(max-width: 699px) 100vw, (max-width: 1199px) 50vw, (max-width: 1699px) 33vw, 260px"
        className="event-image"
      />

      <div className="event-overlay" />

      <div className="event-content">
        <h2 className="event-title">{event.title}</h2>

        <div className="event-meta">
          <span>{event.category}</span>
          <span className="event-date">{event.date}</span>
        </div>

        <button className="event-cta" type="button">
          See more
        </button>
      </div>
    </motion.article>
  );
}

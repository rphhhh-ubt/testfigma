"use client";

import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { EventGrid } from "@/components/home/event-grid";
import { Footer } from "@/components/home/footer";
import { Header } from "@/components/home/header";
import { Hero } from "@/components/home/hero";
import { MonthSelect } from "@/components/home/month-select";
import { StatusBar } from "@/components/home/status-bar";
import { TickerTape } from "@/components/home/ticker-tape";
import { agendaEvents, allMonths } from "@/data/events";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const INITIAL_VISIBLE_EVENTS = 8;
const LOAD_STEP = 4;

export function AgendaPage() {
  const reducedMotion = useReducedMotion();
  const [selectedMonth, setSelectedMonth] = useState<string>("All months");
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_EVENTS);

  const filteredEvents = useMemo(() => {
    if (selectedMonth === "All months") {
      return agendaEvents;
    }

    return agendaEvents.filter((event) => event.month === selectedMonth);
  }, [selectedMonth]);

  const visibleEvents = filteredEvents.slice(0, visibleCount);
  const hasMore = visibleCount < filteredEvents.length;

  const handleMonthChange = (month: string) => {
    setSelectedMonth(month);
    setVisibleCount(INITIAL_VISIBLE_EVENTS);
  };

  const handleLoadMore = () => {
    setVisibleCount((current) => Math.min(current + LOAD_STEP, filteredEvents.length));
  };

  return (
    <div className="agenda-shell">
      <main className="agenda-page">
        <StatusBar />

        <motion.div
          variants={fadeUp}
          initial={reducedMotion ? undefined : "hidden"}
          animate={reducedMotion ? undefined : "visible"}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <Header />
        </motion.div>

        <motion.div
          id="agenda"
          variants={fadeUp}
          initial={reducedMotion ? undefined : "hidden"}
          animate={reducedMotion ? undefined : "visible"}
          transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
        >
          <Hero />
        </motion.div>

        <TickerTape />

        <motion.div
          variants={fadeUp}
          initial={reducedMotion ? undefined : "hidden"}
          animate={reducedMotion ? undefined : "visible"}
          transition={{ duration: 0.55, delay: 0.15, ease: "easeOut" }}
        >
          <MonthSelect
            options={allMonths}
            value={selectedMonth}
            onChange={handleMonthChange}
          />
        </motion.div>

        <EventGrid events={visibleEvents} />

        <motion.button
          className="load-more"
          type="button"
          whileHover={reducedMotion ? undefined : { scale: 1.04 }}
          whileTap={reducedMotion ? undefined : { scale: 0.98 }}
          onClick={handleLoadMore}
          disabled={!hasMore}
        >
          {hasMore ? "load more" : "all events loaded"}
        </motion.button>

        <Footer />
      </main>
    </div>
  );
}

"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EventGrid } from "@/components/home/event-grid";
import { Footer } from "@/components/home/footer";
import { Header } from "@/components/home/header";
import { Hero } from "@/components/home/hero";
import { MonthSelect } from "@/components/home/month-select";
import { StatusBar } from "@/components/home/status-bar";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function AgendaPage() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="agenda-shell">
      <div className="ambient ambient-a" />
      <div className="ambient ambient-b" />

      <main className="agenda-page">
        <StatusBar />

        <motion.div
          variants={fadeUp}
          initial={reducedMotion ? undefined : "hidden"}
          animate={reducedMotion ? undefined : "visible"}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <Header />
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial={reducedMotion ? undefined : "hidden"}
          animate={reducedMotion ? undefined : "visible"}
          transition={{ duration: 0.6, delay: 0.12, ease: "easeOut" }}
        >
          <Hero />
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial={reducedMotion ? undefined : "hidden"}
          animate={reducedMotion ? undefined : "visible"}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <MonthSelect />
        </motion.div>

        <EventGrid />

        <motion.button
          className="load-more"
          type="button"
          whileHover={reducedMotion ? undefined : { scale: 1.06 }}
          whileTap={reducedMotion ? undefined : { scale: 0.98 }}
        >
          load more
        </motion.button>

        <Footer />
      </main>
    </div>
  );
}

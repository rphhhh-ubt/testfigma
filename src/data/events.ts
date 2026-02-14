import type { AgendaEvent, EventMonth } from "@/types/agenda";

export const agendaEvents: AgendaEvent[] = [
  {
    id: "wild-sands",
    title: "wild sands",
    category: "Performance",
    date: "07/03",
    month: "March",
    location: "Hall A",
    description:
      "A live kinetic performance where choreography and modular sound react to audience movement.",
    size: "xs",
    image:
      "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "sound-fury",
    title: "The Sound & the Fury",
    category: "Performance",
    date: "12/03",
    month: "March",
    location: "Main Stage",
    description:
      "A one-evening theatrical score where spoken fragments and noise textures build a dramatic arc.",
    size: "l",
    image:
      "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "paradigm",
    title: "para-digm",
    category: "Exhibition",
    date: "16/03-23/03",
    month: "March",
    location: "Gallery 2",
    description:
      "A multimedia exhibition about systems, rituals, and the shape of future urban communities.",
    size: "xxl",
    image:
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "renoir",
    title: "Renoir",
    category: "Exhibition",
    date: "12/03-28/03",
    month: "March",
    location: "Gallery 1",
    description:
      "A curated show exploring color transitions in post-impressionist-inspired contemporary painting.",
    size: "m",
    image:
      "https://images.unsplash.com/photo-1501471984908-815b996862d4?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "small-things",
    title: "small things",
    category: "Workshop",
    date: "21/03",
    month: "March",
    location: "Studio 4",
    description:
      "Hands-on workshop focused on micro-installations, tactile materials, and collective prototyping.",
    size: "m",
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "adaptive-environment",
    title: "Adaptive environment",
    category: "Public talk",
    date: "02/04",
    month: "April",
    location: "Lecture Room",
    description:
      "Conversation with architects and curators on responsive spaces and inclusive design methods.",
    size: "xl",
    image:
      "https://images.unsplash.com/photo-1529421306624-54a5e29f9be5?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "joya",
    title: "JOYA",
    category: "Performance",
    date: "05/04",
    month: "April",
    location: "Main Stage",
    description:
      "A high-energy audiovisual set balancing abstract visuals, live rhythm, and spoken narrative.",
    size: "s",
    image:
      "https://images.unsplash.com/photo-1520006403909-838d6b92c22e?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "dei-abilities",
    title: "DEI Abilities",
    category: "Public talk",
    date: "08/04",
    month: "April",
    location: "Forum Hall",
    description:
      "Public dialogue around equitable creative ecosystems and practical tools for cultural teams.",
    size: "l",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "another-life",
    title: "Another Life",
    category: "Exhibition",
    date: "10/03-20/03",
    month: "March",
    location: "Gallery 3",
    description:
      "Immersive storytelling through archival fragments and speculative portraits.",
    size: "m",
    image:
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "five-hours",
    title: "5 hours ago",
    category: "Exhibition",
    date: "12/04-24/04",
    month: "April",
    location: "Gallery 1",
    description:
      "A reflective exhibition built around memory loops, delayed time, and digital traces.",
    size: "xxl",
    image:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "bluebear",
    title: "bluebear",
    category: "Performance",
    date: "16/04",
    month: "April",
    location: "Open Yard",
    description:
      "Site-specific performance that combines movement, costume sculpture, and field recording.",
    size: "s",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "fragile",
    title: "fragile",
    category: "Performance",
    date: "19/04",
    month: "April",
    location: "Hall C",
    description:
      "Contemporary dance piece about vulnerability, rhythm breaks, and collective resilience.",
    size: "xl",
    image:
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "new-stories",
    title: "New stories",
    category: "Workshop",
    date: "27/03",
    month: "March",
    location: "Studio 2",
    description:
      "Editorial workshop where teams build narrative sequences using text, image, and motion.",
    size: "m",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "dei-abilities-2",
    title: "DEI Abilities",
    category: "Public talk",
    date: "30/03",
    month: "March",
    location: "Forum Hall",
    description:
      "Second talk format focused on inclusion policies, practical moderation, and open Q&A.",
    size: "xs",
    image:
      "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?auto=format&fit=crop&w=1000&q=80",
  },
];

export const allMonths: Array<EventMonth | "All months"> = [
  "All months",
  "March",
  "April",
];

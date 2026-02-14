export interface MainCard {
  id: string;
  title: string;
  description: string;
  type: string;
  date: string;
  image: string;
  href: string;
}

export const mainAgendaCards: MainCard[] = [
  {
    id: "alternative-limb",
    title: "alternative limb",
    description:
      "The exhibition celebrates the diversity of ideas and personality through prosthetics as objects of art.",
    type: "Exhibition",
    date: "12/03 - 28/03",
    image: "/figma-home/agenda-card-1.png",
    href: "/events/paradigm",
  },
  {
    id: "paradigm",
    title: "para-digm",
    description:
      "Reconstructing Faulkner's ideas in a new world full of technology, but not ready to expand borders.",
    type: "Exhibition",
    date: "16/03 - 23/03",
    image: "/figma-home/agenda-card-2.png",
    href: "/events/paradigm",
  },
  {
    id: "small-things",
    title: "small things",
    description:
      "Let's make a model of a fictitious city from clay under the guidance of an artist with cerebral palsy.",
    type: "Workshop",
    date: "21/03",
    image: "/figma-home/agenda-card-3.png",
    href: "/events/small-things",
  },
  {
    id: "sound-fury",
    title: "The Sound & the Fury",
    description:
      "Children's production based on the famous fairy tale of the northern peoples.",
    type: "Performance",
    date: "15/03",
    image: "/figma-home/agenda-card-4.png",
    href: "/events/sound-fury",
  },
  {
    id: "dei-abilities",
    title: "DEI Abilities",
    description:
      "Discover the new and rediscover the classics. We introduce our most expected events in this season.",
    type: "Public talk",
    date: "30/03",
    image: "/figma-home/agenda-card-5.png",
    href: "/events/dei-abilities",
  },
];

export const galleryImages = [
  "/figma-home/gallery-image-1.png",
  "/figma-home/gallery-image-2.png",
  "/figma-home/gallery-image-3.png",
  "/figma-home/gallery-image-4.png",
];

export const featuredGalleryImage = "/figma-home/gallery-image-5.png";

export const teamMembers = [
  { name: "Courtney Henry", role: "Art director" },
  { name: "Cody Fisher", role: "Head of cultural programs" },
  { name: "Leslie Alexander", role: "Education lead" },
  { name: "Theresa Webb", role: "Community manager" },
];

export const residents = [
  {
    title: "Theatre troupe",
    text: "The art project for people with Down syndrome. Directed by Barbara Fink and running for over 5 years.",
  },
  {
    title: "Graphic novels",
    text: "Creator from Lithuania making hand-drawn social novels with focus on disability inclusion.",
  },
  {
    title: "Public speaker",
    text: "A leading speaker at the Museum of Modern Art and the Parsons School of Design.",
  },
  {
    title: "Rare editions",
    text: "A shop featuring rare editions, collectible prints, and books with handcrafted covers.",
  },
];

export const partnersTop = [
  "Time LLC",
  "ERSTE Bank",
  "Open Society",
  "A11y Art Fund",
  "Culture Next",
];

export const partnersBottom = [
  "Nordic Lines",
  "Urban Lens",
  "Dialog Foundation",
  "State Museum",
  "Craft House",
];

export const shopCategories = ["clothes", "books", "decor", "cards", "other"] as const;

export type ShopCategory = (typeof shopCategories)[number];

export const shopItems: Record<ShopCategory, string[]> = {
  clothes: [
    "/figma-home/shop-item-1.png",
    "/figma-home/shop-item-2.png",
    "/figma-home/shop-item-3.png",
  ],
  books: [
    "/figma-home/shop-item-2.png",
    "/figma-home/shop-item-1.png",
    "/figma-home/shop-item-3.png",
  ],
  decor: [
    "/figma-home/shop-item-1.png",
    "/figma-home/shop-item-2.png",
    "/figma-home/shop-item-3.png",
  ],
  cards: [
    "/figma-home/shop-item-3.png",
    "/figma-home/shop-item-1.png",
    "/figma-home/shop-item-2.png",
  ],
  other: [
    "/figma-home/shop-item-2.png",
    "/figma-home/shop-item-3.png",
    "/figma-home/shop-item-1.png",
  ],
};

export interface ZinePost {
  id: string;
  category: "All" | "News" | "Charity" | "Culture" | "Society" | "podcast";
  title: string;
  image: string;
}

export const zineCategories: ZinePost["category"][] = [
  "All",
  "News",
  "Charity",
  "Culture",
  "Society",
  "podcast",
];

export const zinePosts: ZinePost[] = [
  {
    id: "z-1",
    category: "Charity",
    title: "5 foundations that you can help today",
    image: "/figma-home/zine-card-1.png",
  },
  {
    id: "z-2",
    category: "Culture",
    title: "Research: How does art explore the theme of loneliness?",
    image: "/figma-home/zine-card-2.png",
  },
  {
    id: "z-3",
    category: "Society",
    title: "Physical disability persons and job opportunities",
    image: "/figma-home/zine-card-3.png",
  },
  {
    id: "z-4",
    category: "News",
    title: "How residency spaces adapt their programs in 2026",
    image: "/figma-home/zine-card-4.png",
  },
  {
    id: "z-5",
    category: "podcast",
    title: "Audio room: community-driven curation",
    image: "/figma-home/zine-card-5.png",
  },
  {
    id: "z-6",
    category: "News",
    title: "Open call: spring residency shortlist",
    image: "/figma-home/zine-card-3.png",
  },
  {
    id: "z-7",
    category: "Culture",
    title: "How galleries redesign for inclusive flow",
    image: "/figma-home/zine-card-4.png",
  },
];

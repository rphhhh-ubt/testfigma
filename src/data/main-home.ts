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
    date: "07/03",
    image: "/figma-home/agenda-card-1.png",
    href: "/events/paradigm",
  },
  {
    id: "paradigm",
    title: "para-digm",
    description:
      "Discover the new and rediscover the classics. We introduce you our most expected events in this season.",
    type: "Exhibition",
    date: "12/04—28/04",
    image: "/figma-home/agenda-card-2.png",
    href: "/events/paradigm",
  },
  {
    id: "small-things",
    title: "small things",
    description:
      "Let's make a model of a fictitious city from clay under the guidance of artist with cerebral palsy.",
    type: "Workshop",
    date: "29/05",
    image: "/figma-home/agenda-card-3.png",
    href: "/events/small-things",
  },
  {
    id: "sound-fury",
    title: "The Sound & the Fury",
    description:
      "Reconstructing Faulkner's ideas in a new world full of technology, but not ready to expand its borders",
    type: "Performance",
    date: "09/06",
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

export interface TeamRow {
  number: string;
  name: string;
  role: string;
  tone: "muted" | "dark";
  expanded?: boolean;
  fullBleed?: boolean;
}

export const teamRows: TeamRow[] = [
  {
    number: "01/",
    name: "Cody Fisher",
    role: "Creative Director",
    tone: "muted",
    expanded: true,
  },
  {
    number: "02/",
    name: "Courtney Henry",
    role: "Operations Director",
    tone: "dark",
    fullBleed: true,
  },
  {
    number: "03/",
    name: "Jerome Bell",
    role: "Project and Event Manager",
    tone: "muted",
  },
  {
    number: "04/",
    name: "Leslie Alexander",
    role: "Art manager",
    tone: "muted",
  },
  {
    number: "05/",
    name: "Kristin Watson",
    role: "Curator of inclusive ivents",
    tone: "muted",
  },
  {
    number: "06/",
    name: "Dianne Russell",
    role: "PR manager",
    tone: "muted",
  },
];

export const teamMobileCards = [
  {
    name: "Courtney Henry",
    role: "Operations Director",
    image: "/figma-home/team-member-photo-1.png",
    imagePosition: "30% center",
  },
  {
    name: "Cody Fisher",
    role: "Creative Director",
    image: "/figma-home/team-member-photo-2.jpg",
    imagePosition: "50% center",
    grayscale: true,
  },
];

export interface ResidentsEntry {
  name: string;
  text: string;
}

export interface ResidentsDesktopCard {
  title: string;
  entries: ResidentsEntry[];
}

export const residentsDesktopCards: ResidentsDesktopCard[] = [
  {
    title: "Theatre troupe",
    entries: [
      {
        name: "Occlusion Theatre",
        text: "The art project for people with Down syndrome. Directed by Barbara Fink and promote for 5 years already.",
      },
      {
        name: "Theatre Of Glow",
        text: "The artist with intellectual dissabilities provides a choreographycal shows.",
      },
      {
        name: "P.L.U.M",
        text: "An independent troupe of like-minded individuals, performing contemporary dramas.",
      },
      {
        name: "World of Shadows",
        text: 'A renowned South American troupe specializing in the art of "shadow theater."',
      },
    ],
  },
  {
    title: "Visual Artists",
    entries: [
      {
        name: "Elliot Moss",
        text: "Creator from Lithuania, who make graphical novels by hand about social issues.",
      },
      {
        name: "Ennie Hall",
        text: "Sculptor and artist whose work addresses the body and its capabilities.",
      },
      {
        name: "Big Apple Project",
        text: "A group of independent local artists whose work can be seen in many museums around the world.",
      },
    ],
  },
  {
    title: "Public talk lectors",
    entries: [
      {
        name: "Broke Miccio",
        text: "A leading speaker at the Museum of Modern Art and the Parsons School of Design.",
      },
      {
        name: "Gabriela Bañuelos",
        text: "A public figure advocating for inclusivity in the social sphere.",
      },
      {
        name: "Ashley Masse",
        text: "A professor of philosophy and author of self-development books.",
      },
      {
        name: "Ashley Alexander",
        text: "An author and publicist, a researcher in the field of cognitive biases.",
      },
    ],
  },
  {
    title: "HandMade Shopesists",
    entries: [
      {
        name: "PLAYA`S",
        text: "A shop featuring rare editions, collectible prints, and books with handcrafted covers.",
      },
      {
        name: "AbyStore",
        text: "Home decor and more. All items are handmade, and the proceeds from purchases go to charity.",
      },
      {
        name: "COMMITED",
        text: "Find new unique pieces for your personal style by designer Fred Audry and Lana Holmes",
      },
    ],
  },
];

export const residentsMobileCollapsed = [
  "Theatre troupe",
  "Visual Artists",
  "Public talk lectors",
];

export const residentsMobileOpen = {
  title: "HandMade Shopes",
  rows: [
    {
      name: "PLAYA`S",
      text: "A shop featuring rare editions, collectible prints, and books with handcrafted covers.",
    },
    {
      name: "AbyStore",
      text: "Home decor and more. All items are handmade, and the proceeds from purchases go to charity.",
    },
    {
      name: "COMMITED",
      text: "Find new unique pieces for your personal style by designer Fred Audry and Lana Holmes",
    },
  ],
};

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

import analyticsImage from "../assets/landing/analytics.webp";
import catImage from "../assets/Resource/CAT-card.webp";
import consultImage from "../assets/landing/consult.webp";
import coreImage from "../assets/landing/core.webp";
import exploreImage from "../assets/landing/yosemite-valley.jpg";
import higherStudiesImage from "../assets/Resource/Higher_Studies-card.webp";
import quantImage from "../assets/landing/quant.webp";
import startupImage from "../assets/landing/Resource.jpg";
import techImage from "../assets/landing/sde.webp";
import upscImage from "../../upscimage.jpeg";

export type CareerCard = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  accent: string;
};

const careerCards: CareerCard[] = [
  { eyebrow: "Start here", title: "Explore different careers", description: "Find the work that feels like you.", image: exploreImage, accent: "#d8ff57" },
  { eyebrow: "Strategy", title: "Consulting", description: "Turn difficult questions into clear direction.", image: consultImage, accent: "#ff6b43" },
  { eyebrow: "Engineering", title: "Core", description: "Design the systems that keep the world moving.", image: coreImage, accent: "#8dd7ff" },
  { eyebrow: "Markets", title: "Quant", description: "Where mathematics meets fast decisions.", image: quantImage, accent: "#f4c6ff" },
  { eyebrow: "Digital", title: "Tech", description: "Build useful things for millions of people.", image: techImage, accent: "#a8ffcf" },
  { eyebrow: "Insights", title: "Analytics", description: "Turn complex data into decisions that matter.", image: analyticsImage, accent: "#ffd66b" },
  { eyebrow: "Public service", title: "UPSC", description: "Prepare to serve, lead, and shape public policy.", image: upscImage, accent: "#ff9d7a" },
  { eyebrow: "Management", title: "CAT", description: "Open the door to India’s leading business schools.", image: catImage, accent: "#7ee7ff" },
  { eyebrow: "Academia", title: "Higher Studies", description: "Go deeper through research and advanced learning.", image: higherStudiesImage, accent: "#c9a8ff" },
  { eyebrow: "Entrepreneurship", title: "Startup", description: "Take an idea from first sketch to real-world impact.", image: startupImage, accent: "#ffef8a" },
];

// Keep the introductory card first while varying the order of the paths behind it.
export const cards = (() => {
  const [firstCard, ...shuffleableCards] = careerCards;

  for (let index = shuffleableCards.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffleableCards[index], shuffleableCards[randomIndex]] = [
      shuffleableCards[randomIndex],
      shuffleableCards[index],
    ];
  }

  return [firstCard, ...shuffleableCards];
})();

export const careerSlug = (title: string) =>
  title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export const cardFromUrl = () => {
  const slug = new URLSearchParams(window.location.search).get("career");
  if (!slug) return null;

  const index = cards.findIndex((card) => careerSlug(card.title) === slug);
  return index === -1 ? null : index;
};

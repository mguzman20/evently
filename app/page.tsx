'use client'
import { HeroParallax } from "@/components/ui/hero-parallax";

export default function Home() {
  return (

    <HeroParallax products={products} />
  );
}

export const products = [
  {
    title: "Lolapalooza",
    link: "/events",
    thumbnail:
      "/concert1.webp",
  },
  {
    title: "Tomorrowland",
    link: "/events",
    thumbnail:"/concert2.jpg",
  },
  {
    title: "Coachella",
    link: "/events",
    thumbnail:
      "/concert3.jpg",
  },
  {
    title: "Ultra Music Festival",
    link: "/events",
    thumbnail:
      "/concert4.jpeg",
  },
  {
    title: "EDC",
    link: "/events",
    thumbnail:
      "/concert.jpg",
  },
  {
    title: "Disco",
    link: "/events",
    thumbnail:
      "/disco.jpeg",
  },
  {
    title: "Disco",
    link: "/events",
    thumbnail:
      "/disco2.jpg",
  },
  {
    title: "Disco",
    link: "/events",
    thumbnail:
      "/disco3.jpg",
  },
  {
    title: "Disco",
    link: "/events",
    thumbnail:
      "/disco4.jpg",
  },
  {
    title: "Disco",
    link: "/events",
    thumbnail:
      "/disco1.jpg",
  }
];
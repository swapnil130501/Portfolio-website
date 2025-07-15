import {
  IconBrandReact,
  IconBrandDocker,
  IconBrandTailwind,
  IconBrandNodejs,
  IconBrandSocketIo,
  IconBrandNextjs,
  IconBrandMongodb,
  IconBrandVue,
  IconBrandJavascript,
  IconBrandMysql,
  IconBrandTypescript,
} from '@tabler/icons-react';

export const projects = [
  {
    title: "Code Sandbox",
    src: "/assets/projectidx.png",
    description:
      "A full-featured online code editor built with React, supporting file/folder structure, real-time preview, and terminal integration using Docker.",
    stack: [
      { name: "React", icon: IconBrandReact },
      { name: "Tailwind", icon: IconBrandTailwind },
      { name: "Docker", icon: IconBrandDocker },
    ],
    href: "https://github.com/swapnil130501/Project-IDX-Clone"
  },
  {
    title: "Video Call/Chat Application",
    src: "/assets/zoom.png",
    description:
      "A real-time video conferencing and chat app using WebRTC, Socket.IO, and React. Supports group video calls, screen sharing, and messaging.",
    stack: [
      { name: "React", icon: IconBrandReact },
      { name: "Socket.IO", icon: IconBrandSocketIo },
      { name: "Node.js", icon: IconBrandNodejs },
    ],
    href: "https://github.com/swapnil130501/Video-calling-app-frontend"
  },
  {
    title: "Airline Booking System",
    src: "/assets/airline.png",
    description:
      "A backend system for managing flight bookings, passengers, and schedules. Built with Node.js, Express, and a normalized relational database schema.",
    stack: [
      { name: "Express", icon: IconBrandVue }, // No Tabler icon for Express, this is a placeholder
      { name: "Node.js", icon: IconBrandNodejs },
      { name: "MySQL", icon: IconBrandMysql },
    ],
    href: "https://github.com/swapnil130501/BookingService"
  },
  {
    title: "Spotify UI",
    src: "/assets/spotify.png",
    description:
      "A sleek clone of the Spotify web app with playlist browsing, playback controls, and dynamic album/track rendering. Styled with Tailwind CSS.",
    stack: [
      { name: "JavaScript", icon: IconBrandJavascript },
      { name: "React", icon: IconBrandReact },
      { name: "Tailwind", icon: IconBrandTailwind },
    ],
    href: "https://github.com/swapnil130501/spotify-ui"
  },
  {
    title: "X (Twitter) Backend Clone",
    src: "/assets/x.png",
    description:
      "A robust backend clone of X (Twitter) built using Node.js, Express, and MongoDB. Includes features like user authentication, tweets, likes, retweets, and followers. Follows RESTful API design and scalable architecture.",
    stack: [
      { name: "Node.js", icon: IconBrandNodejs },
      { name: "MongoDB", icon: IconBrandMongodb },
      { name: "Express", icon: IconBrandVue },
    ],
    href: "https://github.com/swapnil130501/Twitter"
  },
  {
    title: "Netflix UI Clone",
    src: "/assets/netflix.png",
    description:
      "A pixel-perfect clone of Netflix's user interface built with Next.js and Tailwind CSS. Features a responsive layout, horizontal carousels, hover effects, and dynamic movie listing using TMDB API.",
    stack: [
      { name: "Next.js", icon: IconBrandNextjs },
      { name: "Tailwind", icon: IconBrandTailwind },
      { name: "TypeScript", icon: IconBrandTypescript },
    ],
    href: "https://github.com/swapnil130501/netflix-ui"
  },
];

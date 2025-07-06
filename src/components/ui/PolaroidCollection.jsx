import React from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "../../components/ui/draggable-card";

export function DraggableCardDemo() {
  const items = [
    {
      title: "Speedmaster",
      image:
        "src/assets/omega-speedmaster.webp",
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
    },
    {
      title: "Khaki Field Mechanical",
      image:
        "src/assets/hamilton-field.webp",
      className: "absolute top-5 left-[40%] rotate-[8deg]",
    },
    {
      title: "Alpanist",
      image:
        "src/assets/seiko-alpanist.webp",
      className: "absolute top-32 left-[55%] rotate-[10deg]",
    },
    {
      title: "Khaki Field Murph",
      image:
        "src/assets/hamilton-murph.webp",
      className: "absolute top-20 right-[35%] rotate-[2deg]",
    },
    {
      title: "Seamaster Aqua Terra",
      image:
        "src/assets/omega-seamaster.webp",
      className: "absolute top-24 left-[45%] rotate-[-7deg]",
    },
    {
      title: "Bambino",
      image:
        "src/assets/orient-bambino.webp",
      className: "absolute top-8 left-[30%] rotate-[4deg]",
    },
    {
      title: "PRX Powermatic 80",
      image:
        "src/assets/tissot-prx80.webp",
      className: "absolute top-10 left-[20%] rotate-[-5deg]",
    },
  ];
  return (
    <DraggableCardContainer
      className="relative flex min-h-[40rem] w-full items-center justify-center overflow-clip">
      <p
        className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
        Watches
      </p>
      {items.map((item) => (
        <DraggableCardBody className={item.className}>
          <img
            src={item.image}
            alt={item.title}
            className="pointer-events-none relative z-10 h-50 w-80 object-cover" />
          <h3
            className="mt-4 text-center text-base font-bold text-neutral-800">
            {item.title}
          </h3>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}

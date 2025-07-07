import { motion } from "motion/react";

export function TimelineItem({ title, date, description }) {
  return (
    <div className="relative pl-8 md:pl-12 mb-10">
      {/* Circle */}
      <div className="absolute left-0 top-1.5 w-4 h-4 bg-black rounded-full border-2 border-white z-10" />

      {/* Vertical Line */}
      <div className="absolute left-[7px] top-6 h-full w-0.5 bg-neutral-300" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30, filter: "blur(2px)" }}
        whileInView={{opacity: 1, y: 0, filter: "blur(0px)"}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white rounded-md p-4 shadow-sm"
      >
        <h3 className="font-semibold text-base text-neutral-800">{title}</h3>
        <span className="text-sm text-neutral-500">{date}</span>
        <p className="text-sm text-neutral-500 mt-2">{description}</p>
      </motion.div>
    </div>
  );
}

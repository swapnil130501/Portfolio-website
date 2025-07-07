import { TimelineItem } from "./TImelineItem";


export default function Timeline() {
  const items = [
  {
    title: "Backend Developer Journey Begins",
    date: "2022",
    description:
      "Started my career as a backend developer, building scalable backend systems and working with APIs, databases, and system design fundamentals.",
  },
  {
    title: "Transitioned to Full-Stack",
    date: "2023",
    description:
      "Began learning frontend technologies including HTML, CSS, JavaScript, and React to become a full-stack developer. Focused on building responsive and dynamic user interfaces.",
  },
  {
    title: "Research Intern at DRDO",
    date: "2023",
    description:
      "Worked as a frontend developer intern at DRDO on a research project. Gained experience building UI dashboards and improving performance for data-intensive applications.",
  },
  {
    title: "Software Engineer at Deloitte",
    date: "2024",
    description:
      "Joined Deloitte as a frontend developer. Contributing to enterprise-scale applications, focusing on UI design systems, accessibility, and performance optimization.",
  },
];

  return (
    <div className="mt-10 ml-1">
      {items.map((item, index) => (
        <TimelineItem key={index} {...item} />
      ))}
    </div>
  );
}

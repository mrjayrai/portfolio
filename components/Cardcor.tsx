import { HoverEffect } from "./ui/Card";


export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "C",
    description:
      "",
    link: "#",
    othr:"bg-indigo-900",
  },
  {
    title: "Java",
    description:
      "",
      link: "#",
    othr:"bg-red-500",
  },
  {
    title: "Python",
    description:
      "",
      link: "#",
    othr:"bg-gradient-to-r from-purple-400 md:from-yellow-500",
  },
  {
    title: "HTML",
    description:
      "",
      link: "#",
    othr:"bg-orange-600",
  },
  {
    title: "CSS",
    description:
      "",
    link: "#",
    othr:"bg-sky-700",
  },
  {
    title: "JS",
    description:
      "",
    link: "#",
    othr:"bg-yellow-400",
  },
  {
    title: "NextJs",
    description:
      "",
    link: "#",
    othr:"bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
  },
  {
    title: "React",
    description:
      "",
    link: "#",
    othr:"bg-indigo-800",
  },
  {
    title: "Angular",
    description:
      "",
    link: "#",
    othr:"bg-red-600",
  },
  {
    title: "Nodejs",
    description:
      "",
    link: "#",
    othr:"bg-green-600",
  },
  {
    title: "Express",
    description:
      "",
    link: "#",
    othr:"bg-slate-600",
  },
  {
    title: "SQL",
    description:
      "",
    link: "#",
    othr:"bg-[#00758f]",
  },
  {
    title: "MongoDB",
    description:
      "",
    link: "#",
    othr:"bg-[#3FA037]",
  },
  {
    title: "Tailwind",
    description:
      "",
    link: "#",
    othr:"bg-sky-900",
  },
  {
    title: "PHP",
    description:
      "",
    link: "#",
    othr:"bg-[#8892be]",
  },
];

import {
  RiCss3Fill,
  RiHtml5Fill,
  RiNextjsFill,
  RiNodejsFill,
  RiReactjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";

export const skills: { icon: React.ReactNode; name: string }[] = [
  {
    icon: <RiReactjsFill />,
    name: "React.js",
  },
  {
    icon: <RiNextjsFill />,
    name: "Next.js",
  },
  {
    icon: <RiHtml5Fill />,
    name: "HTML 5",
  },
  {
    icon: <RiCss3Fill />,
    name: "CSS 3",
  },
  {
    icon: <RiTailwindCssFill />,
    name: "Tailwind CSS",
  },
  {
    icon: <RiNodejsFill />,
    name: "Node.js",
  },
];

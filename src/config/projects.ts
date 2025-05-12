export type ProjectsType = {
  id: number;
  category: "frontend" | "fullstack" | "ui/ux" | "branding";
  title: string;
  description: string;
  image: string;
  link: string;
  github: string;
  tech: string[];
}[];

export const projects: ProjectsType = [
  {
    id: 1,
    category: "frontend",
    title: "LaunchWave Landing Page",
    description: "React + Tailwind landing page",
    image: "/assets/work/thumb1.png",
    link: "",
    github: "",
    tech: ["react", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: 2,
    category: "frontend",
    title: "NextFolio Portfolio Site",
    description: "Next.js portfolio site",
    image: "/assets/work/thumb2.png",
    link: "",
    github: "",
    tech: ["Next.js", "Tailwind CSS", "Shadcn UI"],
  },
  {
    id: 3,
    category: "fullstack",
    title: "AuthBoard Dashboard",
    description: "Mern app with authentication",
    image: "/assets/work/thumb3.png",
    link: "",
    github: "",
    tech: ["MongoDB", "Express", "React", "Node.js"],
  },
  {
    id: 4,
    category: "fullstack",
    title: "ChatSync Platform",
    description: "Real-time MERN app with chat functionality",
    image: "/assets/work/thumb4.png",
    link: "",
    github: "",
    tech: ["MERN", "Socket.IO", "Redux"],
  },
  {
    id: 5,
    category: "ui/ux",
    title: "FlowMobile App Design",
    description: "Mobile-firs Figma design",
    image: "/assets/work/thumb1.png",
    link: "",
    github: "",
    tech: ["Figma", "Adobe XD"],
  },
  {
    id: 6,
    category: "ui/ux",
    title: "ShopEase Dashboard Redesign",
    description: "Redesign of e-commerce dashboard",
    image: "/assets/work/thumb2.png",
    link: "",
    github: "",
    tech: ["Figma", "Framer", "Whimsical"],
  },
  {
    id: 7,
    category: "branding",
    title: "Brewhaus Brand Identity",
    description: "A bold and earthy visual identity for a modern coffee brand",
    image: "/assets/work/thumb3.png",
    link: "",
    github: "",
    tech: ["Illustrator", "Photoshop", "Figma"],
  },
  {
    id: 8,
    category: "branding",
    title: "LunaSkin luxury Branding",
    description: "Elegant branding for a premium skincare product line",
    image: "/assets/work/thumb4.png",
    link: "",
    github: "",
    tech: ["Photoshop", "Figma", "Canva"],
  },
  {
    id: 9,
    category: "branding",
    title: "NovaTach Brand Kit",
    description: "Full branding kit for a tech startup including logo and brand book",
    image: "/assets/work/thumb1.png",
    link: "",
    github: "",
    tech: ["Illustrator", "Figma", "Notion"],
  },
];

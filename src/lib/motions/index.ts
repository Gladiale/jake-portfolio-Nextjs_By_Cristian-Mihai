import { type Variants } from "framer-motion";

export const rectangleVariants: Variants = {
  initial: {
    y: "-100%",
    height: "100%",
  },
  animate: {
    y: "0%",
    height: "0%",
  },
  exit: {
    y: ["0%", "-100%"],
    height: ["0%", "100%"],
  },
};

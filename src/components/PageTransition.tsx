"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const PageTransition = ({ children }: React.PropsWithChildren) => {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      <motion.div
        key={pathname}
        initial={{ opacity: 1 }}
        animate={{
          opacity: 0,
          transition: {
            delay: 1,
            duration: 0.4,
            ease: "easeInOut",
          },
        }}
        className="fixed top-0 min-h-screen w-screen pointer-events-none"
      />
      {children}
    </AnimatePresence>
  );
};

export default PageTransition;

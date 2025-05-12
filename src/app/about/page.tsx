"use client";
import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
// components
import Stats from "@/components/Stats";
import Testimonial from "@/components/Testimonial";
import Info from "@/components/Info";
import Journey from "@/components/Journey";
import Skills from "@/components/Skills";
import Image from "next/image";
import Blob from "@/components/Blob";
import Socials from "@/components/Socials";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="h-screen flex items-center"
    >
      <div className="container mx-auto px-0">
        <div className="flex flex-col xl:flex-row items-center gap-24 w-full h-[680px]">
          {/* img & social icons */}
          <div className="hidden relative xl:flex flex-col w-full h-full pt-14 max-w-[430px]">
            <Image
              src="/assets/avatar.png"
              alt="avatar"
              width={0}
              height={0}
              sizes="320px"
              className="w-[320px] h-auto z-20 relative"
            />

            {/* overlay */}
            <div className="w-full h-[60px] absolute left-0 top-[420px] right-0 bg-gradient-to-t from-primary via-primary/90 z-30" />
            {/* blob */}

            <div className="absolute top-[80px] -left-[80px] z-10">
              <Blob containerStyle="w-[420px] h-[420px]" />
            </div>

            <Socials
              containerStyles="flex gap-4 z-40 w-max transform translate-x-[30px]"
              iconStyles="w-[48px] h-[48px] text-[1.4rem] text-accent hover:text-accent-hover flex items-center justify-center rounded-full cursor-pointer transition-all"
            />
          </div>
          {/* scroll area */}
          <ScrollArea className="w-full h-[680px]">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <p>About me</p>
              </div>
              <h2 className="h2 mb-6">
                <span className="text-accent">Jake</span> Doe
              </h2>

              <p className="max-w-[540px] mb-12">
                I focus on crafting visually stunning, user-friendly web experience that
                not only look great but also function seamlessly, ensuring every detail is
                carefully designed and executed.
              </p>

              <div className="flex flex-col items-start gap-16">
                <Stats />
                <Testimonial />
                <Info />
                <Journey />
                <Skills />
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    </motion.section>
  );
};

export default About;

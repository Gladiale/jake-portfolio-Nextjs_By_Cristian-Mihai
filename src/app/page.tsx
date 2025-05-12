"use client";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { MdArrowOutward } from "react-icons/md";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
// components
import Image from "next/image";
import Blob from "@/components/Blob";
import Socials from "@/components/Socials";
import Pattern from "@/components/Pattern";

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="h-screen content-center"
    >
      {/* pattern */}
      <Pattern />
      <div className="flex flex-col xl:flex-row items-center justify-between w-full">
        {/* text */}
        <div className="w-full xl:w-[550px] flex flex-col items-center text-center xl:items-start xl:text-left">
          <h1 className="h1 flex-1 mb-[28px]">
            Hi! I&apos;m Jake, <br />
            <TypeAnimation
              wrapper="span"
              speed={40}
              repeat={Infinity}
              cursor={false}
              sequence={["Web Developer", 2000, "Web Designer", 2000]}
              className="text-accent"
            />
          </h1>
          <p className="max-w-[500px] mb-[44px]">
            I build visually captivating, user-friendly website and web apps that
            transform your ideas into seamless, engaging digital experiences.
          </p>
          <button
            type="button"
            className="btn btn-lg btn-accent mb-16 flex items-center gap-3"
          >
            <span>Let&apos;s talk.</span>
            <MdArrowOutward className="text-xl" />
          </button>

          {/* contact info */}
          <div className="flex flex-col gap-4 mb-12 xl:flex-row xl:items-center xl:gap-8 xl:mb-0">
            {/* phone */}
            <div className="flex items-center gap-4 text-lg">
              <span className="text-accent">
                <HiOutlinePhone className="text-xl" />
              </span>
              <span>+40 22 33 44 55</span>
            </div>
            {/* mail */}
            <div className="flex items-center gap-4 text-lg">
              <span className="text-accent">
                <HiOutlineMail className="text-xl" />
              </span>
              <span>jake@gmail.com</span>
            </div>
          </div>

          {/* socials */}
          <Socials
            containerStyles="flex gap-6 xl:hidden 2xl:flex 2xl:flex-col 2xl:absolute 2xl:top-1/2 2xl:-translate-y-1/2 2xl:right-2 2xl:-translate-x-1/2"
            iconStyles="bg-accent text-white hover:bg-accent-hover transition-colors w-[48px] h-[48px] text-[22px] flex items-center justify-center rounded-full cursor-pointer"
          />
        </div>

        {/* blob & image */}
        <div className="hidden xl:block flex-1 relative z-20">
          {/* blob */}
          <Blob containerStyle="w-[560px] h-[560px]" />
          {/* avatar img */}
          {/* nextjs errorの修正は参照 https://stackoverflow.com/questions/69230343/nextjs-image-component-with-fixed-witdth-and-auto-height */}
          <Image
            src="/assets/avatar.png"
            priority
            alt="avatar"
            width={0}
            height={0}
            sizes="440px"
            className="w-[440px] h-auto absolute -top-16 left-[120px]"
          />
          {/* overlay gradient */}
          <div className="w-full h-[164px] absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary via-primary/90 to-primary/40"></div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;

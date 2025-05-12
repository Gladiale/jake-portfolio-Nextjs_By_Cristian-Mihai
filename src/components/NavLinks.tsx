"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/config/navLinks";

type Props = {
  containerStyles: string;
};

const NavLinks = ({ containerStyles }: Props) => {
  const pathname = usePathname();

  return (
    <ul className={containerStyles}>
      {navLinks.map((link, index) => (
        <Link
          key={index}
          href={link.path}
          className={`relative text-lg uppercase text-white ${
            pathname === link.path &&
            `after:content-[''] after:block after:absolute after:left-0 after:top-1/2
              after:h-[4px] after:bg-accent after:-translate-y-1/2 after:z-0
              ${link.name.length > 5 ? "after:w-[120%]" : "after:w-[90%]"}`
          }`}
        >
          <span className="relative z-10">{link.name}</span>
        </Link>
      ))}
    </ul>
  );
};

export default NavLinks;

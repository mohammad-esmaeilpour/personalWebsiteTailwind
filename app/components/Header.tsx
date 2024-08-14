"use client";
import Link from "next/link";
import React, { Fragment, useEffect } from "react";
import { navData } from "@/public/data/layout";
import { useParams, usePathname } from "next/navigation";
import { useRouter } from "next/router";

const Header = () => {
  const navItem = usePathname();

  return (
    <header>
      <nav className="container mx-auto flex py-4 max-w-6xl z-50">
        <ul className="flex items-center z-50">
          {navData.links.map((item) => (
            <li key={item.id} className="mx-2.5">
              <Link
                href={item.link}
                className={`relative ${
                  navItem === item.link && "font-bold text-black"
                }`}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
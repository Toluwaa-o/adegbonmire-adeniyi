"use client";
import { useState } from "react";
import Link from "next/link";
import HamburgerMenu from "./HamburgerMenu";
import { ImDiamonds } from "react-icons/im";
import { usePathname } from "next/navigation";
import data from "../Data/Links";
import LinkItem from "./LinkItem";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const pname = usePathname();

  return (
    <nav className="md:py-4 md:px-10 md:bg-accent-white">
      <HamburgerMenu showNavBar={show} clickHandler={setShow} />
      {show && (
        <ul className="fixed h-[100vh] w-[100vw] top-0 left-0 bg-accent-white grid place-content-center nav_animation text-3xl gap-8 text-darkest-blue z-20 md:hidden">
          {data.map((item) => (
            <LinkItem
              key={item.page}
              {...item}
              pname={pname}
              clickHandler={setShow}
              show={show}
            />
          ))}
        </ul>
      )}
      <ul className="hidden md:flex md:gap-[2rem]">
          {data.map((item) => (
            <LinkItem
              key={item.page}
              {...item}
              pname={pname}
              clickHandler={setShow}
              show={show}
            />
          ))}
        </ul>
    </nav>
  );
};
export default Navbar;

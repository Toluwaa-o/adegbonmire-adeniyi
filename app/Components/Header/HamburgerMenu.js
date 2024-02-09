"use client";
import { useEffect, useState } from "react";

const HamburgerMenu = ({ showNavBar, clickHandler }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(showNavBar);
  }, [showNavBar]);

  const myClickHandler = () => {
    setShow(!show);
    clickHandler(!show);
  };

  return (
    <div
      id="nav-icon1"
      className={show ? "open z-30 md:hidden" : " z-30 md:hidden"}
      onClick={myClickHandler}
    >
      <span
        className={`${show ? "bg-darkest-blue" : "bg-accent-white"}`}
      ></span>
      <span
        className={`${show ? "bg-darkest-blue" : "bg-accent-white"}`}
      ></span>
      <span
        className={`${show ? "bg-darkest-blue" : "bg-accent-white"}`}
      ></span>
    </div>
  );
};
export default HamburgerMenu;

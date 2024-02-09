import Navbar from "./Navbar";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: "500" });

const Header = () => {
  return (
    <header className={`p-4 flex md:flex-col justify-between ${cormorant.style} md:p-0 md:bg-accent-white`}>
      <h1 className="text-xl text-accent-white md:text-3xl md:p-10 md:pt-[3rem] md:bg-darkest-blue">Adegbonmire Adeniyi</h1>
      <Navbar />
    </header>
  );
};
export default Header;

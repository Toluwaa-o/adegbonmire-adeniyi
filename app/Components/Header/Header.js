import Navbar from "./Navbar";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: '500' });

const Header = () => {
  return (
    <div className={`p-4 flex justify-between ${cormorant.style}`}>
      <h1 className="text-xl text-accent-white">Adegbonmire Adeniyi</h1>
      <Navbar />
    </div>
  );
};
export default Header;

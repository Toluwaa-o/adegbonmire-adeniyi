import { Roboto_Condensed } from "next/font/google";
import Link from "next/link";
import { BsTelephoneFill } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";

const roboto_condensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: "700",
});

export default function Location() {
  return (
    <span className="flex justify-between flex-col gap-4 md:flex-row items-center md:items-start text-accent-white">
      <h3 className={`${roboto_condensed.className} uppercase text-xl`}>
        ONDO
      </h3>
      <address className="not-italic md:hover:text-hoverColor transition-all">
        Ondo State, Nigeria.
      </address>
      <span className="flex items-center gap-1 m-auto md:hover:text-hoverColor transition-all">
        <FaEnvelope size={21} />
        <Link href="mailto:niyiadegbonmire@hotmail.com">
          niyiadegbonmire@hotmail.com
        </Link>
      </span>
    </span>
  );
}

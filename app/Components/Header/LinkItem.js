import Link from "next/link";
import { ImDiamonds } from "react-icons/im";

const LinkItem = ({ page, link, pname, clickHandler, show }) => {
  return (
    <li
      onClick={() => clickHandler(!show)}
      className={`${
        pname === link ? "text-contrast font-bold" : "text-darkest-blue"
      }`}
    >
      <Link href={`${link}`} className="flex gap-2 items-center text-xl md:text-2xl">
        <ImDiamonds size={23} className="md:hidden" />
        <p>{page}</p>
      </Link>
    </li>
  );
};
export default LinkItem;

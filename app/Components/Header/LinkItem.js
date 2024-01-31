import Link from "next/link";
import { ImDiamonds } from "react-icons/im";

const LinkItem = ({ page, link, pname }) => {
  console.log(pname)
  return (
    <li className={`${(pname === link ?  "text-contrast font-bold" : "text-darkest-blue")}`}>
      <Link href={`${link}`} className="flex gap-2 items-center">
        <ImDiamonds size={23} />
        <p>{page}</p>
      </Link>
    </li>
  );
};
export default LinkItem;

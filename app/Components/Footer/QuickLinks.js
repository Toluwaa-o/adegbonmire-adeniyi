import Link from "next/link";

export default function QuickLinks() {
  return (
    <span className="flex flex-col gap-5 text-accent-white">
      <h3 className={`uppercase text-xl`}>Quick Links</h3>
      <nav>
        <ul className="flex flex-col gap-2">
          <li className="md:hover:text-hoverColor transition-all">
            <Link href="/about">About us</Link>
          </li>
          <li className="md:hover:text-hoverColor transition-all">
            <Link href="/services">Services</Link>
          </li>
          <li className="md:hover:text-hoverColor transition-all">
            <Link href="/contact-us">Contact us</Link>
          </li>
        </ul>
      </nav>
    </span>
  );
}

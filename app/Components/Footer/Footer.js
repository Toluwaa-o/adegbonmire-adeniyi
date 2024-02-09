import Copyright from "./Copyright";
import Location from "./Location";
import QuickLinks from "./QuickLinks";

const Footer = () => {
  return (
    <footer className="text-center flex flex-col gap-[3rem] px-4 py-[4rem] bg-darkest-blue">
      <QuickLinks />
      <Location />
      <Copyright />
    </footer>
  );
};
export default Footer;

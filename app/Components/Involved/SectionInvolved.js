import SupportCards from "../Support/Cards";

const SectionInvolved = () => {
  return (
    <div className="flex flex-col py-[4rem] px-4 gap-4">
      <h2 className="text-center text-2xl font-bold text-accent-white md:text-4xl">
        Join Us
      </h2>
      <p className="text-center text-md tracking-wide text-accent-white pb-[2rem]">
        Support our ongoing initiatives.
      </p>

      <SupportCards />
    </div>
  );
};
export default SectionInvolved;

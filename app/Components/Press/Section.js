import Cards from "./Cards";

const Section = ({ pr }) => {
  return (
    <div className="flex flex-col text-darkest-blue bg-accent-white py-[3rem] px-4 gap-4 md:p-[4rem]">
      <h2 className="text-center text-2xl font-bold md:text-4xl">
        In the Press
      </h2>
      <p className="text-center text-md tracking-wide md:text-2xl">
        Here you will find stories and the latest headlines about Adegbonmire
        Adeniyi and the issues at the heart of their campaign. Take a look at
        our featured pieces below and let us know if you would like more
        information. If you're a member of the press, contact us today.
      </p>

      <Cards />
    </div>
  );
};
export default Section;

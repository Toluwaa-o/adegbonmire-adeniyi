const Page = () => {
  return (
    <div className="py-8 px-4 text-center flex flex-col items-center bg-accent-white text-dark-blue gap-8">
      <img
        src="/images/Mr2.png"
        alt="Mr Adegbonmire Adeniyi"
        className="w-[230px] h-[200px] rounded-full md:w-[310px] md:h-[300px]"
      />
      <span className="grid gap-7 pb-10">
        <h2 className="text-3xl font-bold">About</h2>
        <p className="tracking-wide md:w-[50%] m-auto">
          Working in the political realm for many years, Adeniyi Adegbonmire has
          a history of excellence, and holds the public interest very close to
          heart. Throughout their career, Adeniyi Adegbonmire and the team of
          experts around them have been dedicated to bringing about change and
          making their Ondo Central Senatorial District a better place for all.
          <br />
          <br />
          Adeniyi Adegbonmire is, and has always been, a go-getter. They have
          set their standards very high, and will continue to fight for change
          until their vision has been reached. Please explore the site to find
          out more about Adeniyi Adegbonmire and their vision for change.
        </p>
      </span>
    </div>
  );
};
export default Page;

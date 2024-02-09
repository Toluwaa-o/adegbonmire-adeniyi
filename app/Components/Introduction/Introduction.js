const Introduction = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse md:items-center md:bg-accent-white">
      <span className="px-4 py-8 bg-accent-white text-center grid gap-4 md:items-center">
        <h2 className="text-4xl font-bold text-gray-800 md:text-6xl md:font-semibold">
          Presenting your Incumbent Leader
        </h2>
        <p className="text-gray-500 md:text-2xl">Continued Transformation Ahead</p>
      </span>
      <img src="/images/Mr2.png" className="md:w-[50%]" alt="Mr Adegbonmire Adeniyi" />
    </div>
  );
};
export default Introduction;

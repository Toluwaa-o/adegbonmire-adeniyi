const SupportCard = ({ title, description, img }) => {
  return (
    <div className="flex flex-col-reverse md:flex-row pb-[2rem] md:w-[80%] md:m-auto md:items-center md:bg-accent-white md:h-fit md:pb-0">
      <span className="bg-accent-white p-4 grid gap-3 md:text-darkest-blue md:p-5">
        <h3 className="text-xl font-bold md:text-2xl text-gray-800">{title}</h3>
        <p>{description}</p>
      </span>
      <img src={img} alt={title} className="min-w-[360px] h-[250px] md:w-[50%] md:h-[60vh]" />
    </div>
  );
};
export default SupportCard;

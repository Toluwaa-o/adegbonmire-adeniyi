const SupportCard = ({ title, description, img }) => {
  return (
    <div className="flex flex-col-reverse pb-[2rem]">
      <span className="bg-accent-white p-4 grid gap-3">
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <p>{description}</p>
      </span>
      <img src={img} alt={title} className="w-[360px] h-[250px]" />
    </div>
  );
};
export default SupportCard;

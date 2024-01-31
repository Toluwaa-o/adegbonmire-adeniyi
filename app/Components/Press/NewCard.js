const NewCard = ({ image, link, title, description }) => {
  return (
    <a
      href={link}
      className="relative rounded-md overflow-hidden max-w-[400px]"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={image} alt={title} />
      <span className="absolute z-10 bottom-0 right-0 text-accent-white text-[1rem] tracking-wider left-0 font-bold bg-dark-blue p-2">
        <h3 className="uppercase">{title}</h3>
        <p className="hidden md:block">{description}</p>
      </span>
    </a>
  );
};
export default NewCard;

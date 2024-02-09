const NewCard = ({ image, link, title, description }) => {
  return (
    <a
      href={link}
      className="relative rounded-md overflow-hidden max-w-[400px] md:hover:scale-105 md:transition-all m-auto"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={image} alt={title} className="w-[100%]" />
      <span className="absolute top-0 bottom-0 left-0 right-0 h-full w-full bg-dark-blue opacity-50"></span>
      <span className="absolute z-10 bottom-0 right-0 text-accent-white text-[1rem] tracking-wider left-0 font-bold p-2 md:grid md:gap-4 md:hover:opacity-100 md:transition-all md:text-accent-white md:p-4">
        <h3 className="uppercase">{title}</h3>
        <p className="hidden md:block">{description.slice(0, 100)}...</p>
      </span>
    </a>
  );
};
export default NewCard;

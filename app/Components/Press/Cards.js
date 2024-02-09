import data from "../Data/Press";
import NewCard from "./NewCard";

const Cards = () => {
  return (
    <div className="flex flex-col gap-[4rem] py-8 md:flex-row md:justify-around">
      {data.map((news) => (
        <NewCard key={news.title} {...news} />
      ))}
    </div>
  );
};
export default Cards;

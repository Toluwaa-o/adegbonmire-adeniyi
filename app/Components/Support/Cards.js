import data from "../Data/JoinUs";
import SupportCard from "./SupportCard";

const SupportCards = () => {
  return (
    <div className="grid gap-10">
      {data.map((dt) => (
        <SupportCard key={dt.title} {...dt} />
      ))}
    </div>
  );
};
export default SupportCards;

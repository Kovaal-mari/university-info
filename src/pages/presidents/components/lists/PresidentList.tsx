import presidents from "../../../../database/db";
import PresidentCard from "../cards/PresidentCard";

const PresidentList = () => {
  return (
    <div className="flex flex-col gap-y-12">
      {presidents.map((president, index) => (
        <PresidentCard key={index} president={president} />
      ))}
    </div>
  );
};

export default PresidentList;

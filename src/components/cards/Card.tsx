import { Link } from "react-router-dom";
import universityDb from "../../database/db";

const Card = () => {
  return (
    <Link to={`/university/${universityDb[0].id}`}>
      <div className="rounded-xl shadow-sm max-w-[330px] w-full min-h-[300px] bg-[#fff] hover:cursor-pointer">
        <img
          className="max-w-full max-h-full rounded-xl"
          src={universityDb[0].image}
          alt={universityDb[0].name}
        />
        <div className="px-3 py-6">
          <p className="text-[17px] font-bold text-center">{universityDb[0].name}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;

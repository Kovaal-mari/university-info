import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <Link to={"/"}>
          <img className="max-w-[64px] max-h-[64px]" src="src/assets/nuzp-logo.svg.png" alt="NUZP logo" />
        </Link>
      </div>
      <div>
        <nav>
          <ul className="flex gap-x-10">
            <Link to={"/history-and-modernity"}>Історія та сучасність</Link>
            <Link to={"/memorable-dates"}>Пам'ятні дати</Link>
            <Link to={"/presidents"}>Ректори</Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;

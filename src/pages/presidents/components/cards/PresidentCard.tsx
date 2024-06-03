import { President } from "../../../../interface";

interface PresidentCardProps {
  president: President;
}

const PresidentCard = ({ president }: PresidentCardProps) => {
  const flex = president.id % 2 == 0 ? "flex-row" : "flex-row-reverse";
  const classes = `flex ${flex} items-center justify-center gap-x-6`;
  return (
    <div className={classes}>
      <div>
        <h2 className="font-bold text-[26px]">{president.name}</h2>
        <p className="mt-4">{president.title}</p>
        <p className="max-w-[800px] mt-2">{president.description}</p>
      </div>
      <div>
        <img src={president.imageUrl} alt={president.name} />
      </div>
    </div>
  );
};

export default PresidentCard;

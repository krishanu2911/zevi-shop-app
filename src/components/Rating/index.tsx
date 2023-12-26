import { starGrey, startGold } from "../../constants/imageUrl";

interface Props {
  score: number;
  rateCount?: number;
}

const Rating: React.FC<Props> = ({ score, rateCount }) => {
  const ratingStars: JSX.Element[] = [];
  const totalRating = 5;
  for (let i = 1; i <= totalRating; i++) {
    ratingStars.push(
      <img
      key={`rate_${i}`}
        src={i <= score ? startGold : starGrey}
        alt="rating starts"
        className=" sm:w-4 sm:h-4 w-3 h-3"
      />
    );
  }

  return (
    <div className="flex gap-2 items-center">
      {ratingStars} <h1 className="text-xs">{rateCount}</h1>
    </div>
  );
};

export default Rating;

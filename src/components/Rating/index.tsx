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
        src={i <= score ? startGold : starGrey}
        alt="rating starts"
        className=" w-4 h-4"
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

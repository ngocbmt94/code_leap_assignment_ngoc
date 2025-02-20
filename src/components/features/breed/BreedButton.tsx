import { TypeVote } from "../../../types";
import useVote from "../../../hooks/breed/useVote";

const BreedButton: React.FC = () => {
  const { submitVote, isLoading } = useVote();

  return (
    <div className="card-action">
      <button disabled={isLoading} onClick={() => submitVote(TypeVote.Like)} aria-label="like" className="like-button">
        Like
      </button>
      <button disabled={isLoading} onClick={() => submitVote(TypeVote.DisLike)} aria-label="dislike" className="dislike-button">
        DisLike
      </button>
    </div>
  );
};

export default BreedButton;

import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { RootState } from "../../../redux/store";

const BreedImage: React.FC = () => {
  const navigation = useNavigate();
  const breed = useSelector((state: RootState) => state.dogBreed.breed);
  const image = breed?.image;
  const url = image?.url || {};
  const aspectRatio = image?.height && image?.width ? image.height / image.width : 0;

  const handleClick = () => {
    if (!breed) return;
    navigation(`detail/${breed?.id}`);
  };

  if (!breed) return null;

  return (
    <div
      style={{
        paddingBottom: `${aspectRatio * 100}%`,
        backgroundImage: `url(${url})`,
      }}
      className="card-item"
      aria-label={breed?.name}
      onClick={handleClick}
    >
      <div className="card-item-content">
        <h4>{breed?.name}</h4>
        <p>{breed?.bred_for}</p>
      </div>
    </div>
  );
};

export default BreedImage;

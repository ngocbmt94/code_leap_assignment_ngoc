import React from "react";

import BreedImage from "../../components/features/breed/BreedImage";

import Error from "../../components/ui/Error";
import useBreeds from "../../hooks/breed/useBreeds";
import useSwipeableHandler from "../../hooks/breed/useSwipeableHandler";

const List: React.FC = () => {
  const { error } = useBreeds();
  const { handlers } = useSwipeableHandler();

  if (error) return <Error message={error?.message || "Something went wrong while fetching the breed list page."} />;

  return (
    <div className="card-list" {...handlers}>
      <BreedImage />
    </div>
  );
};

export default List;

import React from "react";
import { useSelector } from "react-redux";

import { RootState } from "../../redux/store";

const Loading: React.FC = () => {
  const isLoading = useSelector((state: RootState) => state.loading.isLoading);

  if (!isLoading) return null;

  return (
    <div className="loading-container">
      <div className="spinner"></div>
    </div>
  );
};

export default Loading;

import React from "react";
import BreedButton from "../components/features/breed/BreedButton";
import Loading from "../components/ui/Loading";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="full-screen-layout">
      <div className="card-container">
        {children}
        <BreedButton />
      </div>
      <Loading />
    </div>
  );
};

export default Layout;

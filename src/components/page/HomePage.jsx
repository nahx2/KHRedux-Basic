import React from "react";
import ReduxBottom from "../include/ReduxBottom";
import ReduxHeader from "../include/ReduxHeader";

const HomePage = (props) => {
  return (
    <>
      <ReduxHeader />
      <div className="container">Home 페이지</div>
      <ReduxBottom />
    </>
  );
};

export default HomePage;

import React from "react";
import ReduxBottom from "../include/ReduxBottom";
import ReduxHeader from "../include/ReduxHeader";

const NoticePage = (props) => {
  return (
    <>
      <ReduxHeader />
      <div className="container">공지사항</div>
      <ReduxBottom />
    </>
  );
};

export default NoticePage;

import React from "react";
import ReduxBottom from "./components/include/ReduxBottom";
import ReduxHeader from "./components/include/ReduxHeader";
import MainPage from "./page/MainPage";

function ReduxApp(props) {
  return (
    <div>
      <ReduxHeader />
      <MainPage />
      <ReduxBottom />
    </div>
  );
}

export default ReduxApp;

import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/page/HomePage";
import NoticePage from "./components/page/NoticePage";

const ReduxRouterApp = (props) => {
  return (
    <>
      <Routes>
        <Route path="/" exact={true} element={<HomePage />} />
        <Route path="/notice" exact={true} element={<NoticePage />} />
      </Routes>
    </>
  );
};

export default ReduxRouterApp;

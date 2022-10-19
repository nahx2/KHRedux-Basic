import React from "react";
import { Route, Routes } from "react-router-dom";

const ReduxRouterApp = () => {
  return (
    <div>
      <Routes>
        <Route path="/" exact={true} element={<HomePage />} />
        <Route path="/notice" exact={true} element={<NoticePage />} />
      </Routes>
    </div>
  );
};

export default ReduxRouterApp;

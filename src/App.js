import Bottom from "./components/include/Bottom";
import Header from "./components/include/Header";
import "./App.css";
import { useState } from "react";
import KakaoMapTest from "./kakao/KakaoMapTest";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [number, setNumber] = useState(1);
  const increase = () => {
    setNumber(number + 1);
  };
  const decrease = () => {
    setNumber(number - 1);
  };
  return (
    <>
      <div className="container">
        <h1>React Redux</h1>
        <Header number={number} />
        <KakaoMapTest />
        <Bottom increase={increase} decrease={decrease} />
      </div>
    </>
  );
};

export default App;

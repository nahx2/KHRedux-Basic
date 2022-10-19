import Header from "./components/include/Header";
import Bottom from "./components/include/Bottom";
import { useState } from "react";
import TomatoTalk from "./components/talk/TomatoTalk";

const App = () => {
  const [number, setNumber] = useState(0);
  const increase = () => {
    setNumber(number + 1);
  };
  const decrease = () => {
    setNumber(number - 1);
  };
  return (
    <div className="container">
      <Header number={number} />
      <h1>Hello Redux</h1>

      <TomatoTalk />
      <Bottom increase={increase} decrease={decrease} />
    </div>
  );
};

export default App;

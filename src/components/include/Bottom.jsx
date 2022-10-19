import React from "react";

const Bottom = ({ increase, decrease }) => {
  return (
    <div className="sub_container">
      <h2>바텀섹션</h2>
      <button onClick={decrease}>감소</button>
      <button onClick={increase}>증가</button>
    </div>
  );
};

export default Bottom;

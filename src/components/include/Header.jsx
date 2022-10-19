import React from "react";
import SubHeader from "./SubHeader";

const Header = (props) => {
  const { number } = props;
  return (
    <div className="sub_container">
      <h2>헤더섹션</h2>
      번호 : {number}
      <SubHeader number={number} />
    </div>
  );
};

export default Header;

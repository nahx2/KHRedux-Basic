import { async } from "@firebase/util";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { loginGoogle, logout } from "../service/authLogic";
// spread 연산자, 얕은 복사, 구조분해할당 - 기초
const ReduxHeader = () => {
  const dispatch = useDispatch();
  const number = useSelector((store) => store.number);
  const mem_name = useSelector((store) => store.mem_name);
  const empVO = useSelector((store) => store.empVO);
  const firebaseAuth = useSelector((store) => store.firebaseAuth);
  const googleProvider = useSelector((store) => store.googleProvider);
  const [userId, setUserId] = useState();
  useEffect(() => {
    setUserId(window.localStorage.getItem("userId"));
  }, []);
  // const { number, mem_name } = useSelector((store) => store.number);
  const handleGoogle = async () => {
    try {
      const result = await loginGoogle(firebaseAuth, googleProvider);
      console.log(result.uid);
      window.localStorage.setItem("userId", result.uid);
      window.location.reload();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="sub_container">
      <h2>헤더 섹션</h2>
      <div style={{ display: "flex" }}>
        <Link to="/" className="nav-link">
          Home
        </Link>
        &nbsp;&nbsp;
        <Link to="/notice" className="nav-link">
          게시판
        </Link>
      </div>
      {userId ? (
        <Button
          variant="dark"
          onClick={() => {
            logout(firebaseAuth);
            window.location.reload();
          }}
        >
          Logout
        </Button>
      ) : (
        <Button onClick={handleGoogle}>Google</Button>
      )}
      번호 : {number}
      &nbsp;&nbsp; 이름 : {mem_name}
      &nbsp;&nbsp; 사원정보 :
      {empVO && `사원번호:${empVO.empno}, 사원명:${empVO.ename}`}
    </div>
  );
};

export default ReduxHeader;

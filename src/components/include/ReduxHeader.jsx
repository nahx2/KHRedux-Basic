import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { loginGoogle } from "../service/authLogic";
// 스프레드연산자, 얕은복사, 구조분해할당
const ReduxHeader = () => {
  const dispatch = useDispatch();
  const number = useSelector((store) => store.number);
  const mem_name = useSelector((store) => store.mem_name);
  const empVO = useSelector((store) => store.empVO);
  const firebaseAuth = useSelector((store) => store.firebaseAuth);
  const googleProvider = useSelector((store) => store.googleProvider);
  const [userd, setUserid] = useState();
  useEffect(() => {
    4;

    setUserid(window.localStorage.getItem("userId"));
  }, []);
  const handleGoogle = async () => {
    try {
      const result = await loginGoogle(firebaseAuth, googleProvider);
      console.log(result.uid);
      window.localStorage.setItem("userId", result.uid);
      window.localStorage.reload();
    } catch (e) {
      console.log(e);
    }
  };
  //const { number, mem_name } = useSelector((store) => store);
  return (
    <div>
      <h1>redex 헤더글</h1>
      <div style={{ display: "flex" }}>
        <Link to="/" className="nav-link">
          Home
        </Link>
        &nbsp;&nbsp;
        <Link to="/board" className="nav-link">
          게시판
        </Link>
      </div>
      {userId ? (
        <button
          variant="primary"
          onClick={() => {
            logout(firebaseAuth);
            window.localStorage.reload();
          }}
        >
          Logout
        </button>
      ) : (
        <button variant="primary" onClick={handleGoogle}>
          Google
        </button>
      )}
      번호 : {number}
      이름 : {mem_name}
      &nbsp;&nbsp; 사원정보:
      {empVO && `사원번호:${empVO.empno}, 사원명:${empVO.ename}`}
    </div>
  );
};

export default ReduxHeader;

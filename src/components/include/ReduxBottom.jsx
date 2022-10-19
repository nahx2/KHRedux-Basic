import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { decrease, deptlist, increase, reset } from "../../store";

const ReduxBottom = () => {
  const dispatch = useDispatch();
  const handleReset = () => {
    // 화면이 랜더링된 후에 내용물이 변경될 때는 상태를 바꿔주자 - 리덕스 컨벤션
    // 파라미터에 담아야 할 것은? action이다.
    // store.js에 action을 선언할 것 - reset is not defined
    // 커리함수 문법(커링정의) - 함수의 파라미터를 누적되게 넘길 수 있다. - 컨벤션만 사용
    dispatch(reset());
  };
  const [depts, setDepts] = useState([
    { DEPTNO: 40, DNAME: "인사", LOC: "서울" },
    { DEPTNO: 50, DNAME: "IT", LOC: "인천" },
    { DEPTNO: 60, DNAME: "산하", LOC: "경기" },
  ]);
  return (
    <div className="sub_container">
      <h3>바닥글 섹션</h3>
      <button onClick={() => dispatch(increase("김유신"))}>증가</button>
      &nbsp;&nbsp;
      <button onClick={() => dispatch(decrease({ empno: 200, ename: "망망" }))}>
        감소
      </button>
      &nbsp;&nbsp;
      <button onClick={handleReset}>초기화</button>
      &nbsp;&nbsp;
      <button onClick={() => dispatch(deptlist(depts))}>부서목록</button>
    </div>
  );
};

export default ReduxBottom;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deptlist, increase } from "../../store";

const ReduxBottom = () => {
  const dispatch = useDispatch();
  const handleReset = () => {
    //화면이 렌더링 된 후에 내용물이 변경될 때는 상태를 바꿔주자 - 리덕스 컨벤션
    //파라미터에 담아야 할 것은 무엇인가요?
    //store.js에 action을 선언할 것 - reset is not definded
    //커리함수 문법(커링정의) - 함수의 파라미터를 누적되게 넘길 수 있다. - 컨벤션만 사용함
    dispatch(reset());
  };
  const [depts, setDepts] = useState([
    {
      DEPTNO: 10,
      DNAME: "총무부",
      LOC: "서울",
    },
    {
      DEPTNO: 20,
      DNAME: "개발부",
      LOC: "제주",
    },
    {
      DEPTNO: 30,
      DNAME: "인사부",
      LOC: "대구",
    },
  ]);
  return (
    <div>
      <h1>redex 바닥글</h1>
      <button onClick={() => dispatch(increase("김유신"))}>증가</button>
      <button
        onClick={() => dispatch(decrease({ empno: 2000, ename: "나일등" }))}
      >
        감소
      </button>
      <button onClick={handleReset}>초기화</button>
      <button onClick={() => dispatch(deptlist(depts))}>부서목록</button>
    </div>
  );
};

export default ReduxBottom;

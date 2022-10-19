// Action (액션)
export const increase = (mem_name) => ({ type: "INCREASE", payload: mem_name });
export const decrease = (empVO) => ({ type: "DECREASE", payload: empVO });
export const reset = () => ({ type: "RESET" });
export const deptlist = (depts) => ({ type: "DEPTLIST", payload: depts });
export const initAuth = (firebaseAuth, googleProvider) => ({
  type: "INIT_AUTH",
  firebaseAuth: firebaseAuth,
  googleProvider: googleProvider,
});

// 초기 상태 만들기 - 무엇을 관리하지?
const initstate = {
  number: 0,
  mem_name: "guest",
  empVO: { empno: 100, ename: "산해" },
  depts: [
    { DEPTNO: 10, DNAME: "총무부", LOC: "서울" },
    { DEPTNO: 20, DNAME: "개발부", LOC: "부산" },
    { DEPTNO: 30, DNAME: "인사부", LOC: "사천" },
  ],
  firebaseAuth: "",
  googleProvider: "",
};

// Reducer(액션의 타입에 따라 원하는 처리를 함)
const reducer = (state = initstate, action) => {
  switch (action.type) {
    case "INCREASE":
      return { number: state.number + 1, mem_name: action.payload };
    case "DECREASE":
      return { number: state.number - 1, empVO: action.payload };
    case "RESET":
      return { number: 0 };
    case "DEPTLIST":
      return { depts: action.payload };
    case "INIT_AUTH":
      return {
        ...state,
        firebaseAuth: action.firebaseAuth,
        googleProvider: action.googleProvider,
      };
    default:
      return { ...state }; // 특정한 타입이 존재하지 않으면 초기상태 정보를 얕은 복사로 내보냄
  }
};

export default reducer;

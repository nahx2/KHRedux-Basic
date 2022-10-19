export const increase = (mem_name) => ({ type: "INCREASE", payload: mem_name });
export const decrease = (empVO) => ({ type: "DECREASE", payload: empVO });
export const reset = () => ({ type: "RESET" });
export const deptlist = (depts) => ({ type: "DEPTLIST", payload: depts });
export const initAuth = (firebaseAuth, googleProvider) => ({
  type: "INIT_AUTH",
  firebaseAuth: firebaseAuth,
  googleProvider: googleProvider,
});

const initstate = {
  number: 0,
  mem_name: "guest",
  empVO: { empno: 1000, ename: "나신입" },
  depts: [
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
  ],
  firebaseAuth: "",
  googleProvider: "",
};

const reducer = (state = initstate, action) => {
  switch (action.type) {
    case "INCREASE":
      return { number: state.number + 1, mem_name: action.payload };
    case "DECREASE":
      return { ...state, number: state.number - 1, empVO: action.payload };
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
      return { ...state };
  }
};
export default reducer;

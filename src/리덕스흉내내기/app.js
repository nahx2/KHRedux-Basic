export const actionCreator = (type) => (payload) => [type, payload];
export const createStore = () => {
  let state;
  let handlers = [];
  const send = (action) => {
    state = worker(state, action);
    handlers.forEach((handlers) => handlers());
  };
  const subscribe = (handlers) => {
    handlers.push(handler);
  };
  const getState = () => {
    return state;
  };
  return {
    send,
    getState,
    subscribe,
  };
};
/* 
  첫번째 인자는 이덕스가 넘겨주느 state가 넘어옴
  두번째 인자는 Action객체가 넘어옴 - 어떤 일을 해줘! 라는 정보가 담김

*/
const worker = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "increase":
      return { ...state, count: state.count + 1 };
    case "decrease":
      return { ...state, count: state.count - 1 };
    default:
      return { ...state };
  }
};

const store = createStore(worker);
store.subscribe(() => {
  console.log(store.getState());
});
// 현재는 무엇을 바꿔야 하는 지에 대한 정보가 없어서 무조건 1씩만 증가하고 있는 것이 문제임
// 그래서 Action을 추가해야 됨 - 뭘 바꿔줘 라는 내용이 담겨야 함
store.send({ type: "increase" });
console.log(store.getState());
store.send({ type: "decrease" });
console.log(store.getState());

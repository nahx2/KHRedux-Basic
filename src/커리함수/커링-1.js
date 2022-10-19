const sum = (a, b) => {
  return a + b;
};

console.log(`sum===>${sum(2, 3)}`);

function curring(func) {
  return function (a) {
    return function (b) {
      return func(a, b);
    };
  };
}

const curring2 = (func) => (a) => func(a, b);

const curried = curring(sum);

const exam1 = curried(20);

const exam1_res = exam1(30);
console.log(`exam1_res:${exam1_res}`);

const exam2_res = curried(30)(40);
console.log(`exam2_res:${exam2_res}`);

/* 
  커리함수는 함수를 매개변수로 받을 수 있다 - 왜냐하면 자바스크립트에서의 함수는 객체이니까...
  커리함수는 실행시점에 매개변수로 받은 함수의 인자를 사용하는 함수를 다시 반환할 수 있다
  그래서 마지막에 반환되는 함수는  Lexical scope 개념에 의해 커리함수에 전달된 모든 함수를
  기억(누적되어 기억)한다

*/

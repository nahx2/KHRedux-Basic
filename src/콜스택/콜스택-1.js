console.log("Hi");

setTimeout(() => {
  console.log("There");
}, 5000);

console.log("JSConfEU");
/* 
  setTimeout의 지연값이 0dladpeh 5000을 주었을 때와 결과가 같다
  왜지???
  이벤트 루프와 동시성이 역할을 한다
  자바스크립트는 한 번에 하나의 일만 할 수 있다
  그러면 어떻게 이걸 동시에 할 수 있는걸까?
  브라이저가 역할이 있다 - Web API 지원
  자바스크립트에서 호출 할 수 있는 스레드를 효과적으로 지원가능
  여기에 동시성이 있다
*/

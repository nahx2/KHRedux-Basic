const name = "IE";
function init() {
  var name = "Mozilla"; // name은 init에 의해 생성된 지역 변수이다.
  function displayName() {
    // displayName() 은 내부 함수이며, 클로저다.
    console.log(name); // 부모 함수에서 선언된 변수를 사용한다.
  }
  return displayName;
}
const other = init();
other();

/* 
 위 코드는 클로저이다
 1. displayName은 name을 출력한다(?????)
 2. displayName은 init을 외부 스코프 참조로 저장함
 3. other라는 변수에 init을 초기화함
 4. other() 호출하면 displayName은 name을 찾는다
 결론 -> displayName은 자신의 스코프 안에서 name에 대한 값이 없으니까
 스코프 체인을 통해 외부 스코프에서 name을 찾는 것이다.

 이 때 displayName과 other를 클로저라고 부른다.

 자바스크립트의 스코프는 렉시컬 스코프이다.
 즉 이름의 범위는 소스코드가 작성된 그 문맥에서 바로 결정됨
*/

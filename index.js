//const :상수
// let: 변수
let userName = "multicampus";
console.log("🚀 ~ cl:", userName);
let age = "good facility";

console.log("cl", userName);

comment = "bad air population";
console.log("comment", typeof comment);

comment = 1111;
console.log("🚀 ~ comment:", comment);

const bool = true;
console.log("🚀 ~ bool:", bool);

const bool1 = 0;
console.log("🚀 ~ bool1:", typeof bool1);

if (bool == true) {
  console.log(" if 안에 :" + typeof bool);
}

console.log("🌹🌹FUNCTION👍👍");

//함수선언 방법1
function helloworld() {
  console.log("방법1");
}
// 함수선언 방법 2. 본 수업에서는 아래 방법을 주로 사용
const func_hello = () => {
  console.log("방법 2");
};

//함수호출 방법은 같다.
helloworld();
func_hello();

//mission 2
const func_me = () => {
  userName = "hyerim";
  age = 40;
  console.log("🚀 ~ const func_me= ~ userName:", userName, " age: ", age);
};

func_me();

//mission3 : 숫자 2개를 받아서 이 숫자들을 더해서 콘솔이 뿌리기

let num1 = 0;
let num2 = 0;

const func_calc = (num1, num2) => {
  console.log("num1 :", num1);
  console.log("num2 :", num2);
  console.log("num1+num2 :", num1 + num2);
};
num1 = 200;
num2 = 300;

func_calc(num1, num2);
func_calc(500, 400);

//mission 3: toUpperCase메소드를 이용해서 영문이름을 대문자로 반환하는 함수 만들기. param으로 이름 받아서

function convertNameToUpperCase(name) {
  return name.toUpperCase();
}

// 예시 사용
console.log(convertNameToUpperCase("john")); // 출력: "JOHN"
console.log(convertNameToUpperCase("Alice")); // 출력: "ALICE"

const dayOfWeeks = ["mon", "tue", "wed", "thr", "fri", "sat", "sun"];
console.log("🚀 ~ dayOfWeeks:", dayOfWeeks);

console.log(`today is 
    ${dayOfWeeks[2]}`);
console.log(`  weeks of length is    ${dayOfWeeks[dayOfWeeks.length - 1]}`);
console.log("weeks of length is ", dayOfWeeks[dayOfWeeks.length - 1]);

//const name = "abc";
//const age = "abc1";
//const address = "abc2";

const studentInfo = {
  myName: "hyerim",
  myMbti: "ESFJ",
  myChek: true,
};
console.log("🚀 ~ studentInfo:", studentInfo["myMbti"]);
console.log("🚀 ~ studentInfo:", studentInfo.myName);

const studentObj = [
  {
    myName: "dyne",
    myMbti: "ENFP",
    myChek: true,
  },
  {
    myName: "davinchi",
    myMbti: "ISTJ",
    myChek: true,
  },
];

// 문제1
function add1(a, b) {
  return a + b;
}
// 여기에 화살표 함수로 다시 작성하세요.
const add = (a, b) => {
  return a + b;
};
console.log("1번문제 정답 : ", add(5, 3)); // 예상 결과: 8

//문제2

// 여기에 두 개의 parameter를 가진 화살표 함수를 작성하세요.
const minus = (param1, param2) => {
  return param1 - param2;
};

// 함수 테스트
console.log("2번문제 정답 : ", minus(60, 20)); // 예상 결과: 40

//문제 3
const introduce = (name, age) => {
  return "안녕하세요, " + name + "님. 당신의 나이는 " + age + "세입니다.";
};

// 여기에 함수를 호출하는 코드를 작성하세요.// 당신의 이름과 나이를 argument로 사용하세요.
console.log("3번 문제 정답: ", introduce("hyerim", 39)); // 예시 결과: "안녕하세요, 김철수님. 당신의 나이는 25세입니다."

//문제 4
// 여기에 orderSandwich 함수를 작성하세요
// orderSandwich 함수는 type 매개변수를 받고 타입에 따라 다른 재료를 반환해야 합니다
function orderSandwich(indgrants) {
  if (indgrants == "vegan") {
    return "🥖 + 🥬 + 🍅 + 🥑 + 🥒";
  } else {
    return "🥖 + 🥬 + 🍅 + 🧀 + 🥓";
  }
}

// 함수 테스트 - 아래 코드는 수정하지 마세요
console.log("기본 샌드위치 주문: " + orderSandwich());
console.log("기본 샌드위치 주문: " + orderSandwich("basic"));
console.log("비건 샌드위치 주문: " + orderSandwich("vegan"));

/* 예상 결과:
기본 샌드위치 주문: 🥖 + 🥬 + 🍅 + 🧀 + 🥓
기본 샌드위치 주문: 🥖 + 🥬 + 🍅 + 🧀 + 🥓
비건 샌드위치 주문: 🥖 + 🥬 + 🍅 + 🥑 + 🥒
*/

for (let i = 0; i < 10; i = i + 2) {
  console.log(i, "번째 실행중");
}

console.log("loop is over!!");

const numbers = [2, 4, 7, 9, 4];
for (let i = 0; i < numbers.length; i++) {
  console.log("이렇게 사용");
}

const numbers1 = [1, 2, 3, 4, 5];
const incrementedNumbers = numbers1.map((number) => number + 1);
console.log(incrementedNumbers); // 예상 결과: [2, 3, 4, 5, 6]

let score = 75;
if (score >= 90) {
  console.log("A등급");
} else if (score >= 80) {
  console.log("B등급");
} else if (score >= 70) {
  console.log("C등급");
} else {
  console.log("D등급");
}

console.log("점수는 ", score, "점 입니다.");

// score = 55;
const success = () => {
  console.log("합격입니다.");
};
const fail = () => {
  console.log("불합격입니    다.      ".trim());
};

score >= 80 ? success() : fail();

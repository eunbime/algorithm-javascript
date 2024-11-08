function solution(dartResult) {
  let scores = [];
  let currentScore = 0;
  let dartArray = dartResult.match(/\d{1,2}[SDT][*#]?/g); // 각 라운드 추출

  console.log(dartArray);

  dartArray.forEach((round, index) => {
    // 점수, 보너스, 옵션 분리
    let [, score, bonus, option] = round.match(/(\d{1,2})([SDT])([*#]?)/);
    score = Number(score);

    // 보너스에 따라 점수를 계산
    switch (bonus) {
      case "S":
        currentScore = Math.pow(score, 1);
        break;
      case "D":
        currentScore = Math.pow(score, 2);
        break;
      case "T":
        currentScore = Math.pow(score, 3);
        break;
    }

    // 옵션에 따라 점수 변경
    if (option === "*") {
      currentScore *= 2;
      if (index > 0) {
        scores[index - 1] *= 2; // 바로 이전 점수 2배
      }
    } else if (option === "#") {
      currentScore *= -1; // 점수 마이너스로 변경
    }

    scores.push(currentScore);
  });

  return scores.reduce((acc, curr) => acc + curr, 0);
}

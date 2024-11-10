function solution(survey, choices) {
  const scores = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };

  const points = [3, 2, 1, 0, 1, 2, 3];

  for (let i = 0; i < survey.length; i++) {
    const type = survey[i];
    const choice = choices[i];

    if (choice < 4) {
      // 비동의 쪽 선택 -> 첫 번째 문자에게 점수 부여
      scores[type[0]] += points[choice - 1];
    } else if (choice > 4) {
      // 동의 쪽 선택 -> 두 번째 문자에게 점수 부여
      scores[type[1]] += points[choice - 1];
    }
  }

  // 각 지표에서 더 높은 점수를 받은 성격 유형 선택
  let result = "";
  result += scores.R >= scores.T ? "R" : "T";
  result += scores.C >= scores.F ? "C" : "F";
  result += scores.J >= scores.M ? "J" : "M";
  result += scores.A >= scores.N ? "A" : "N";

  return result;
}

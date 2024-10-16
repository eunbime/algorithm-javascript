function solution(X, Y) {
  let answer = "";
  XArr = X.split("");
  YArr = Y.split("");

  for (let i = 9; i >= 0; i--) {
    const curX = XArr.filter((a) => Number(a) === i).length;
    const curY = YArr.filter((a) => Number(a) === i).length;
    answer += String(i).repeat(Math.min(curX, curY));
  }

  if (answer === "") {
    return "-1";
  } else if (Number(answer) === 0) {
    return "0";
  } else {
    return answer;
  }
}

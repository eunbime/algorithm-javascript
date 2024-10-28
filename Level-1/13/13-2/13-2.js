function solution(X, Y) {
  let answer = "";

  for (let i = 9; i >= 0; i--) {
    const curX = X.split("").filter((x) => Number(x) === i).length;
    const curY = Y.split("").filter((y) => Number(y) === i).length;
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

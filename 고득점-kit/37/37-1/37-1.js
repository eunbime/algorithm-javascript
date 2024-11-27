function solution(name) {
  let answer = 0;
  const min = 65;
  const max = 90 + 1;

  const charToNum = (now) => {
    const num = now.charCodeAt();
    if (num < 78) return num - 65;
    else return 91 - num;
  };

  const charArr = name.split("").map((c) => charToNum(c));
  let minMove = charArr.length - 1;

  charArr.forEach((nowCursor, index) => {
    answer += nowCursor;

    // 좌우 이동 비용 최적화
    let nextCursor = index + 1;
    while (nextCursor < charArr.length && charArr[nextCursor] === 0)
      nextCursor++;

    const toBack = charArr.length - nextCursor;

    minMove = Math.min(minMove, index * 2 + toBack, index + 2 * toBack);
  });

  return answer + minMove;
}

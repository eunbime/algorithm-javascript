function solution(s) {
  let count = 0;

  [...s.toUpperCase()].forEach((w) => {
    if (w === "P") count++;
    else if (w === "Y") count--;
  });

  return count === 0 ? true : false;
}

// reduce를 사용한 방법
function solution2(s) {
  return [...s.toLowerCase()].reduce((acc, cur) => {
    if (cur === "p") return acc + 1;
    else if (cur === "y") return acc - 1;
    return acc;
  }, 0)
    ? false
    : true;
}

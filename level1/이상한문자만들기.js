function solution(s) {
  let answer = "";

  answer = s
    .split(" ")
    .map((item) =>
      item
        .split("")
        .map((item, index) => {
          return index % 2 === 0 ? item.toUpperCase() : item.toLowerCase();
        })
        .join("")
    )
    .join(" ");

  return answer;
}

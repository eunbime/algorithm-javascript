function solution(s) {
  let answer = "";

  answer = s
    .split(" ")
    .map((n) => {
      return n
        .split("")
        .map((m, i) => {
          return i % 2 === 0 ? m.toUpperCase() : m.toLowerCase();
        })
        .join("");
    })
    .join(" ");

  return answer;
}

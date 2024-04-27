function solution(food) {
  let answer = [0];

  for (let i = food.length - 1; i > 0; i--) {
    let cnt = Math.floor(food[i] / 2);

    for (let j = 0; j < cnt; j++) {
      answer.push(i);
      answer.unshift(i);
    }
  }

  return answer.join("");
}

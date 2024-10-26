function solution(food) {
  let answer = [0]; // 가운데 물

  // 선수가 1번부터 먹어야하기 때문에, 배열 인덱스가 가장 큰 값부터 시작
  for (let i = food.length - 1; i > 0; i--) {
    // 양끝에 존재해야 하기 때문에, 음식/2 만큼 반복, 안될 경우 버림(floor)
    let count = Math.floor(food[i] / 2);
    for (let j = 0; j < count; j++) {
      // 우측 끝에 넣기
      answer.push(i);
      // 좌측 끝에 넣기
      answer.unshift(i);
    }
  }

  return answer.join("");
}

// repeat를 쓰는 방법
function solution2(food) {
  let answer = "";

  for (let i = 1; i < food.length; i++) {
    answer += String(i).repeat(Math.floor(food[i] / 2));
  }

  return answer + "0" + [...answer].reverse().join("");
}

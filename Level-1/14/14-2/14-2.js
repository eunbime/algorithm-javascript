function solution(arr) {
  let answer = [arr[0]];
  // 연속적인 수의 중복 제거
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      answer.push(arr[i]);
    }
  }

  return answer;
}

// filter 사용 방법
function solution2(arr) {
  return arr.filter((num, i) => num != arr[i + 1]);
}

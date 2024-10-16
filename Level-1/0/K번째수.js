function solution(array, commands) {
  let answer = [];

  answer = commands.map((item) => {
    return array.slice(item[0] - 1, item[1]).sort((a, b) => a - b)[item[2] - 1];
  });

  return answer;
}

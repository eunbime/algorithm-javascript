function solution(array, commands) {
  let answer = [];

  answer = commands.map((cmd) => {
    return array.slice(cmd[0] - 1, cmd[1]).sort((a, b) => a - b)[cmd[2] - 1];
  });

  return answer;
}

// 구조분해할당을 한 경우
function solution2(array, commands) {
  return commands.map((command) => {
    const [sPosition, ePosition, position] = command;
    const newArray = array
      .filter(
        (value, fIndex) => fIndex >= sPosition - 1 && fIndex <= ePosition - 1
      )
      .sort((a, b) => a - b);

    return newArray[position - 1];
  });
}

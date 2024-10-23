function solution(cards1, cards2, goal) {
  let result = "Yes";

  for (let i = 0; i < goal.length; i++) {
    if (cards1[0] === goal[i]) {
      cards1.shift();
    } else if (cards2[0] === goal[i]) {
      cards2.shift();
    } else {
      result = "No";
      break;
    }
  }

  // goal을 만들었다면 'Yes', 만들 수 없다면 'No'
  return result;
}

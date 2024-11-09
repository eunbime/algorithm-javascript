function solution(numbers, hand) {
  const keyPad = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    "*": [3, 0],
    0: [3, 1],
    "#": [3, 2],
  };

  let leftPos = keyPad["*"];
  let rightPos = keyPad["#"];
  let result = "";

  // 거리 계산 함수
  function getDistance(pos1, pos2) {
    return Math.abs(pos1[0] - pos2[0]) + Math.abs(pos1[1] - pos2[1]);
  }

  for (let number of numbers) {
    let targetPos = keyPad[number];

    if ([1, 4, 7].includes(number)) {
      result += "L";
      leftPos = targetPos;
    } else if ([3, 6, 9].includes(number)) {
      result += "R";
      rightPos = targetPos;
    } else {
      let leftDist = getDistance(leftPos, targetPos);
      let rightDist = getDistance(rightPos, targetPos);

      // 거리가 가까운 것을 선택
      if (leftDist < rightDist) {
        result += "L";
        leftPos = targetPos;
      } else if (rightDist < leftDist) {
        result += "R";
        rightPos = targetPos;
      } else {
        // 거리가 같다면
        // 오른손잡이는 오른손 엄지손가락, 왼손잡이는 왼손 엄지손가락을 사용
        if (hand === "left") {
          result += "L";
          leftPos = targetPos;
        } else {
          result += "R";
          rightPos = targetPos;
        }
      }
    }
  }

  return result;
}

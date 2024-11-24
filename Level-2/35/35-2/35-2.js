function solution(k, dungeons) {
  let maxCount = 0;

  // 모든 순열을 생성하여 탐색
  const generatePermutations = (arr, temp = []) => {
    if (arr.length === 0) {
      maxCount = Math.max(maxCount, exploreDungeons(k, temp));
      return;
    }
    for (let i = 0; i < arr.length; i++) {
      const next = [...arr];
      next.splice(i, 1);
      generatePermutations(next, [...temp, arr[i]]);
    }
  };

  // 주어진 순서대로 던전을 탐험
  const exploreDungeons = (energy, sequence) => {
    let count = 0;
    for (const [minRequired, cost] of sequence) {
      if (energy >= minRequired) {
        energy -= cost;
        count++;
      } else {
        break;
      }
    }
    return count;
  };

  generatePermutations(dungeons);
  return maxCount;
}

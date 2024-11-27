function solution(people, limit) {
  people.sort((a, b) => a - b);
  let left = 0; // 가장 가벼운 사람의 인덱스
  let right = people.length - 1; // 가장 무거운 사람의 인덱스
  let boats = 0;

  while (left <= right) {
    if (people[left] + people[right] <= limit) {
      left++; // 가장 가벼운 사람 탑승
    }
    // 가장 무거운 사람은 항상 탑승
    right--;
    boats++; // 보트 한 대 사용
  }

  return boats;
}

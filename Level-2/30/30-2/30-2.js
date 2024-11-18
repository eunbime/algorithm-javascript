function solution(clothes) {
  // 의상의 종류별로 개수를 저장할 Map 생성
  const clothesMap = new Map();

  // 각 의상을 종류별로 그룹화함
  for (const [name, type] of clothes) {
    if (clothesMap.has(type)) {
      // 이미 1개 이상 저장되어 있다면
      clothesMap.set(type, clothesMap.get(type) + 1);
    } else clothesMap.set(type, 1); // 초기 저장
  }

  // 의상 조합 계산
  let answer = 1;
  for (const count of clothesMap.values()) {
    answer *= count + 1; // 해당 종류 의상을 착용하지 않는 경우 포함
  }

  return answer - 1; // 아무 의상도 입지 않는 경우 제외
}

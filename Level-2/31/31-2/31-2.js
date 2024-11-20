function solution(citations) {
  // 논문 인용 횟수를 내림차순으로 정렬
  citations.sort((a, b) => b - a);

  // H-Index: 과학자의 생산성과 영향력을 나타내는 지표
  let hIndex = 0;
  for (let i = 0; i < citations.length; i++) {
    // 인용 횟수가 논문 수(i + 1) 이상이면 hIndex를 갱신
    if (citations[i] >= i + 1) hIndex++;
    else break; // 더 이상 조건을 만족하지 않으면 반복 종료
  }
  return hIndex;
}

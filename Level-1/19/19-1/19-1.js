function solution(a, b) {
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  // 날짜 생성 - 월은 0부터 시작하므로 a-1로 설정
  const date = new Date(2016, a - 1, b);

  // getDay() : 요일 인덱스 받아오기
  return days[date.getDay()];
}

// (2) Date() 쓰지 않는 풀이
function solution(a, b) {
  const days = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  const month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  let daySum = 0;

  if (a < 2) {
    days = b - 1;
  } else {
    daySum = month.slice(0, a - 1).reduce((a, b) => a + b) + b - 1;
  }
  return days[daySum % 7];
}

function solution(today, terms, privacies) {
  const result = [];
  const [todayYear, todayMonth, todayDay] = today.split(".").map(Number);

  // 약관 종류별 유효기간 저장
  const termMap = {};
  terms.forEach((term) => {
    const [type, duration] = term.split(" ");
    termMap[type] = Number(duration);
  });

  // 유효기간 계산
  privacies.forEach((privacy, index) => {
    // 개인정보 수집일자, 약관 종류 분리
    const [date, termType] = privacy.split(" ");
    const [year, month, day] = date.split(".").map(Number);

    const duration = termMap[termType];
    let expiryYear = year;
    let expiryMonth = month + duration;
    let expiryDay = day;

    // 12를 초과하면 연도에 반영
    if (expiryMonth > 12) {
      expiryYear += Math.floor((expiryMonth - 1) / 12);
      expiryMonth = ((expiryMonth - 1) % 12) + 1;
    }

    // 만료일 하루 빼기
    expiryDay -= 1;
    if (expiryDay === 0) {
      expiryDay = 28;
      expiryMonth -= 1;
      if (expiryMonth === 0) {
        expiryMonth = 12;
        expiryYear -= 1;
      }
    }

    // 만료일이 오늘 날짜보다 이전이면 파기 대상 번호로 추가
    if (
      todayYear > expiryYear ||
      (todayYear === expiryYear && todayMonth > expiryMonth) ||
      (todayYear === expiryYear &&
        todayMonth === expiryMonth &&
        todayDay > expiryDay)
    ) {
      result.push(index + 1);
    }
  });

  return result;
}

// (2) 다른 사람의 풀이
function solution(today, terms, privacies) {
  var answer = [];
  var [year, month, date] = today.split(".").map(Number);
  var todates = year * 12 * 28 + month * 28 + date;
  var t = {};
  terms.forEach((e) => {
    let [a, b] = e.split(" ");
    t[a] = Number(b);
  });
  privacies.forEach((e, i) => {
    var [day, term] = e.split(" ");
    day = day.split(".").map(Number);
    var dates = day[0] * 12 * 28 + day[1] * 28 + day[2] + t[term] * 28;
    if (dates <= todates) answer.push(i + 1);
  });
  return answer;
}

function solution(phone_book) {
  let phoneMap = new Map();

  // 모든 번호 해시맵에 저장
  for (const number of phone_book) {
    phoneMap.set(number, true);
  }

  // 접두어 검사
  for (const number of phone_book) {
    for (let i = 1; i < number.length; i++) {
      const prefix = number.slice(0, i);

      if (phoneMap.has(prefix)) return false; // 접두어 존재할 경우
    }
  }

  return true; // 접두어가 없을 경우
}

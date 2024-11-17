function solution(friends, gifts) {
  const len = friends.length;
  const nameMap = new Map();
  const giftTable = new Array(len).fill(0).map((_) => new Array(len).fill(0));
  const rankInfo = new Array(len).fill(0);
  const nextMonth = new Array(len).fill(0);

  friends.forEach((name, idx) => {
    nameMap.set(name, idx);
  });

  // 선물 내역
  gifts.forEach((info) => {
    const [from, to] = info.split(" ");
    giftTable[nameMap.get(from)][nameMap.get(to)]++;
  });

  // 선물 지수
  for (let i = 0; i < len; i++) {
    rankInfo[i] = giftTable[i].reduce((acc, cur) => (acc += cur), 0);

    for (let j = 0; j < len; j++) {
      rankInfo[i] -= giftTable[j][i];
    }
  }

  // 다음 달에 받을 선물 계산
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (i === j) continue;
      if (giftTable[i][j] > giftTable[j][i]) nextMonth[i]++;
      if (giftTable[i][j] < giftTable[j][i]) nextMonth[j]++;
      if (giftTable[i][j] === giftTable[j][i]) {
        if (rankInfo[i] > rankInfo[j]) nextMonth[i]++;
        if (rankInfo[i] < rankInfo[j]) nextMonth[j]++;
      }
    }
  }

  return Math.max(...nextMonth);
}

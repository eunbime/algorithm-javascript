function solution(progresses, speeds) {
  const answer = [];
  const days = progresses.map((p, i) => {
    Math.ceil((100 - p) / speeds[i]);
  });

  let maxDay = days[0];
  let count = 0;

  for (let day of days) {
    if (day <= maxDay) {
      count++;
    } else {
      answer.push(count);
      count = 1;
      maxDay = day;
    }
  }

  answer.push(count);
  return answer;
}

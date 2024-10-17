function solution(name, yearning, photo) {
  let result = [];

  photo.map((ph) => {
    let score = 0;
    for (let i = 0; i < ph.length; i++) {
      if (name.includes(ph[i])) {
        score += yearning[name.indexOf(ph[i])];
      }
    }
    result.push(score);
  });

  return result;
}

function solution(cards1, cards2, goal) {
  let result = "Yes";

  for (let i = 0; i < goal.length; i++) {
    if (cards1[0] === goal[i]) {
      cards1.shift();
    } else if (cards2[0] === goal[i]) {
      cards2.shift();
    } else {
      result = "No";
      break;
    }
  }

  return result;
}

// function solution(cards1, cards2, goal) {
//     let j = 0;
//     let k = 0;
//     for(let i=0;i<goal.length;i++){
//         if(goal[i] == cards1[j]) j++;
//         else if(goal[i] == cards2[k]) k++;
//         else return "No"
//     }
//     return "Yes";
// }

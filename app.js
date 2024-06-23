// จงหาคะแนนเฉลี่ยแบบถ่วงน้ำหนัก

const scores = [
  { score: 90, subject: "HTML", weight: 0.2 },
  { score: 95, subject: "CSS", weight: 0.3 },
  { score: 85, subject: "JavaScript", weight: 0.5 },
];

function weightScore(scores) {
  let totalScore = 0;
  let totalWeight = 0;

  for (i = 0; i < scores.length; i++) {
    totalScore += scores[i].score * scores[i].weight;
    totalWeight += scores[i].weight;
  }

  const average = totalScore / totalWeight;
  return average;
}

console.log(weightScore(scores));

// expected result: 89

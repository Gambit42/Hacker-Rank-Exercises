const a = [17, 28, 30];
const b = [99, 16, 8];

const compareTriplets = (a, b) => {
  let comparison = [0, 0];

  for (let index = 0; index < 3; index++) {
    if (1 > b[index] || b[index] > 100 || 1 > a[index] || a[index] > 100) {
      return console.log("Scores should not be less than 1 or more than 100.");
    }

    if (a[index] > b[index]) {
      comparison[0] += 1;
    } else if (b[index] > a[index]) {
      comparison[1] += 1;
    }
  }
  return comparison.join(" ");
};

console.log(compareTriplets(a, b));

const aliceReview = [17, 28, 30];
const bobReview = [99, 16, 8];

const compareTriplets = (a, b) => {
  let comparison = [0, 0];

  aliceReview.forEach((item, index) => {
    if (a[index] > b[index]) {
      comparison[0] += 1;
    } else if (b[index] > a[index]) {
      comparison[1] += 1;
    }
  });
  return console.log(comparison.join(" "));
};

compareTriplets(aliceReview, bobReview);

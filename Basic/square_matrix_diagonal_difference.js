const diagonalDifference = (array) => {
  let rightDiagonalSum = 0;
  let leftDiagonalSum = 0;

  for (let i = 0; i < array.length; i++) {
    rightDiagonalSum += array[i][i];
  }

  for (let j = array.length; 0 < j; j--) {
    leftDiagonalSum += array[array.length - j][j - 1];
  }

  return Math.abs(leftDiagonalSum - rightDiagonalSum);
};

console.log(
  diagonalDifference([
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
  ])
);

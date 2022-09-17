//For loop solution

const simpleArraySum = (array) => {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }

  return console.log(sum);
};

simpleArraySum([1, 2, 3, 4]);

//Recursion solution

const simpleArraySumRecursion = (array, index) => {
  if (index === array.length) {
    return 0;
  }

  return array[index] + simpleArraySumRecursion(array, index + 1);
};

console.log(simpleArraySumRecursion([1, 2, 3, 4], 0));

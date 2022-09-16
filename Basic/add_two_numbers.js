//Problem: Add two integers
//Constraints: 1 <= a && b <= b
//1 should be less than or equal to a
//b should be less than or equal to 1000

const sum = (a, b) => {
  if (1 > a || b > 1000) {
    return "a cannot be less than 1";
  }

  if (b > 1000) {
    return "b cannot be greater than 1000";
  }

  return a + b;
};

console.log(sum(2, 5));

function isNumberPositive(n) {
  return n > 0;
}

function convertDaysToAge(n) {
  return Math.floor(n / 365);
}

function getLargestNumber(a, b, c) {
  let max = a;
  if (b > max) {
    max = b;
  }

  if (c > max) {
    max = c;
  }

  return max;
}

function getLastName(arr) {
  return arr[arr.length - 1];
}

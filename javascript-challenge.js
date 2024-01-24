function isNumberPositive(n) {
  return n > 0;
}

function convertDaysToAge(n){
  return Math.floor(n/365)
}

function getLargestNumber(arr){
  if(arr.length === 0){
    return NaN
  }
  let max = arr[0]
  for(let i=1 ; i<arr.length;i++){
    if(arr[i]>max){
      max = arr[i]
    }
  }
  return max;
}

console.log(getLargestNumber([]))




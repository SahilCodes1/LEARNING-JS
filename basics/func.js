function calculateprice(...num1)
{return num1}

console.log(calculateprice(40, 80, 120, 160))

const arr = calculateprice(40, 80, 120, 160);
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}

console.log(sum);
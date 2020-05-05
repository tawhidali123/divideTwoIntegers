// Given two integers dividend and divisor, divide two integers without using multiplication, division and mod operator.

// Return the quotient after dividing dividend by divisor.

// The integer division should truncate toward zero, which means losing its fractional part. For example, truncate(8.345) = 8 and truncate(-2.7335) = -2.

// Example 1:

// Input: dividend = 10, divisor = 3
// Output: 3
// Explanation: 10/3 = truncate(3.33333..) = 3.
// Example 2:

// Input: dividend = 7, divisor = -3
// Output: -2
// Explanation: 7/-3 = truncate(-2.33333..) = -2.

// GAMEPLAN
// make an array that has 'x' values and length of dividend
// [x,x,x,x,x]

// find how many divisors can go into dividend array

function divideTwoInts(dividend, divisor){
  let lengthArr = []

  for(i = 0; i < dividend; i++){
    lengthArr.push(i + 1)
  }

  let howManyTimes = 0
  let place = 0

  for(i = 0; i < lengthArr.length; i++){
    let check = place + divisor
    if(lengthArr[check]){
      howManyTimes++
      place = check
    } else if(lengthArr[check] === undefined){
      break
    }
  }
  
  return howManyTimes
}

divideTwoInts(10, 3)
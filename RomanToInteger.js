// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

var romanToInt = function(s) {
  let newString = s;
  let sum = 0;
  if (newString.includes('IV')){
      sum += 4;
      newString = newString.replace('IV', '')
  }
  if (newString.includes('IX')) {
      sum += 9;
      newString = newString.replace('IX', '')
  }
  if (newString.includes('XL')) {
      sum += 40;
      newString = newString.replace('XL', '')
  }
  if (newString.includes('XC')) {
      sum += 90;
      newString = newString.replace('XC', '')
  }
  if (newString.includes('CD')) {
      sum += 400;
      newString = newString.replace('CD', '')
  }
  if (newString.includes('CM')) {
      sum += 900;
      newString = newString.replace('CM', '')
  }
  for (let i in newString) {
      if (newString[i] === 'I') {
          sum += 1;
      }
      if (newString[i] === 'V') {
          sum += 5;
      }
      if (newString[i] === 'X') {
          sum += 10;
      }
      if (newString[i] === 'L') {
          sum += 50;
      }
      if (newString[i] === 'C') {
          sum += 100;
      }
      if (newString[i] === 'D') {
          sum += 500;
      }
      if (newString[i] === 'M') {
          sum += 1000;
      }
  }
  return sum;
};
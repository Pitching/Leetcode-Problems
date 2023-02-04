// Given two binary strings a and b, return their sum as a binary string.

 

// Example 1:

// Input: a = "11", b = "1"
// Output: "100"
// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"

var addBinary = function(a, b) {
  let s = '';
  
  let c = 0, i = a.length-1, j = b.length -1;
  
  while(i >= 0 || j >= 0 || c === 1) {
      c += i >= 0 ? +a[i--] : 0;
      c += j >= 0 ? +b[j--] : 0;
      
      s = ~~(c % 2) + s;
      
      c = ~~(c/2);
  }
  
  return s;
};
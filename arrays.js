//////////////////PROBLEM 1////////////////////
/* Create a copy of the faveColors array called 'colorCopy' using the slice method. */

//CODE HERE

const faveColors = ['red', 'green', 'black']
let colorCopy = faveColors.slice();
// was a little confuse w/h question didnt know if you wanted me to take a color out or something

//////////////////PROBLEM 2////////////////////
/* Add a fourth color to the end of the 'colorCopy' array using the push method. */

//CODE HERE
faveColors.push( 'yellow');

//////////////////PROBLEM 3////////////////////
/*
  Using an array method, create a new array called 'middleNums' from the 
  numbers array that will capture only the middle numbers (2, 3, 4).
*/

const numbers = [1, 2, 3, 4, 5]

//CODE HERE

let middleNums = numbers.splice(1,4);
console.log(middleNums);
//////////////////PROBLEM 4////////////////////
/* 
  Create a function called 'bigOrSmall' that takes in one parameter, 'arr', 
  which will be an array of numbers. 
  Inside of the bigOrSmall function, create a new array called 'answers'. 
  Then, loop over the passed in arr parameter, and check to see if the number in the
  array is GREATER than 100. 
  If it is, push 'big' as a string to the answers array. 
  If the number is LESS than or EQUAL to 100, push 'small' as a string 
  to the answers array. 
  Return the answers array inside of the function.
*/

// CODE HERE


function bigOrSmall (arr) {
let answers =[];
for (let i = 0; i <= arr; i++) {
} if (arr > 100) {
  answers.push('big');
}else if (arr <= 100) {
  answers.push('small'); 
}
return answers;
}

console.log(bigOrSmall(105));
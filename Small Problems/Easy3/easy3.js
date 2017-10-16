// How Old is Teddy

// function teddy(min, max) {
//   var min = Math.floor(min);
//   var max = Math.floor(max);
//   console.log(`Teddy is ${Math.floor(Math.random() * (max - min + 1) + min)}`);
// }

// Searching 101

// function searching101() {
//   var nums = [];
//   var n1 = nums.push(parseInt(prompt("Enter the 1st number:"), 10));
//   var n2 = nums.push(parseInt(prompt("Enter the 2nd number:"), 10));
//   var n3 = nums.push(parseInt(prompt("Enter the 3rd number:"), 10));
//   var n4 = nums.push(parseInt(prompt("Enter the 4th number:"), 10));
//   var n5 = nums.push(parseInt(prompt("Enter the 5th number:"), 10));
//   var n6 = parseInt(prompt("Enter the last number:"), 10);

//   console.log(`The number ${n6} ${nums.includes(n6) ? 'appears' : 'does not appear'} in ${nums}.`);
// }

// searching101();

// When Will I Retire?

// function retire() {
//   var age = parseInt(prompt("What is your age?"), 10);
//   var retireAge = parseInt(prompt("What age would you like to retire at?"), 10);
//   var currentYear = new Date().getFullYear();
//   var birthdayYear = currentYear - age;

//   console.log(`It is ${currentYear}. You will retire in ${birthdayYear + retireAge}.\nOnly ${birthdayYear + retireAge - currentYear} years left!`);
// }

// retire();

// Palindromic Strings Pt1

// function isPalindrome(str) {
//   return str.split('').reverse().join('') === str;
// }

// isPalindrome('madam');                    // true
// isPalindrome('Madam');                    // false (case matters)
// isPalindrome('madam i\'m adam');          // false (all characters matter)
// isPalindrome('356653');                   // true

// Palindromic Strings Pt2

// function isRealPalindrome(str) {
//   return str.match(/[a-z0-9]/ig).reverse().join('').toLowerCase() === str.match(/[a-z0-9]/ig).join('').toLowerCase();
// }

// // isRealPalindrome('madam');               // true
// // isRealPalindrome('Madam');               // true (case does not matter)
// // isRealPalindrome('Madam, I\'m Adam');    // true (only alphanumerics matter)
// // isRealPalindrome('356653');              // true
// // isRealPalindrome('356a653');             // true
// // isRealPalindrome('123ab321');            // false

/// Palindromic Number

// function isPalindromicNumber(n) {
//   return parseInt(String(n).split('').reverse().join(''), 10) === n;
// }

// isPalindromicNumber(34543);        // true
// isPalindromicNumber(123210);       // false
// isPalindromicNumber(22);           // true
// isPalindromicNumber(5);            // true


// Running Totals

// function runningTotal(nums) {
//   var sum = 0;
//   return nums.map(function(n) {
//     sum += n;
//     return sum;
//   });
// }

// runningTotal([2, 5, 13]);             // [2, 7, 20]
// runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
// runningTotal([3]);                    // [3]
// runningTotal([]);                     // []

// Letter Swap

// function swap(str) {
//   var firstLetter;
//   var lastLetter;

//   return str.split(' ').map(function(word) {
//     if (word.length === 1) { return word; }
//     return word[word.length - 1] + word.slice(1, -1) + word[0];
//   }).join(' ');
// }

// swap('Oh what a wonderful day it is');    // 'hO thaw a londerfuw yad ti si'
// swap('Abcde');                            // 'ebcdA'
// swap('a');                                // 'a'

// Letter Counter 

// function wordSizes(str) {
//   var wordCount = {};
//   var length;

//   str.split(' ').forEach(function(word) {
//     length = word.match(/\w/g).length;
    
//     if (wordCount[length]) {
//       wordCount[length] += 1;
//     } else {
//       wordCount[length] = 1;
//     }
//   })

//   return wordCount;
// }

// wordSizes('Four score and seven.');                       // { "3": 1, "4" : "1", "5": 1, "6": 1 }
// wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
// wordSizes('What\'s up doc?');                             // { "6": 1, "2": 1, "4": 1 }

// Double Char

// function doubleConsonants(str) {
//   return str.split('').map(function(char) {
//     if (char.match(/[bcdfghjklmnpqrstvwxyz]/i)) {
//       return char + char;
//     } else {
//       return char;
//     }
//   }).join('');
// }

// doubleConsonants('String')       // "SSttrrinngg"
// doubleConsonants('Hello-World!') // "HHellllo-WWorrlldd!"
// doubleConsonants('July 4th')     // "JJullyy 4tthh"
// doubleConsonants('')             // ""


// Convert num to reversed arr

// function reversedNumber(n) {
//   return parseInt(String(n).split('').reverse().join(''), 10);
// }

// reversedNumber(12345); // 54321
// reversedNumber(12213); // 31221
// reversedNumber(456);   // 654
// reversedNumber(12000); // 21 # Note that zeros get dropped!


// Get the Middle Character

// function centerOf(str) {
//   if (str.length % 2 === 1) {
//     return str[Math.floor(str.length / 2)];
//   } else {
//     return str.substr(str.length / 2 - 1, 2);
//   }
// }

// centerOf('I love ruby')    // 'e'
// centerOf('Launch School')  // ' '
// centerOf('Launch')         // 'un'
// centerOf('Launchschool')   // 'hs'
// centerOf('x')              // 'x'

// Always Return Negative

// function negative(n) {
//   return -Math.abs(n);
// }

// negative(5)  // -5
// negative(-3) // -3
// negative(0)  // -0

// Counting Up

// function sequence(n) {
//   var count = [];
//   for (var i = 1; i <= n; i++) {
//     count.push(i);
//   }

//   return count;
// }

// sequence(5) // [1, 2, 3, 4, 5]
// sequence(3) // [1, 2, 3]
// sequence(1) // [1]

// Name Swapping

// function swapName(name) {
//   return name.split(' ').reverse(). join(', ');
// }

// swapName('Joe Roberts') // 'Roberts, Joe'

// Sequence Count

// function sequence(count, n) {
//   var multiples = [];
//   for (var i = 1; i <= count; i++) {
//     multiples.push(i * n);
//   }

//   return multiples;
// }

// sequence(5, 1)       // [1, 2, 3, 4, 5]
// sequence(4, -7)      // [-7, -14, -21, -28]
// sequence(3, 0)       // [0, 0, 0]
// sequence(0, 1000000) // []

// Reverse It Pt 1

// function reverseSentence(str) {
//   return str.split(' ').reverse().join(' ');
// }

// reverseSentence('');                     // ''
// reverseSentence('Hello World');          // 'World Hello'
// reverseSentence('Reverse these words');  // 'words these Reverse'

// Reverse It Pt 2

// function reverseWords(str) {
//   return str.split(' ').map(function(word) {
//     if (word.length >= 5) {
//       return word.split('').reverse().join('');
//     } else {
//       return word;
//     }
//   }).join(' ');
// }
//
// reverseWords('Professional');          // lanoisseforP
// reverseWords('Walk around the block'); // Walk dnuora the kcolb
// reverseWords('Launch School');         // hcnuaL loohcS

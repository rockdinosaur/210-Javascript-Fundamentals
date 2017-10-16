// Ddaaiillyy ddoouubbllee

// function crunch(str) {
//   var strArr = str.split('');
//   var prevChar;
//   var duplicate;

//   return strArr.filter(function(char) {
//     duplicate = char === prevChar;
//     prevChar = char;
//     return !duplicate;
//   }).join('');
// }

// crunch('ddaaiillyy ddoouubbllee');        // 'daily double'
// crunch('4444abcabccba');                  // '4abcabcba'
// crunch('ggggggggggggggg');                // 'g'
// crunch('a');                              // 'a'
// crunch('');                               // ''


// Bannerizer

// function bannerize(str) {
//   var topAndBottomBorder = buildBorder('+', '-', str.length + 2);
//   var side = buildBorder('|', ' ', str.length + 2);
  
//   console.log(`${topAndBottomBorder}\n${side}\n| ${str} |\n${side}\n${topAndBottomBorder}`);
// }

// function buildBorder(side, filling, length) {
//   var line = side;
//   for (var i = 0; i < length; i++) {
//     line += filling;
//   }
//   return line += side;
// }

// bannerize('To boldly go where no one has gone before.');


// Stringy Strings

// function stringy(n) {
//   var stringy = '';
//   for (var i = 1; i <= n; i++) {
//     if (i % 2 === 1) { stringy += '1' }
//     if (i % 2 === 0) { stringy += '0' }
//   }
//   return stringy;
// }

// stringy(6) // '101010'
// stringy(9) // '101010101'
// stringy(4) // '1010'
// stringy(7) // '1010101'

// Fibonacci Number Location by Length

// function findFibonacciIndexByLength(length) {
//   return generateFibonacciSequence(length).length;
// }

// function generateFibonacciSequence(length) {
//   var fib = [1, 1];
//   while (String(fib[fib.length - 1]).length < length) {
//     fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
//   }
//   return fib; 
// }

// findFibonacciIndexByLength(2);     // 7
// findFibonacciIndexByLength(10);    // 45
// findFibonacciIndexByLength(16);    // 74

// Right Triangles

// function triangle(n) {
//   var stars;
//   var spaces;
//   for (var i = 1; i <= n; i++) {
//     stars = i;
//     spaces = n - i;

//     printLine(spaces, stars);
//   }
// }

// function printLine(spaces, stars) {
//   var line = '';
//   for (var i = 0; i < spaces; i++) {
//     line += ' ';
//   }
//   for (var j = 0; j < stars; j++) {
//     line += "*";
//   }
//   console.log(line);
// }

// triangle(9);

// Madlibs

// function madlibs() {
//   var noun = prompt("Enter a noun:");
//   var verb = prompt("Enter a verb:");
//   var adj = prompt("Enter an adjective:");
//   var adv = prompt("Enter an adverb:");

//   console.log(`Do you ${verb} your ${adj} ${noun} ${adv}? That's hilarious!`);
// }

// madlibs();

// Double Doubles

// function twice(n) {
//   var numStr = String(n);
//   if (numStr.length % 2 === 0 && numStr.slice(0, numStr.length / 2) === numStr.slice(numStr.length / 2, numStr.length)) {
//     return n;
//   } else {
//     return n * 2;
//   }
// }

// twice(37);                 // 74
// twice(44);                 // 44
// twice(334433);             // 668866
// twice(444);                // 888
// twice(107);                // 214
// twice(103103);             // 103103
// twice(3333);               // 3333
// twice(7676);               // 7676

// GradeBook

// function getGrade(gr1, gr2, gr3) {
//   var avg = (gr1 + gr2 + gr3) / 3;
//   if (avg >= 90) {
//     return 'A';
//   } else if (avg >= 80) {
//     return 'B';
//   } else if (avg >= 70) {
//     return 'C';
//   } else if (avg >= 60) {
//     return 'D';
//   } else {
//     return 'F';
//   }
// }

// getGrade(95, 90, 93) // "A"
// getGrade(50, 50, 95) // "D"


// Clean Up the Words

// function cleanup(str) {
//   return str.replace(/\W+/g, ' ');
// }

// cleanup('---what\'s my +*& line?');      // ' what s my line '


// What Century is That

// function century(year) {
//   var yearStr = String(year);
//   var century = String(Math.ceil(year / 100));
//   var lastDigits = century.slice(-2);

//   console.log(century);
  
//   if (lastDigits === '11' || lastDigits === '12' || lastDigits === '13') {
//     return century + 'th';
//   } else if (lastDigits.slice(-1) === '1') {
//     return century + 'st';
//   } else if (lastDigits.slice(-1) === '2') {
//     return century + 'nd';
//   } else if (lastDigits.slice(-1) === '3') {
//     return century + 'rd';
//   } else {
//     return century + 'th';
//   }
// }

// century(2000);        // '20th'
// century(2001);        // '21st'
// century(1965);        // '20th'
// century(256);         // '3rd'
// century(5);           // '1st'
// century(10103);       // '102nd'
// century(1052);        // '11th'
// century(1127);        // '12th'
// century(11201);       // '113th'
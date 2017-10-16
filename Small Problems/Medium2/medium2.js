// Lettercase Percentage

// function letterPercentages(str) {
//   var lowercasePercentage = (((str.match(/[a-z]/g) || []).length / str.length) * 100).toFixed(2);
//   var uppercasePercentage = (((str.match(/[A-Z]/g) || []).length / str.length) * 100).toFixed(2);
//   var neitherPercentage = (((str.match(/[^a-z]/ig) || []).length / str.length) * 100).toFixed(2);

//   return { lowercase: lowercasePercentage, uppercase: uppercasePercentage, neither: neitherPercentage };
// }

// letterPercentages('abCdef 123') // { lowercase: 50.00, uppercase: 10.00, neither: 40.00 }
// letterPercentages('AbCd +Ef')   // { lowercase: 37.50, uppercase: 37.50, neither: 25.00 }
// letterPercentages('123')        // { lowercase: 0.00, uppercase: 0.00, neither: 100.00 }

// Triangle Sides

// function triangle(a, b, c) {
//   if (!a || !b || !c) { return 'invalid'; }
//   var orderedSides = [a, b, c].sort(function(x, y) {
//     return x - y;
//   });

//   if (orderedSides[0] + orderedSides[1] <= orderedSides[2]) { return 'invalid'; }
//   if (orderedSides[0] === orderedSides[1] && orderedSides[1] === orderedSides[2]) { 
//     return 'equilateral';
//   } else if (orderedSides[0] === orderedSides[1] || orderedSides[0] === orderedSides[2] || orderedSides[1] === orderedSides[2]) {
//     return 'isosceles';
//   } else {
//     return 'scalene';
//   }
// }

// triangle(3, 3, 3)   // equilateral
// triangle(3, 3, 1.5) // isosceles
// triangle(3, 4, 5)   // scalene
// triangle(0, 3, 3)   // invalid
// triangle(3, 1, 1)   // invalid


// Tri-Angles

// function triangle(a, b, c) {
//   if (a + b + c !== 180 || !a || !b || !c) { 
//     return 'invalid'; 
//   } else if (a === 90 || b === 90 || c === 90) {
//     return 'right';
//   } else if (a > 90 || b > 90 || c > 90) {
//     return 'obtuse';
//   } else {
//     return 'acute';
//   }
// }

// triangle(60, 70, 50)   // acute
// triangle(30, 90, 60)   // right
// triangle(120, 50, 10)  // obtuse
// triangle(0, 90, 90)    // invalid
// triangle(50, 50, 50)   // invalid


// Unlucky Days

// function fridayThe13ths(year) {
//   var blackFridays = 0;
//   var the13th;
//   for (var month = 0; month < 12; month++) {
//     the13th = new Date(year, month, 13);
//     if (the13th.getDay() === 5) { blackFridays += 1; }
//   }

//   return blackFridays;
// }

// fridayThe13ths(2015) // 3
// fridayThe13ths(1986) // 1

// Next Featured Number Higher than a Given Value

// function featured(n) {
//   do {
//     n += 1;
//   } while (n % 7 !== 0)

  
//   while (n % 2 === 0 || !unique(n)) {
//     n += 7;
//   }

//   return n;
// }

// function unique(n) {
//   var digits = String(n).split('');
//   var currentRegex;
//   return digits.every(function(char) {
//     currentRegex = new RegExp(char, 'g');
//     return String(n).match(currentRegex).length === 1;
//   })  
// }


// featured(12)        // 21
// featured(20)        // 21
// featured(21)        // 35
// featured(997)       // 1029
// featured(1029)      // 1043
// featured(999999)    // 1023547
// featured(999999987) // 1023456987

// Sum Square - Square Sum

// function sumSquareDifference(n) {
//   var nums = [];
//   for (var i = 1; i <= n; i++) {
//     nums.push(i);
//   }

//   return Math.pow(nums.reduce(function(sum, currentNum) {
//     return sum + currentNum;
//   }), 2) - nums.reduce(function(sum, currentNum) {
//     return sum + Math.pow(currentNum, 2);
//   }, 0);
// }

// sumSquareDifference(3)    // 22
// sumSquareDifference(10)   // 2640
// sumSquareDifference(1)    // 0
// sumSquareDifference(100)  // 25164150


// Bubble Sort

// function bubbleSort(arr) {
//   var swapped = true;
//   var currentElement;

//   while (swapped) {
//     console.log(arr)
//     for (var i = 0; i < arr.length - 1; i++) {
//       if (arr[i] <= arr[i + 1]) {
//         swapped = false;
//         continue;
//       } else {
//         currentElement = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = currentElement;
//         swapped = true;
//         break;
//       }
//     }
//   }

//   return arr;
// }

// var array = [5, 3];
// bubbleSort(array);
// console.log(array);     // [3, 5]

// array = [6, 2, 7, 1, 4]
// bubbleSort(array);
// console.log(array);     // [1, 2, 4, 6, 7]

// array = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
// bubbleSort(array);
// console.log(array);     // ['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler']
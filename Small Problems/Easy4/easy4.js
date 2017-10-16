// Cute Angles

// function dms(n) {
//   var degrees = Math.floor(n);
//   var degreesRemainder = n - degrees;
//   var minutes = Math.floor(degreesRemainder * 60);
//   var minutesRemainder = degreesRemainder * 60 - minutes;
//   var seconds = Math.floor(minutesRemainder * 60);
  
//   return `${degrees}${'\xB0'}${minutes}'${seconds}"`;
// }

// dms(76.73);

// Combining Arrays


// function union(arr1, arr2) {
//   var combined = [];
//   uniqueArray(arr1, combined);
//   uniqueArray(arr2, combined);

//   return combined;
// }

// function uniqueArray(arr, unique) {
//    arr.forEach(function(n) {
//     if (!unique.includes(n)) {
//       unique.push(n);
//     }
//   })

//   return unique;
// }

// union([1, 3, 5], [3, 6, 9]); // [1, 3, 5, 6, 9]

// Halvsies

// function halvsies(arr) {
//   return [arr.slice(0, Math.ceil(arr.length / 2)), arr.slice(Math.ceil(arr.length / 2))];
// }

// halvsies([1, 2, 3, 4])    // [[1, 2], [3, 4]]
// halvsies([1, 5, 2, 4, 3]) // [[1, 5, 2], [4, 3]]
// halvsies([5])             // [[5], []]
// halvsies([])              // [[], []]

// Find the Duplicate

// function findDup(arr) {
//   return arr.filter(function(n) {
//     return arr.indexOf(n) !== arr.lastIndexOf(n);
//   })[0];
// }

// findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
//          38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
//          14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
//          78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
//          89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
//          41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
//          55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
//          85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
//          40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
//          7,  34, 57, 74, 45, 11, 88, 67,  5, 58])  // 73

// Combine Two Lines Alternating

// function interleave(arr1, arr2) {
//   var interleaved = [];
//   for (var i = 0; i < arr1.length; i++) {
//     interleaved.push(arr1[i], arr2[i]);
//   }

//   return interleaved;
// }

// interleave([1, 2, 3], ['a', 'b', 'c']) // [1, 'a', 2, 'b', 3, 'c']

// Multiplicative Average

// function showMultiplicativeAverage(arr) {
//   return (arr.reduce(function(product, n) { return product * n }) / arr.length).toFixed(3);
// }

// showMultiplicativeAverage([3, 5])                 // '7.500'
// showMultiplicativeAverage([2, 5, 7, 11, 13, 17])  // '28361.667'

// Multiply Lists

// function multiplyLists(arr1, arr2) {
//   var i;
//   return arr1.map(function(n) {
//     i = (i += 1) || 0;
//     return n * arr2[i];
//   });
// }

// multiplyLists([3, 5, 7], [9, 10, 11]) // [27, 50, 77]

// Digits List

// function digitList(n) {
//   return String(n).split('').map(function(char) { return parseInt(char, 10); });
// }

// digitList(12345);       // [1, 2, 3, 4, 5]
// digitList(7);           // [7]
// digitList(375290);      // [3, 7, 5, 2, 9, 0]
// digitList(444);         // [4, 4, 4]

// How Many

// function countOccurrences(arr) {
//   var counts = {};
//   arr.forEach(function(element) {
//     if (counts[element]) {
//       counts[element] += 1;
//     } else {
//       counts[element] = 1;
//     }
//   })
//   Object.keys(counts).forEach(function(key) {
//     console.log(`${key} => ${counts[key]}`);
//   })
// }

// var vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck', 'motorcycle', 'motorcycle', 'car', 'truck'];
// countOccurrences(vehicles);


// Array Average

// function average(arr) {
//   return Math.floor(arr.reduce(function(sum, n) { return sum + n; }) / arr.length);
// }

// average([1, 5, 87, 45, 8, 8])    // 25
// average([9, 47, 23, 95, 16, 52]) // 40
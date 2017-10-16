// Alphabetical Numbers

// Write a function that takes an array of integers between 0 and 19, and returns an array of those integers sorted based 
// on the English words for each number:

// function alphabeticNumberSort(nums) {
//   return nums.sort(function(x, y) {
//     if (numWords[x] > numWords[y]) {
//       return 1;
//     } else if (numWords[x] < numWords[y]) {
//       return -1;
//     } else {
//       return 0;
//     }
//   });
// }

// var numWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 
// 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

// var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
// alphabeticNumberSort(nums);

// Sum of Digits

// function sum(n) {
//   return String(n).split('').map(function(char) {
//     return parseInt(char, 10);
//   }).reduce(function(sum, n) {
//     return sum + n;
//   });
// }

// sum(23);          // 5
// sum(496);         // 19
// sum(123456789);   // 45

// Multiply All Pairs

// function multiplyAllPairs(arr1, arr2) {
//   var pairs = [];
//   arr1.forEach(function(x){
//     arr2.forEach(function(y) {
//       pairs.push(x * y);
//     })
//   })
//   return pairs.sort(function(x, y) {
//     return x - y;
//   })
// }

// multiplyAllPairs([2, 4], [4, 3, 1, 2]) // [2, 4, 4, 6, 8, 8, 12, 16]


// Sum of Sums

// function sumOfSums(nums) {
//   var previous = [];
//   return nums.reduce(function(sum, x) {
//     previous.push(x);
//     return sum + previous.reduce(function(subsum, y) {
//       return subsum + y;
//     })
//   }, 0);
// }

// sumOfSums([3, 5, 2])       // (3) + (3 + 5) + (3 + 5 + 2) # -> (21)
// sumOfSums([1, 5, 7, 3])    // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) # -> (36)
// sumOfSums([4])             // 4


// Leading Substrings

// function substringsAtStart(str) {
//   return str.split('').map(function(char, idx) {
//     return str.substr(0, idx + 1);
//   });
// }

// substringsAtStart('abc')   // ['a', 'ab', 'abc']
// substringsAtStart('a')     // ['a']
// substringsAtStart('xyzzy') // ['x', 'xy', 'xyz', 'xyzz', 'xyzzy']

// All Substrings

// function substrings(str) {
//   var allSubstrings = [];
//   var incrLength;
//   str.split('').forEach(function(char, idx) {
//     incrLength = 1;
//     for (var i = idx; i < str.length; i++) {
//       allSubstrings.push(str.substr(idx, incrLength))
//       incrLength++;
//     }
//   })

//   return allSubstrings;
// }

// substrings('abcde');

// Palindromic Substrings

// function palindromes(str) {
//   return substrings(str).filter(function(substring) {
//     return (substring.length > 1 && substring.split('').reverse().join('') === substring);
//   })
// }

// palindromes('hello-madam-did-madam-goodbye');
// palindromes('knitting cassettes');

// Grocery List

// function buyFruit(groceryList) {
//   var groceryBag = [];
//   var count;
//   var product;
//   groceryList.forEach(function(item) {
//     produce = item[0];
//     count = item[1];
//     for (var i = 0; i < count; i++) {
//       groceryBag.push(produce);
//     }
//   })

//   return groceryBag;
// }

// buyFruit([['apples', 3], ['orange', 1], ['bananas', 2]]);

// Inventory Item Transactions

// function transactionsFor(itemID, transactions) {
//   return transactions.filter(function(transaction) {
//     return transaction.id === itemID;
//   });
// }

// var transactions = [ {id: 101, movement: 'in', quantity: 5, },
//                      {id: 105, movement: 'in', quantity: 10, },
//                      {id: 102, movement: 'out', quantity: 17, },
//                      {id: 101, movement: 'in', quantity: 12, },
//                      {id: 103, movement: 'out', quantity: 15, },
//                      {id: 102, movement: 'out', quantity: 15, },
//                      {id: 105, movement: 'in', quantity: 25, },
//                      {id: 101, movement: 'out', quantity: 18, },
//                      {id: 102, movement: 'in', quantity: 22, },
//                      {id: 103, movement: 'out', quantity: 15, },];

// transactionsFor(101, transactions);
// // result
// [ { id: 101, movement: 'in', quantity: 5 },
//   { id: 101, movement: 'in', quantity: 12 },
//   { id: 101, movement: 'out', quantity: 18 }, ]

// Inventory Availability

// function isItemAvailable(itemID, transactions) {
//   return transactionsFor(itemID, transactions).reduce(function(totalQuantity, transaction) {
//     if (transaction.movement === 'in') {
//       return totalQuantity + transaction.quantity;
//     } else {
//       return totalQuantity - transaction.quantity;
//     }
//   }, 0) > 0;
// }

// var transactions = [ {id: 101, movement: 'in', quantity: 5, },
//                      {id: 105, movement: 'in', quantity: 10, },
//                      {id: 102, movement: 'out', quantity: 17, },
//                      {id: 101, movement: 'in', quantity: 12, },
//                      {id: 103, movement: 'out', quantity: 15, },
//                      {id: 102, movement: 'out', quantity: 15, },
//                      {id: 105, movement: 'in', quantity: 25, },
//                      {id: 101, movement: 'out', quantity: 18, },
//                      {id: 102, movement: 'in', quantity: 22, },
//                      {id: 103, movement: 'out', quantity: 15, },];

// isItemAvailable(101, transactions); // false
// isItemAvailable(105, transactions); // true
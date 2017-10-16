// Madlibs Revisited

// function madlibs(template) {
//   return `The ${randomize(template.adjectives)} ${randomize(template.nouns)} ${randomize(template.adverbs)} ${randomize(template.verbs)} the ${randomize(template.nouns)}.`
// }

// function randomize(arr) {
//   return arr[Math.floor(Math.random() * arr.length)]
// }

// var template1 = {
//   adjectives: ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'],
//   nouns: ['fox', 'dog', 'head', 'leg', 'tail'],
//   verbs: ['jumps', 'lifts', 'bites', 'licks', 'pats'],
//   adverbs: ['easily', 'lazily', 'noisily', 'excitedly'],
// }

// madlibs(template1);


// Transpose 

// function transpose(matrix) {
//   var transposed = [];
//   for (var i = 0; i < matrix[0].length; i++) {
//     transposed.push(matrix.map(function(row) {
//       return row[i];
//     }))
//   }
//   return transposed;
// }

// var matrix = [
//   [1, 5, 8],
//   [4, 7, 2],
//   [3, 9, 6]
// ]

// var newMatrix = transpose(matrix)
// console.log(newMatrix); // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
// console.log(matrix);    // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

// transpose([[1, 2, 3, 4]]);       // [[1], [2], [3], [4]]
// transpose([[1], [2], [3], [4]]); // [[1, 2, 3, 4]]
// transpose([[1]]);                // [[1]]
// transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]);


// Rotating Matrices

// function rotate90(matrix) {
//   var rotated90 = [];
//   var row;
//   for (var y = 0; y < matrix[0].length; y++) {
//     row = [];
//     for (var x = matrix.length - 1; x >= 0; x--) {
//       row.push(matrix[x][y]);
//     }
//     rotated90.push(row);
//   }
//   return rotated90;;
// }

// var matrix1 = [
//   [1, 5, 8],
//   [4, 7, 2],
//   [3, 9, 6]
// ]

// var newMatrix1 = rotate90(matrix1);
// console.log(newMatrix1); // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]


// var matrix2 = [
//   [3, 7, 4, 2],
//   [5, 1, 0, 8]
// ]

// var newMatrix2 = rotate90(matrix2);
// console.log(newMatrix2); // [[5, 3], [1, 7], [0, 4], [8, 2]]

// var newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));
// console.log(newMatrix3); // matrix2


// Merged Sorted Lists

// function merge(arr1, arr2) {
//   var merged = [];
//   var i = 0;
//   var j = 0;

//   while (i < arr1.length || j < arr2.length) {
//     if (arr1[i] <= arr2[j] || !arr2[j]) {
//       merged.push(arr1[i]);
//       i += 1;
//     } else if (arr1[i] > arr2[j] || !arr1[i]) {
//       merged.push(arr2[j]);
//       j += 1;
//     }
//   }

//   return merged;
// }

// merge([1, 5, 9], [2, 6, 8]) // [1, 2, 5, 6, 8, 9]
// merge([1, 1, 3], [2, 2])    // [1, 1, 2, 2, 3]
// merge([], [1, 4, 5])        // [1, 4, 5]
// merge([1, 4, 5], [])        // [1, 4, 5]


// function mergeSort(array) {
//   if (array.length === 1) {
//     return array;
//   }

//   var subArray1 = array.slice(0, array.length / 2);
//   var subArray2 = array.slice(array.length / 2);

//   subArray1 = mergeSort(subArray1);
//   subArray2 = mergeSort(subArray2);


//   return merge(subArray1, subArray2);
// }

// mergeSort([9, 5, 7, 1]);                // [1, 5, 7, 9]


// Binary Search

// function binarySearch(orderedArr, val) {
//   if (orderedArr[0] === val) {
//     return 0;
//   }
//   if (orderedArr[orderedArr.length - 1] === val) {
//     return orderedArr.length - 1;
//   }

//   var searchIdx = Math.floor(orderedArr.length / 2);
//   var minIdx = 0;
//   var maxIdx = orderedArr.length - 1;
//   var prevSearchIdx;

//   while (searchIdx !== prevSearchIdx) {
//     prevSearchIdx = searchIdx;
//     if (orderedArr[searchIdx] === val) {
//       return searchIdx;
//     } else if (val > orderedArr[searchIdx]) {
//       minIdx = searchIdx;
//       searchIdx = Math.floor((maxIdx + minIdx) / 2);
//     } else if (val < orderedArr[searchIdx]) {
//       maxIdx = searchIdx;
//       searchIdx = Math.floor((maxIdx + minIdx) / 2);
//     }
//   }

//   return -1;   
// }

// binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 105], 89);                               


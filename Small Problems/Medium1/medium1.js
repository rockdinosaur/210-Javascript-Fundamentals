// Rotation Pt 1

function rotateArray(arr) {
  if (!Array.isArray(arr)) {
    return undefined;
  } else if (!arr.length >= 1) {
    return [];
  }
  
  return arr.slice(1).concat(arr[0]);
}
console.log('hi');
rotateArray([7, 3, 5, 2, 9, 1])   // [3, 5, 2, 9, 1, 7]
// rotateArray(['a', 'b', 'c'])      // ['b', 'c', 'a']
// rotateArray(['a'])                // ['a']
// rotateArray([1, 'a', 3, 'c']);    // [ 'a', 3, 'c', 1 ]
// rotateArray([{a: 2}, [1, 2], 3]); // [ [1, 2], 3, {a: 2} ]
// rotateArray([])                   // []

// // return undefined if the argument is not an array
// rotateArray();                    // undefined
// rotateArray(1);                   // undefined


// // the input array is not mutated
// x = [1, 2, 3, 4]
// rotateArray(x)                  // [2, 3, 4, 1]
// console.log(x)                  // [1, 2, 3, 4]

// Rotation Pt 2

// function rotateRightmostDigits(num, fromRight) {
//   var numStr = String(num).split('');
//   var untouched = numStr.slice(0, -fromRight);
//   var rotate = numStr.slice(-fromRight);

//   return parseInt(untouched.concat(rotate.slice(1).concat(rotate[0])).join(''), 10);
// }

// rotateRightmostDigits(735291, 2) // 735219
// rotateRightmostDigits(735291, 3) // 735912
// rotateRightmostDigits(735291, 1) // 735291
// rotateRightmostDigits(735291, 6) // 352917

// Rotation Pt 3

// function maxRotation(n) {
//   var rotatedNum = n;
//   var numLength = String(n).length;
//   String(n).split('').forEach(function(digit, idx) {
//     rotatedNum = rotateRightmostDigits(rotatedNum, numLength - idx);
//   })  

//   return rotatedNum;
// }

// maxRotation(735291)        // 321579
// maxRotation(3)             // 3
// maxRotation(35)            // 53
// maxRotation(105)           // 15 # the leading zero gets dropped
// maxRotation(8703529146)    // 7321609845


// Stack Machine Interpretation

// function minilang(commands) {
//   var register = 0;
//   var stack = [];

//   commands.split(' ').forEach(function(command) {
//     if (parseInt(command, 10)) {
//       register = parseInt(command, 10);
//     } 
//     switch (command) {
//       case 'PUSH':
//         stack.push(register);
//         break;
//       case 'ADD':
//         register += stack.pop();
//         break;
//       case 'SUB':
//         register -= stack.pop();
//         break;
//       case 'MULT':
//         register *= stack.pop();
//         break;
//       case 'DIV':
//         register = Math.floor(register / stack.pop());
//         break;
//       case 'MOD':
//         register = Math.floor(register % stack.pop());
//         break;
//       case 'POP':
//         register = stack.pop();
//         break;
//       case 'PRINT':
//         console.log(register);
//         break;
//        default:
//         console.log("Illegal command!!!");
//     }
//   })
// }

// minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT')
// minilang('3 PUSH PUSH 7 DIV MULT PRINT ')
// minilang('4 PUSH PUSH 7 MOD MULT PRINT ')
// minilang('-3 PUSH 5 SUB PRINT')
// minilang('6 PUSH')


// Word to Digit

// function wordToDigit(words) {
//   return words.split(/\b/).map(function(word) {
//     console.log(word);
//     if (nums.indexOf(word.toLowerCase()) >= 0) {
//       return nums.indexOf(word.toLowerCase());
//     } else {
//       return word;
//     }
//   }).join('');
// }

// var nums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

// wordToDigit('Please call me at five five five one two three four. Thanks.');

// Fibonacci (recursion)
// var prevFib = {};

// function fibonacciRecursive(n) {
//  console.log(prevFib);
//  if (n >= 2) {
//    if (prevFib[n]) {
//      return prevFib[n]
//    } else {
//      prevFib[n] = fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
//      return prevFib[n];
//    }
//  } else {
//    return 1;
//  }
// }

// fibonacciRecursive(4)  


// Fibonacci (proocedural)

// function fibonacciProcecural(n) {
//   var starting = [1, 1];
//   while (starting.length < n) {
//     starting.push(starting[starting.length - 1] + starting[starting.length - 2]);
//   }
//   return starting[starting.length - 1];
// }

// fibonacciProcecural(20)   // 6765
// fibonacciProcecural(50)   // 12586269025
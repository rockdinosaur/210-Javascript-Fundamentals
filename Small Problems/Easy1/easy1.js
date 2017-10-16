// How Big is the Room

// var length = parseFloat(prompt("Enter length in meters:"));
// var width = parseFloat(prompt("Enter width in meters:"));
// var sqrFeetInAMeter = 10.7639;
// var areaInMeters = (length * width).toFixed(1);
// var areaInFt = areaInMeters * sqrFeetInAMeter;

// console.log(`The area of the room is ${areaInMeters} squared meters or ${areaInFt} sqr feet`);

// Tip Calculator

// var bill = parseFloat(prompt("What is the total?"));
// var tipPercent = parseFloat(prompt("What is the tip %?")) / 100;
// var tip = bill * tipPercent;
// var totalBill = bill + tip;

// console.log(`Your tip is: ${tip.toFixed(2)}\nYour total is: ${totalBill.toFixed(2)}`);

// Sum or Product of Consecutive Integers

// var myNum = parseInt(prompt("Enter a positive integer:"), 10);
// var choice = prompt('Enter "s" to compute the sum, "p" to compute the product.');
// var total;

// if (choice === 's') {
//   total = 0;
//   for (var i = 1; i <= myNum; i++) {
//     total += i;
//   }
//   console.log(`The sum of integers between 1 and ${myNum} is ${total}`);
// } else if (choice === 'p') {
//   total = 1;
//   for (var j = 1; j <= myNum; j++) {
//     total *= j;
//   }
//   console.log(`The product of integers between 1 and ${myNum} is ${total}`);
// } else {
//   console.log('Invalid choice');
// }

// Short Long Short

// function shortLongShort(str1, str2) {
//   var shortStr = str1.length > str2.length ? str2 : str1;
//   var longStr = str1.length <= str2.length ? str2 : str1;

//   return `${shortStr}${longStr}${shortStr}`;
// }

// Leap Years

// function isLeapYear(year) {
//   if (year <= 1752) {
//     return year % 4 === 0;
//   } else {
//     return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
//   }
// }

// Multiples of 3 and 5

// function multisum(n) {
//   var total = 0;
//   for (var i = 1; i <= n; i++) {
//     if (i % 3 === 0 || i % 5 === 0) { total += i }
//   }

//   return total;
// }

// ASCII String Value

// function asciiValue(str) {
//   return str.split('').reduce(function(total, char) { return total + char.charCodeAt(0); }, 0);
// }

// asciiValue('Four score');         // 984
// asciiValue('Launch School');      // 1251
// asciiValue('a');                  // 97
// asciiValue('');                   // 0



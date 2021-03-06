// Strings
// 1

var firstName = 'Steven';
var lastName = 'Shen';

var fullName = firstName + ' ' + lastName;
console.log(fullName);

// 2

console.log(firstName.concat(lastName));

// 3

console.log(fullName.split(' '));

// 4

var language = 'JavaScript';

var idx = language.indexOf('S');
console.log(idx);

// 5

var charCode = language.charCodeAt(idx);
console.log(charCode);

// 6

console.log(String.fromCharCode(charCode));

// 7

console.log(language.lastIndexOf('a'));

// 8 

var a = 'a';
var b = 'b';

console.log(a > b);
var b = 'B';
console.log(a > b);

// 9

var aIndex = language.indexOf('a');
var vIndex = language.indexOf('v');
console.log(language.substr(aIndex, 4));
console.log(language.substr(vIndex, 4));

// 10

console.log(language.substring(aIndex, 4));
console.log(language.substring(vIndex, 4));

// 11

var fact1 = 'JavaScript is fun';
var fact2 = 'Kids like it too';

var compoundSentence = fact1 + ' and ' + fact2[0].toLowerCase() + fact2.slice(1);
console.log(compoundSentence);

// 12

console.log(fact1[0]);
console.log(fact2[0]);

// 13

var pi = 22 / 7;
var pi = pi.toString();
console.log(pi.lastIndexOf('14'));

// 14

var boxNumber = 356..toString();
console.log(boxNumber);

// 15

boxNumber = parseInt(boxNumber, 10);
console.log(typeof boxNumber);

boxNumber = String(boxNumber);
console.log(typeof boxNumber);

// 16

var userName = prompt('What is your name?');
if (userName.endsWith('!')) {
  console.log("HELLO " + userName.slice(0, -1).toUpperCase() + ". WHY ARE WE SCREAMING?");
} else {
  console.log("Hello " + userName);
}

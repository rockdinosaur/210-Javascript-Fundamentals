// Counting the Number of Characters

function countChars() {
	var userString = prompt("Please write a phrase: ");
	console.log("There are " + String(userString.length) + " characters in " + userString);
}

function stringToInteger(str) {
	var nums = {
		'1': 1,
		'2': 2,
		'3': 3,
		'4': 4,
		'5': 5,
		'6': 6,
		'7': 7,
		'8': 8,
		'9': 9,
		'0': 0,
	};
	var chars = str.split('').reverse();
	var i;
	var integer = 0;
	
	for (i = 0; i < chars.length; i++) {
		integer += nums[chars[i]] * Math.pow(10, i);
	}
	
	return integer;
}

function stringToSignedInteger(str) {
	switch (str[0]) {
		case "-":
			return stringToInteger(str.slice(1)) * -1;
		case "+":
			return stringToInteger(str.slice(1));
		default:
			return stringToInteger(str);
	}
}

function integerToString(n) {
	if (n === 0) return 0; 
	
	var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
	var numArr = [];
	
	while (n > 0) {
		numArr.push(n % 10);
		n = Math.floor(n / 10);
	}
	
	return numArr.reverse().join('');
}

function signedIntegerToString(n) {
	if (n > 0) {
		return "+" + integerToString(n);
	} else if (n < 0 ) {
		return "-" + integerToString(-n);
	} else {
		return integerToString(n);
	}
}

console.log(signedIntegerToString(4321));
console.log(signedIntegerToString(-123));
console.log(signedIntegerToString(0));
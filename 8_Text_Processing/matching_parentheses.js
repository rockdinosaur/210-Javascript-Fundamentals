// Write a function that takes a string as an argument and returns true if the string contains properly balanced parentheses, false otherwise. 
// Parentheses are properly balanced only when '(' and ')' occur in matching pairs, with each pair starting with '('.

function isBalanced(str) {
  return !str.split('').reduce(function(acc, char) {
    if (acc < 0) { return acc }
    if (char === '(') { return ++acc; }
    if (char === ')') { return --acc; }
    return acc;
  }, 0);
}

isBalanced('What (is) this?');        // true
isBalanced('What is) this?');         // false
isBalanced('What (is this?');         // false
isBalanced('((What) (is this))?');    // true
isBalanced('((What)) (is this))?');   // false
isBalanced('Hey!');                   // true
isBalanced(')Hey!(');                 // false
isBalanced('What ((is))) up(');       // false


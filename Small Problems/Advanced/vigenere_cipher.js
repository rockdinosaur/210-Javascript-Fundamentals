// Vigenere Cipher
var upcaseAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var downcaseAlphabet = upcaseAlphabet.toLowerCase();

function caesarEncrypt(str, n) {
  var caesarCipher = '';
  
  str.split('').forEach(function(char) {
    if (char.match(/[A-Z]/)) {
      caesarCipher += upcaseAlphabet[(upcaseAlphabet.indexOf(char) + n) % upcaseAlphabet.length];
    } else if (char.match(/[a-z]/)) {
      caesarCipher += downcaseAlphabet[(downcaseAlphabet.indexOf(char) + n) % downcaseAlphabet.length];
    } else {
      caesarCipher += char;
    }
  })
  
  return caesarCipher;
}


function vigenereEncrypt(str, keyword) {
  var vigenereCipher = '';
  var currentIdx;
  var currentShift;
  str.split('').forEach(function(char) {
    if (char.match(/[a-z]/i)) {
      currentIdx = ((currentIdx + 1) % keyword.length) || 0;
      if (keyword[currentIdx].match(/[A-Z]/)) {
        currentShift = upcaseAlphabet.indexOf(keyword[currentIdx]);
      } else if (keyword[currentIdx].match(/[a-z]/)) {
        currentShift = downcaseAlphabet.indexOf(keyword[currentIdx]);
      }
      
      vigenereCipher += caesarEncrypt(char, currentShift);
    } else {
      vigenereCipher += char;
    }
  })
  
  return vigenereCipher;
}


vigenereEncrypt('Pineapples don\'t go on pizzas!', 'meat');
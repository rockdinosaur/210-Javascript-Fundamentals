// Caesar Cipher

function caesarEncrypt(str, n) {
  var upcaseAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  var downcaseAlphabet = upcaseAlphabet.toLowerCase();
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

caesarEncrypt('A', 0);       // 'A'
caesarEncrypt('A', 3);       // 'D'
caesarEncrypt('y', 5);       // 'd'
caesarEncrypt('a', 47);      // 'v'
caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25);
caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5);
caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2);
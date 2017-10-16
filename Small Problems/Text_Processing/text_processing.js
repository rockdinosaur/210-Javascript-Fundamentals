// Uppercase Check

// function isUppercase(str) {
//   return str.split('').every(function(char) {
//     if (char.match(/[a-z]/i)) {
//       return char.match(/[A-Z]/);
//     } else {
//       return true;
//     }
//   })
// }

// isUppercase('t')          // false
// isUppercase('T')          // true
// isUppercase('Four Score') // false
// isUppercase('FOUR SCORE') // true
// isUppercase('4SCORE!')    // true
// isUppercase('')           // true

// Delete Vowels

// function removeVowels(strings) {
//   return strings.map(function(string) {
//     return string.match(/[^aeiou]/ig).join('');
//   })
// }

// removeVowels(['abcdefghijklmnopqrstuvwxyz']);             // ['bcdfghjklmnpqrstvwxyz']
// removeVowels(['green', 'YELLOW', 'black', 'white']);      // ['grn', 'YLLW', 'blck', 'wht']
// removeVowels(['ABC', 'AEIOU', 'XYZ']);                    // ['BC', '', 'XYZ']

// Lettercase Counter

// function letterCaseCount(str) {
//   var caseCount = { lowercase: 0, uppercase: 0, neither: 0 };
//   str.split('').forEach(function(char) {
//     if (char.match(/[a-z]/)) {
//       caseCount.lowercase += 1;
//     } else if (char.match(/[A-Z]/)) {
//       caseCount.uppercase += 1;
//     } else {
//       caseCount.neither += 1;
//     }
//   })

//   return caseCount;
// }

// letterCaseCount('abCdef 123') // { lowercase: 5, uppercase: 1, neither: 4 }
// letterCaseCount('AbCd +Ef')   // { lowercase: 3, uppercase: 3, neither: 2 }
// letterCaseCount('123')        // { lowercase: 0, uppercase: 0, neither: 3 }
// letterCaseCount('')           // { lowercase: 0, uppercase: 0, neither: 0 }

// Capitalize Words

// function wordCap(str) {
//   return str.split(' ').map(function(word) {
//     return word[0].toUpperCase() + word.slice(1).toLowerCase();
//   }).join(' ');
// }

// wordCap('four score and seven')    // 'Four Score And Seven'
// wordCap('the javaScript language') // 'The Javascript Language'
// wordCap('this is a "quoted" word') // 'This Is A "quoted" Word'

// Swap Case

// function swapcase(str) {
//   return str.split('').map(function(char) {
//     if (char.match(/[a-z]/)) {
//       return char.toUpperCase();
//     } else {
//       return char.toLowerCase();
//     }
//   }).join('');
// }

// swapcase('CamelCase')         // 'cAMELcASE'
// swapcase('Tonight on XYZ-TV') // 'tONIGHT ON xyz-tv'

// Staggered Caps

// function staggeredCase(str) {
//   var alternate = 0;

//   return str.split('').map(function(char) {
//     if (char.match(/[a-z]/i)) {
//       if (alternate % 2 === 0) {
//         alternate += 1;
//         return char.toUpperCase();
//       } else {
//         alternate += 1;
//         return char.toLowerCase();
//       }
//     } else {
//       return char;
//     }
//   }).join('');
// }

// staggeredCase('I Love Launch School!')     // 'I lOvE lAuNcH sChOoL!'
// staggeredCase('ALL CAPS')                  // 'AlL cApS'
// staggeredCase('ignore 77 the 444 numbers') // 'IgNoRe 77 ThE 444 nUmBeRs

// How Long Are You

// function wordLengths(str) {
//   if (!str || str.length === 0) { return []; }
//   return str.split(' ').map(function(word) {
//     return `${word} ${word.length}`;
//   })
// }

// wordLengths('cow sheep chicken');
// wordLengths('baseball hot dogs and apple pie');
// wordLengths('It ain\'t easy, is it?');
// wordLengths('Supercalifragilisticexpialidocious');
// wordLengths('');

// Search Word

// function searchWord(word, text) {
//   return text.match(new RegExp(`\\b${word}\\b`, 'ig')) ? text.match(new RegExp(`\\b${word}\\b`, 'ig')).length : 0;
// }

// var text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
// searchWord('sed', text);   // 3
// searchWord('qui', text);   // should only return 4, NOT 13


// Search Word Pt 2

// function searchAndHighlightWord(word, text) {
//   var wordRegex = new RegExp(`\\b${word}\\b`, `i`)
//   return text.split(' ').map(function(word) {
//     if (word.match(wordRegex)) {
//       return `**${word.toUpperCase()}**`
//     } else {
//       return word;
//     }
//   }).join(' ');
// }
//
// var text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
// searchAndHighlightWord('sed', text);

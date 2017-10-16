function acronym(string) {
  return string.split(/[\W]/).map(function(word) {
    if (word !== '') { 
      return word[0].toUpperCase();
    } else {
      return word;
    }
  }).join('');
}

acronym('Portable Network Graphics');                 // "PNG"
acronym('First In, First Out');                       // "FIFO"
acronym('PHP: HyperText Preprocessor');               // "PHP"
acronym('Complementary metal-oxide semiconductor');   // "CMOS"
acronym('Hyper-text Markup Language');                // "HTML"
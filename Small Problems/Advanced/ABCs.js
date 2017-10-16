// Now I Know My ABC's

function isBlockWord(word) {
  var blocks = ['BO', 'XK', 'DQ', 'CP', 'NA', 'GT', 'RE', 'FS', 'JW', 'HU', 'VI', 'LY', 'ZM'];
  var chars = word.toUpperCase().split('');
  var blocksUsed = 0;
  
  chars.forEach(function(char) {
    blocks.forEach(function(block, idx) {
      if (block.match(char)) {
        blocks[idx] = '';
        blocksUsed += 1;
      }
    })
  })
  
  return blocksUsed === chars.length;
}
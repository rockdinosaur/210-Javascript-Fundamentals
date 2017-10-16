// Diamonds

function diamond(n) {
  var numSpaces = Math.floor(n / 2);
  var spaces;
  var stars;
  
  for (var row = -numSpaces; row <= numSpaces; row++) {
    spaces = '';
    stars = '';
    
    for (var i = 1; i <= Math.abs(row); i++) {
      spaces += ' ';
      }
      
    for (var numStars = 1; numStars <= n - 2 * Math.abs(row); numStars++) {
      stars += '*';
    }
    console.log(spaces + stars);
  }
  

}

diamond(9);
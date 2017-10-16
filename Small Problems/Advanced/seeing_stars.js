// Seeing Stars

function star(n) {
  var counter = n;
  var starStr = '*';
  while ((counter - 3) / 2 > 0) {
    console.log(starStr + ' '.repeat((counter - 3) / 2) + '*' + ' '.repeat((counter - 3) / 2) + '*');
    counter -= 2;
    starStr = ' ' + starStr;
  }

  console.log(starStr + '**\n' + '*'.repeat(n));
  
  counter = n;
  var inverse = 3;
  while ((counter - 3) / 2 >= 0) {
    console.log(' '.repeat((counter - 3) / 2) + ('*' + ' '.repeat((inverse - 3) / 2)).repeat(3));
    counter -= 2;
    inverse += 2;
  }
}

star(7);
star(9);
star(15);
function checkGoldbach(n) {
  if (n % 2 == 1 || n < 4) {
    console.log(null);
  } else {
    for (var a = 2; a <= n / 2; a++) {
      var b = n - a;
      if (isPrime(a) && isPrime(b)) {
        console.log(String(a) + " " + String(b));
      }
    }
  }
}

function isPrime(n) {
  if (n <= 1) {
    return false;
  } else {
    for (var i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
  }

  return true;
}

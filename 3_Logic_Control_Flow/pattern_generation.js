function generatePattern(n) {
  var num = "";
  for (var i = 1; i <= n; i++) {
    num += String(i);
    console.log(num + "*".repeat(n - i));
  }
}

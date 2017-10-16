// Write a function that takes any two version numbers in this format and compares them with the result of this comparison showing
// whether the first is less than, equal to, or greater than the second version:

function compareVersions(version1, version2) {
  var version1Arr = version1.split('.').map(function(n) { return parseInt(n, 10) });
  var version2Arr = version2.split('.').map(function(n) { return parseInt(n, 10) });

  var checkVersion1 = version1Arr.every(function(n) { return typeof n === 'number' && !isNaN(n) });
  var checkVersion2 = version2Arr.every(function(n) { return typeof n === 'number' && !isNaN(n) });

  if (!checkVersion1 || !checkVersion2) { return null; }

  var versionLength = version1Arr.length > version2Arr.length ? version1Arr.length : version2Arr.length;
  var v1;
  var v2;

  for (var i = 0; i < versionLength; i++) {
    v1 = version1Arr[i] || 0;
    v2 = version2Arr[i] || 0;

    if (v1 > v2) {
      return 1;
    } else if (v1 < v2) {
      return -1;
    }
  }
  return 0;
}



console.log(compareVersions('1', '1'));          // 0
console.log(compareVersions('1.1', '1.0'));      // 1
console.log(compareVersions('2.3.4', '2.3.5'));  // -1
console.log(compareVersions('1.a', '1'));        // null
console.log(compareVersions('.1', '1'));         // null
console.log(compareVersions('1.', '2'));         // null
console.log(compareVersions('1..0', '2.0'));     // null
console.log(compareVersions('1.0', '1.0.0'));    // 0
console.log(compareVersions('1.0.0', '1.1'));    // -1
console.log(compareVersions('1.0', '1.0.5'));    // -1

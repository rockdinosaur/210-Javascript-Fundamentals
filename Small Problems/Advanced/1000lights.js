// 1000 Lights

function lightsOn(n) {
  var switches = {};
  for (var i = 1; i <= n; i++) {
    switches[i] = 'off';
  }

  for (var j = 1; j <= n; j++) {
    Object.keys(switches).forEach(function(key) {
      if (key % j === 0) {
        if (switches[key] === 'off') {
          switches[key] = 'on';
        } else {
          switches[key] = 'off';
        }
      }
    });
  }
  
  return Object.keys(switches).filter(function(light) {
    return switches[light] === 'on';
  }).map(function(light) {
    return parseInt(light, 10);
  });

}

lightsOn(5);
lightsOn(100);
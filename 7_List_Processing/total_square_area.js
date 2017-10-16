// Write a Function named totalArea that takes an Array of rectangles as an argument. 
// The Function should return the total area covered by all the rectangles.

function totalArea(rectangles) {
  return rectangles.reduce(function(area, rectangle) {
    return area + rectangle[0] * rectangle[1];
  }, 0);
}

var rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

totalArea(rectangles); // 141

// Now, write a second Function named totalSquareArea. This Function should calculate the total area of a set of rectangles, just like totalArea.
// However, it should only include squares in its calculations: it should ignore rectangles that aren't square.

function totalSquareArea(rectangles) {
  return rectangles.reduce(function(area, rectangle) {
    if (rectangle[0] === rectangle[1]) {
      return area + rectangle[0] * rectangle[1];
    } else {
      return area;
    }
  }, 0);
}

var rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

totalSquareArea(rectangles); // 121

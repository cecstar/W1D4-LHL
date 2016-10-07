//Implement your own version of the built-in array map function.
//Yours will take in two arguments. The first will be an array to map and the second will be a callback function.
//The function will return a new array based on the results of the callback function.


function myMap(arrToMap, callback) {
  var arrayCopy = [];

  arrToMap.forEach(function(item) {
    var transformedArr = callback(item)
    arrayCopy.push(transformedArr);
  })
 return arrayCopy;
};

var myArray = myMap(["ground", "control", "to", "major", "tom"], (elm) => { return elm.length });
console.log(myArray)
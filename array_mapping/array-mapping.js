//Complete the following code for the assertion to pass.
//The result should be an array of numbers corresponding to the x-y pairs provided in the input array
//(ie: calculate z given x and y).



var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
var result = input.map(function(currentVal){
  // console.log("current val")
  // console.log(currentVal);
  // console.log("index");
  // console.log(_index);
  // console.log("arr" + arr);
  return Math.sqrt(Math.pow(currentVal.x, 2) + Math.pow(currentVal.y, 2));
});

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);
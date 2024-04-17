// JavaScript Sorting  Arrays
// The sort() method sorts an array alphabetically:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const order = fruits.sort(); // ->  [ 'Apple', 'Banana', 'Mango', 'Orange' ]
console.log(order);

// THE COMPARE FUNCTION
// The purpose of the compare function is to define an alternative sort order.
// The compare function should return a negative, zero, or positive value, depending on the arguments:
// function(a, b){return a - b}
// When the sort() function compares two values, it sends the values to the compare function,
// and sorts the values according to the returned (negative, zero, positive) value.
// If the result is negative, a is sorted before b.
// If the result is positive, b is sorted before a.
// If the result is 0, no changes are done with the sort order of the two values.
// Examples :
const points1 = [40, 100, 1, 5, 25, 10];
const upwards = points1.sort(function (a, b) {
  return a - b;
}); // -> [1,5,10,25,40,100]
const points2 = [40, 100, 1, 5, 25, 10];
const downwards = points2.sort(function (a, b) {
  return b - a;
}); // -> [100,40,25,10,5,1]
console.log(upwards);
console.log(downwards);

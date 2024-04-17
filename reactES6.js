// Spread Operator
//The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array
//or object into another array or object.
// The spread operator is often used in combination with destructuring.

// Example
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];
console.log(numbersCombined);

// Assign the first and second items from numbers to variables and put the rest in an array:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [one, two, ...rest] = numbers;
console.log(numbers);

// Lấy các giá trị trong mảng để max-min :v
const num = [1, 2, 3, 4];
const max = Math.max(...num);
const min = Math.min(...num);
console.log(max);
console.log(min)

// Combining objects
const myVehicle = {
  brand: "Ford",
  model: "Mustang",
  color: "red",
};

const updateMyVehicle = {
  type: "car",
  year: 2021,
  color: "yellow",
};
// Lấy giá trị ở sau nếu trùng key
const myUpdatedVehicle = { ...myVehicle, ...updateMyVehicle };
console.log(myUpdatedVehicle);

// Use spread operator to combine these arrays
const arrayOne = ["a", "b", "c"];
const arrayTwo = [1, 2, 3];
const arraysCombined = [...arrayOne, ...arrayTwo];
// -> ['a','b','c',1,2,3]
console.log(arraysCombined);

const number = [
  Math.floor(Math.random()),
  Math.floor(Math.random())
]
const oppositeArray = number.map((value) => 1-value)
const newArray = [...number,...oppositeArray]
console.log(newArray)

// Destructuring makes it easy to extract only what is needed.
// 1.Destructuring Arrays
const vehicles = ["mustang", "f-150", "expedition"];

// old way
// const car = vehicles[0];
// const truck = vehicles[1];
// const suv = vehicles[2];
// new way
const [car, truck, suv] = vehicles;
// console.log(car) -> mustang
// console.log(truck) -> f-150
// console.log(suv) -> expedition

// If we only want the car and suv we can simply leave out the truck but keep the comma:
// const [car,, suv] = vehicles;

// Destructuring comes in handy when a function returns an array:
function calculate(a, b) {
  const add = a + b;
  const subtract = a - b;
  const multiply = a * b;
  const divide = a / b;

  return [add, subtract, multiply, divide];
}
console.log(calculate(7, 4));

// Ternary Operator
// The ternary operator is a simplified conditional operator like if / else.
// Syntax : Condition ? (True) : (False)


// Flattening a nested array 
// concat()
let data = [[1, 2], [3, 4], [5, 6]];
let flattenedData = data.reduce((acc, curr) => acc.concat(curr), []);
console.log(flattenedData);
// flat()
const array  = [ [3, 4, 5],
  [2, 5, 3],
  [4, 5, 6]
]
console.log(array.flat())

// splice() :  thêm phần tử (hoặc mảng) vào mảng theo index.
const arrayA = [1,2,3,4,5]
const arrayB = [6,7,8]
arrayA.splice(3,0,...arrayB)
console.log(arrayA)
const input = [
  { id: "a", name: "Amy" },
  { id: "b", name: "Blanche" },
  { id: "c", name: "Claude" },
];
const map = input.reduce((t, v) => {
  const { id } = v;
  t[id] = v;
  return t;
}, {});
console.log(map);

const array = [true, false, 0, 1, {}, [], "hi", ""]; // -> [true,1,'hi']
const output = array.filter((value) => {
  if (value) {
    if (typeof value == "object") {
      return false;
    }
    return true;
  }
});
console.log(output);

const user = [
  { id: 1, first: "Jon" },
  { id: 2, first: "Joe" },
  { id: 3, first: "Moe" },
];
const managers = { manager: 1, employees: [2, 3] };

const answer = user.reduce((prevValue, curUser) => {
  if (curUser.id == 1) return prevValue;
  return {
    ...prevValue,
    employees: prevValue.employees.map((value) => {
      if (value == curUser.id) {
        return curUser;
      } else return value;
    }),
  };
}, managers);
console.log(answer);

// Bài toán : tìm phần giao nhau giữa các tập bợp
const arrayofnumbers = [
  [5, 10, 15, 20],
  [15, 88, 1, 5, 7],
  [1, 10, 15, 5, 20],
]; // -> [5,15]

// Cách 1
function reduce(array, callback, initialValue) {
  let accumulator = initialValue;
  for (let i = 1; i < array.length; i++) {
    accumulator = callback(accumulator, array[i]);
  }
  return accumulator;
}
function comparison(arr1, arr2) {
  let output = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        output.push(arr1[i]);
      }
    }
  }
  return output;
}
function intersection(listOfArrays) {
  let newArray = [];
  newArray = reduce(listOfArrays, comparison, listOfArrays[0]);
  return newArray;
}
console.log(intersection(arrayofnumbers));

// Cách 2
const findDuplicate = arrayofnumbers.reduce((prevValue, currValue) => {
  const findNewDuplicate = prevValue.filter((value) =>
    currValue.includes(value)
  );
  return findNewDuplicate;
}, arrayofnumbers[0]);
console.log(findDuplicate);

const products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 300 },
];
const maxPrice = products.filter(
  (value) => value.price == Math.max(...products.map((cost) => cost.price))
);
const minPrice = products.filter(
  (value) => value.price == Math.min(...products.map((cost) => cost.price))
);
  console.log(maxPrice)
//   console.log(minPrice)
const expensiveGadgets = products.filter(
  (value) => value.price == Math.max(...products.map((cost) => cost.price))
)[0].name;
const cheapGadgets = products.filter(
  (value) => value.price == Math.min(...products.map((cost) => cost.price))
)[0].name;
// console.log(expensiveGadgets)
// console.log(cheapGadgets)




const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 22 },
];
const nameOfOldestPerson = people.filter( (value) => 
    value.age == Math.max(...people.map((person) => person.age))
)[0].name
const nameOfYoungestPerson = people.filter( (value) => 
    value.age == Math.min(...people.map((person) => person.age))
)[0].name
// console.log(nameOfOldestPerson)
// console.log(nameOfYoungestPerson)


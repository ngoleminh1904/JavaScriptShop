const products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 300 },
];
const totalPrice = products.reduce(
  (total, product) => total + product.price,
  0
);
console.log(totalPrice);
const sumPrice = products
  .map((value) => value.price)
  .reduce((sum, cur) => sum + cur, 0);
console.log(sumPrice);

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 22 },
];
const oldestPerson = people.filter((value) => value.age > 27);
console.log(oldestPerson);

const students = [
  { name: "Alice", grade: "A" },
  { name: "Bob", grade: "B" },
  { name: "Charlie", grade: "A" },
];
const gradeA = students.filter((value) => value.grade == "A");
const gradeB = students.filter((value) => value.grade == "B");
const rearrangeStudents = students.reduce(() => {
  return {
    A: gradeA,
    B: gradeB,
  };
});
console.log(rearrangeStudents);

const books = [
  { title: "JavaScript Book", pages: 400 },
  { title: "React Book", pages: 300 },
  { title: "Node.js Book", pages: 250 },
];
// const bookWithMostPage = books.filter((value) => value.pages == Math.max(...books.map(paper => paper.pages)))
const bookWithMostPage = books.reduce((total, book) => {
  return book.pages < total.pages ? total : book;
}, books[0]);
console.log(bookWithMostPage);

const transactions = [
  { category: "Groceries", amount: 50 },
  { category: "Electronics", amount: 100 },
  { category: "Groceries", amount: 30 },
  { category: "Electronics", amount: 150 },
];
const totalGroceries = transactions
  .filter((value) => value.category === "Groceries")
  .reduce((total, value) => total.amount + value.amount);
const totalElectronics = transactions
  .filter((value) => value.category === "Electronics")
  .reduce((total, value) => total.amount + value.amount);
console.log({
  Groceries: totalGroceries,
  Electronics: totalElectronics,
});

// const hihi = (transactions) => {
//   return transactions.reduce((Newid,current) => {
//     Newid[current.category] = current.amount
//     return Newid
//   },{})
// }
// console.log(hihi(transactions))

// const hehu = student.includes(newStudent)
// console.log(hehu)
const student = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
];
let newStudent = { name: "Alice", age: 25 };
const checkValue = (array, parameter) => {
  for (let i = 0; i <= array.length - 1; i++) {
    if (array[i].name == parameter.name && array[i].age == parameter.age) {
      return true;
    } else {
      return false;
    }
  }
};
console.log(checkValue(student, newStudent));

const classmate = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 22 },
];
const filterStudent = classmate.filter((value) => value.name !== 'Bob')
console.log(filterStudent)

const hihi = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 22 }
  ];
const lmao = (array) => {
  for ( let i = 0; i<= array.length -1; i++ ) {
    if ( array[i].name === 'Bob') {
      array[i].age = 31
    }
  }
  return array
}
console.log(lmao(hihi))

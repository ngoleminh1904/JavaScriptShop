const arr = new Array(100000).fill(Math.random());
console.time("for");
for (let i = 0; i < arr.length; i++) {}
console.timeEnd("for");

console.time("forEach");
arr.forEach(() => "");
console.timeEnd("forEach");

console.time("for of");
for (let i in arr) {
}
console.timeEnd("for of");

console.time("for in");
for (let i in arr) {
}
console.timeEnd("for in");
console.time("while");
let i = 0;
while (i < arr.length) {
  i++;
}
console.timeEnd("while");

console.time("do while");
let j = 0;
do {
  j++;
} while (j < arr.length);
console.timeEnd("do while");

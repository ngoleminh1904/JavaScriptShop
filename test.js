const checkPrime = (num) => {
  if (num < 2) {
    console.log("");
  }
  let dem = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      dem++;
    }
  }
  if (dem == 2) {
    return true;
  }
  if (dem !== 2) {
    return false;
  }
};
const primeFactors = (num) => {
  let primeArray = [];
  for (let i = 2; i <= num; i++) {
    if (num % i == 0 && checkPrime(i) == true) {
      primeArray.push(i);
      num /= i;
    }
  }
  console.log(primeArray);
};

const factorialFunction = (number) => {
  let k = 1;
  for (let i = 1; i <= number; i++) {
    k *= i;
  }
  return k;
};
primeFactors(factorialFunction(10));

function filterUniqueElements(arr) {
  let uniqueArray = arr.slice();
  for (let i = 0; i < uniqueArray.length; i++) {
    for (let j = i + 1; j < uniqueArray.length; j++) {
      if (uniqueArray[i] === uniqueArray[j]) {
        uniqueArray.splice(j, 1);
        j--;
      }
    }
  }
  return uniqueArray;
}

let array = [1, 2, 3, 4, 4, 5, 6, 6];
let result = filterUniqueElements(array);
console.log(result); // Output: [1, 2, 3, 4, 5, 6]

const users = [
  { id: 2, name: "hi", status: false },
  { id: 3, name: "hu", status: false },
];
const heheid = 2
const heheName = 'hoha'
const selectedUser = users.filter((value) => value.id == heheid)[0]
selectedUser.status = true
selectedUser.name = heheName
console.log(selectedUser)
users[0]=selectedUser
console.log(users)
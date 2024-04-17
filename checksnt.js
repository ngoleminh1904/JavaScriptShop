let arr = [2, 3, 4, 7, 8, 9, 1, 6];
const evenNumber = (array) => {
  let dem = 0;
  for (let i = 0; i <= array.length - 1; i++) {
    if (array[i] % 2 == 0) {
      dem++;
    }
  }
};
evenNumber(arr);

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
// checkPrime(11)
const primeNumbers = (array) => {
  let dem = 0;
  let string = "";
  for (let i = 0; i <= array.length - 1; i++) {
    let count = 0;
    for (let k = 1; k <= array[i]; k++) {
      if (array[i] % k == 0) {
        count++;
      }
    }
    if (count == 2) {
      if (string !== "") {
        string = string + "," + `${array[i]}`;
      } else {
        string = string + `${array[i]}`;
      }
      dem++;
    }
  }
  console.log("The prime numbers are " + string);
  console.log(`The numbers of prime numbers is ${dem}`);
};
primeNumbers(arr);

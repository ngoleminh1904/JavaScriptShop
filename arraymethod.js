//map : .map() method được dùng khi bạn muốn thao tác trên 1 mảng
// và muốn trả về 1 mảng các giá trị thay đổi dựa trên giá trị của mảng đầu vào.
let numbers1 = [1, 2, 3];
let Newnumbers = numbers1.map((numbers) => numbers + 1);
console.log(Newnumbers);

let fruits = ["APPLE", "BANANA", "ORANGE", "AVOCADO"];
let Smallfruits = fruits.map((fruits) => fruits.toLowerCase());
console.log(Smallfruits);

let nums = [2, 3, 4];
let powernums = nums.map((nums) => nums * nums);
console.log(powernums);

//filter : Với .filter(), hàm này được dùng để tạo ra 1 tập con của tập truyền vào,
// chỉ những phần tử thỏa mãn điều kiện mới được đưa vào tập con

let numbers2 = [1, 2, 3, 4, 5, 6];
let evennumbers = numbers2.filter((numbers) => numbers % 2 == 0);
console.log(evennumbers);
let oddnumbers = numbers2.filter((numbers) => numbers % 2 == 1);
console.log(oddnumbers);

let names = ["Lisa", "Jennie", "Rose", "Jisoo", "Jimin", "Suri", "Mirage"];
let longnames = names.filter((names) => names.length == 5);
console.log(longnames);
let shortnames = names.filter((names) => names.length == 4);
console.log(shortnames);
let supernames = names.filter((names) => names.length == 6);
console.log(supernames);

//reduce : Hàm này chấp nhận 1 giá trị khởi điểm của output,
//sau đó thì sẽ lặp từng phần tử theo 1 công thức (tương tự như .map()),
//rồi cộng dồn giá trị vào output.
// Lưu ý : trả về 1 giá trị duy nhất.
//reduce() yêu cầu tham số truyền vào là 1 hàm callback
//(có 2 tham số: giá trị tích lũy được (accumulator) và giá trị của phần tử hiện tại (current value)),
//tham số thứ 2 là giá trị khởi điểm của output (có hoặc không, nếu không thì mặc định giá trị là 0).

const numbers = [10, 15, 20, 54, 60, 79, 81, 100];
let sum = numbers.reduce((result, item) => result + item);
console.log("Tong cua day la", sum);
let evennumbers1 = numbers.filter((numbers) => numbers % 2 == 0);
const sumEven = (evennumbers) => {
  return evennumbers.reduce((result, item) => result + item);
};
console.log("Tong cac so chan trong day la", sumEven(evennumbers1));
let oddnumbers2 = numbers.filter((numbers) => numbers % 2 == 1);
const sumOdd = (oddnumbers) => {
  return oddnumbers.reduce((result, item) => result + item);
};
console.log("Tong cac so le trong day la", sumOdd(oddnumbers2));

let totaleven = numbers.reduce(function (totaleven, currentvalue) {
  if (currentvalue % 2 == 0) {
    return totaleven + currentvalue;
  } else {
    return totaleven;
  }
});
console.log("Tong cac so chan trong day (reduce) la", totaleven);

let totalodd = numbers.reduce(function (totalodd, currentvalue) {
  if (currentvalue % 2 == 1) {
    return totalodd + currentvalue;
  } else {
    return totalodd;
  }
});
console.log("Tong cac so le trong day (reduce) la", totalodd);

function greatestNumber(numbers) {
  return numbers.reduce((max, current) => {
    if (current > max) {
      return current;
    }
    return max;
  }, numbers[0]);
}
let maxNum = greatestNumber(numbers);
console.log("So lon nhat trong day la", maxNum);

function smallestNumber(numbers) {
  return numbers.reduce((min, current) => {
    if (min > current) {
      return current;
    }
    return min;
  }, numbers[0]);
}
let minNum = smallestNumber(numbers);
console.log("So nho nhat trong day la", minNum);

let princessName = ["Adrienne", "Amelia", "Aurora", "Alice"];
const findTheLongestName = (princessName) => {
  if (!Array.isArray(princessName) || princessName.length == 0) return null;
  return princessName.reduce((Thelongestname, currentname) => {
    if (Thelongestname.length < currentname.length) {
      return currentname;
    }
    return Thelongestname;
  }, princessName[0]);
};
console.log("Ten cong chua dai nhat la", findTheLongestName(princessName));

let transformersList = [
  { id: "Transformers1", value: "Optimus Prime" },
  { id: "Transformers2", value: "BumbleBee" },
  { id: "Transformers3", value: "Mirage" },
];
const transformersRiseofthebeast = (transformersList) => {
  return transformersList.reduce((Newid, current) => {
    Newid[current.id] = current.value;
    return Newid;
  }, {});
};
console.log(transformersRiseofthebeast(transformersList));

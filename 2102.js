// //Bài 4: Viết một hàm nhận vào một chuỗi và trả về chuỗi đảo ngược. (Ex: 'Hello' => 'olleH')
// function reverseString(string) {
//     let newString = "";
//     for ( let i = string.length-1 ; i >=0 ; i-- ) {
//         newString = newString + string[i]
//     }
//     return newString
// }
// console.log(reverseString("Hello"))

// //Bài 5: Viết một hàm nhận vào một số nguyên dương và trả về true nếu số đó là số hoàn hảo, ngược lại trả về false. Một số hoàn hảo là số mà tổng các ước của nó (không kể chính nó) bằng chính nó.
// function perfectNumber(number) {
//     let total = 0;
//     let flag = false;
//     for ( let i = 0; i < number ; i++ ) {
//         if ( number % i == 0 ) {
//             total +=i
//         }
//     }
//     if ( total == number && number!=0) {
//         flag = true;
//     }
//     return flag;
// }
// console.log(perfectNumber(12))

// // Bài 6: Viết một hàm nhận vào một số nguyên dương và trả về true nếu số đó là số đối xứng, ngược lại trả về false
// function isPalindrome(n) {
//     let originalNumber = n
//     let reversedNumber = 0;
//     while ( n > 0) {
//         let digit  = n % 10;
//         reversedNumber = ( reversedNumber * 10) + digit;
//         n = (n-digit)/10
//     }
//     return reversedNumber === originalNumber
// }
// console.log(isPalindrome(12321))

// //Bài 3: Viết một hàm nhận vào một số nguyên dương n và in ra một tam giác vuông có kích thước n.
// function kidProblem(hihi) {
//     for ( let i = 1; i <= hihi ; i++) {
//         let star = ''
//         for ( let j = 1 ; j <= i ;j++) {
//             star+='*'
//         }
//         console.log(star)
//     }
// }
// kidProblem(5)

// // ve tam giac can
// function isoscelesTriangle(m) {
//     for ( let i = 0; i <= m ; i++ ) {
//         let line = '';
//         for ( let space = 0 ; space <= m-i ; space ++) {
//             line+=' '
//         }
//         for ( let star = 0; star <= 2*i ; star ++) {
//             line+='*'
//         }
//         console.log(line)
//     }
// }
// isoscelesTriangle(5)

// // Bai 1: Cho một mảng các số nguyên nums và một số nguyên target, trả về chỉ số của hai số sao cho tổng của chúng bằng target
// let nums = [3,2,4]
// let target = 6;
// let arr = []
// const findSum = (nums, target) => {
//     for ( let i = 0; i<= nums.length-1 ; i++) {
//         for ( let j = 1; j<=nums.length-1 ; j++) {
//             if (nums[i] + nums[j] == target && i < j) {
//                 arr.push(i,j)
//             }
//         }
//     }
//     return arr
// }
// console.log(findSum(nums,target))

// Bai 2: Cộng 2 số
// let l1 = [2,4,3]
// let l2 = [5,6,4]
// let newSum = parseInt(l1.reverse("").join("")) + parseInt(l2.reverse("").join(""))
// let output = []
// for ( let i = newSum.toString().length-1 ; i >=0 ; i-- ) {
//     output.push(parseInt(newSum.toString()[i]))
// }
// console.log(output)

// Bai 3: Cho một chuỗi s, tìm độ dài dài nhất chuỗi con không lặp lại ký tự
let s = "pwwkew";
let string = "";
let len = 0;
let mimi = [];
let longest;
for (let i = 0; i <= s.length - 1; i++) {
  let count = 0;
  for (let j = 0; j <= string.length - 1; j++) {
    for (let k = 1; k <= string.length - 1; k++) {
      if (string[j] === string[k]) {
        count++;
      }
    }
  }
  string = string.slice(count - 1, string.length);
  if (string.includes(s[i]) === false) {
    string += s[i];
    console.log(string);
    mimi.push(string.length);
  } else {
    string = string.slice(1, string.length);
    string += s[i];
    console.log(string);
    mimi.push(string.length);
  }
}
c = Math.max(...mimi);
console.log(c);

let list = [1, 4, 3, 5, 9, 6, 8];
for (let i = 0; i <= list.length - 1; i++) {
  for (let j = i +1; j <= list.length - 1; j++) {
    if (list[i] > list[j]) {
      let tan = list[i];
      list[i] = list[j];
      list[j] = tan;
    }
  }
}

console.log(list[list.length-2]);

let max = list[0]
let secondMax
for ( let i = 0 ; i <= list.length-1 ; i++ ) { 
    if ( list[i] > max ) {
        secondMax = max
        max = list[i]
    } else if ( max > list[i] && max !== list[i]) {
        secondMax = list[i]
    }
}
console.log(secondMax)

let hahe = [1,[2,3],4,[5,[6,7]]]
const huhe = hahe.reduce((acc,curValue) => {
    return acc.concat(curValue)
},[])
console.log(huhe)   
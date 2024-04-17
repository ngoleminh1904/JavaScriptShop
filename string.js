// Thứ 7 04/02/2023

// CAC PHUONG THUC XU LY VOI KIEU DU LIEU STRING

let str = "Pho Thong Nang Khieu";
//
console.log(str.split(""));
//toLowerCase : chuyen tat ca cac chu thanh chu in thuong
console.log(str.toLowerCase(""));
//to UpperCase : chuyen tat ca cac ki tu thanh chu in hoa
console.log(str.toUpperCase(""));
// -startsWith() -> True/False
console.log(str.startsWith("P")) 
// -endsWith() ->True/False
console.log(str.endsWith("K"));
//includes() : kiem tra trong chuoi co ki tu do hay ko -> tra ve True/False
console.log(str.includes("N"));
//indexOf() : kiem tra vi tri cua ki tu dau tien duoc tim thay
console.log(str.indexOf("P"));
//lastIndexOf() : kiem tra vi tri cua ki tu cuoi cung duoc tim thay
console.log(str.lastIndexOf("T"));
//replace() : thay the
console.log(str.replace("Pho Thong Nang Khieu","PTNK"));
//repeat() : lap lai
console.log(str.repeat(5));
//slice(start,end) : tach chuoi ki tu
console.log(str.slice(0,3));
//trim() : loai bo khoang cach 2 ben
//trimStart() : loai bo khoang cach ben trai
//trimEnd() : loai bo khoang cach ben phai
//charAt() : lay ra ki tu o vi tri Index
console.log(str.charAt(2));
//subStr(startIndex,length : so ki tu muon lay_
console.log(str.substr(0,3));
//subString(startIndex,endIndex)
console.log(str.substring(0,2));
//split() : tach ki tu
console.log(str.split(""));
//reverse() : dao thu tu ki tu
//join() : ghep ki tu
const palindrome = ['racecar' , 'level' , 'madam', 'coding' , 'software']
const findPalindrome = palindrome.filter((value) => value.split('').reverse('').join('') === value)
console.log(findPalindrome)

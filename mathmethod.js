// Thứ 7 04/02/23

// CAC PHUONG THUC XU LY VOI KIEU DU LIEU NUMBER

// kieu du lieu number : gom so nguyen va so thap phan
let a1 = 5;
let b1 = 3.5;
// chuyen tu string sang number
let c1 = parseInt(a1);
let d1 = parseFloat(b1);
console.log(typeof c1);
console.log(typeof d1);
// gia tri tuyet doi : Math.abs
let e = -5;
console.log(Math.abs(e));
// lam tron xuong : Math.floor()
// lam tron len : Math.ceil()
// lam tron gan nhat : Math.round() : 4.0->4.4 : 4 , 4.5->4.9 :5
let f = 4.44444;
console.log(Math.round(f));
// rut gon phan thap phan : toFixed()
console.log(f.toFixed(2));
// Math.random() : lay so ngau nhien trong khoang tu 0 den 1
console.log(Math.random());
// Lay ngau nhien 1 so nguyen : Math.cell(Math.random()) hoặc Math.floor(Math.random())
console.log(Math.ceil(Math.random() * 10));
// Cuc tri : Math.max() , Math.min()
console.log(Math.max(1, 2, 3, 4));
console.log(Math.min(1, 2, 3, 4));
// Luy thua : Math.pow(cơ số ,số mũ )
console.log(Math.pow(3, 2));

// Boolean : kieu du lieu Logic : True / False
// Undefined : khai bao nhung ko gan gia tri
let g;
console.log(g);
// null : trong rong
// NaN : Not a Number

// Thứ 7 11/02/23

// Toán tử so sánh và câu điều kiện If else
// Hàm Number
let a = 1;
let b = String(a);
console.log(a);
console.log(typeof a);
console.log(typeof b);
// so sanh tuong doi : so sanh gia tri ==
// so sanh tuyet doi: so sanh gia tri va kieu du lieu ===
let c = 1;
let d = "1";
console.log(c == d);
console.log(c === d);
// khac ve gia tri : !=
// khac ve gia tri va kieu du lieu : !==
console.log(c != d);
console.log(c !== d);
// cau dieu kien if else
// if ( dieukien ) { caulenh1 } else { caulenh2 }
// if ( dieukien 1 ) {caulenh1} else if ( dieukien 2 ) {caulenh2}  ... else if ( dieu kien n ) {caulenhn} else {caulenh}

// Thứ 7 18/02/23

// Cau lenh Switch Case.
// break; : khong xet cac cau lenh o sau.
// default : tra ve gia tri mac dinh.

// Ternary Operator ( Cau dieu kien rut gon )
// Condition ? console.log('True') : console.log('False')

// Function : Ham : dung de gom code co cung chuc nang lai voi nhau
// function functionName(parameter)

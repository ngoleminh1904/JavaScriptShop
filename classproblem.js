const classroom = [
  {
    name: "Adrienne",
    gender: "M",
    rPoint: 41,
    wPoint: 212,
    mPoint: 637,
  },
  {
    name: "Amelia",
    gender: "M",
    rPoint: 233,
    wPoint: 122,
    mPoint: 548,
  },
  {
    name: "Aurora",
    gender: "F",
    rPoint: 148,
    wPoint: 250,
    mPoint: 333,
  },
  { name: "Alice", gender: "M", rPoint: 332, wPoint: 261, mPoint: 184 },
  { name: "Brooks", gender: "F", rPoint: 51, wPoint: 32, mPoint: 666 },
  {
    name: "Rachel",
    gender: "F",
    rPoint: 293,
    wPoint: 230,
    mPoint: 521,
  },
  {
    name: "Edwards",
    gender: "F",
    rPoint: 101,
    wPoint: 252,
    mPoint: 476,
  },
  {
    name: "Christopher",
    gender: "M",
    rPoint: 167,
    wPoint: 87,
    mPoint: 268,
  },
  { name: "Perez", gender: "M", rPoint: 241, wPoint: 100, mPoint: 472 },
  {
    name: "Thomas",
    gender: "M",
    rPoint: 151,
    wPoint: 156,
    mPoint: 676,
  },
  { name: "Baker", gender: "F", rPoint: 129, wPoint: 47, mPoint: 210 },
  { name: "Sara", gender: "F", rPoint: 121, wPoint: 120, mPoint: 37 },
  { name: "Moore", gender: "M", rPoint: 125, wPoint: 289, mPoint: 524 },
  { name: "Chris", gender: "M", rPoint: 73, wPoint: 348, mPoint: 582 },
  {
    name: "Bailey",
    gender: "F",
    rPoint: 298,
    wPoint: 203,
    mPoint: 468,
  },
  { name: "Roger", gender: "M", rPoint: 275, wPoint: 6, mPoint: 261 },
  {
    name: "Johnson",
    gender: "M",
    rPoint: 175,
    wPoint: 43,
    mPoint: 630,
  },
  {
    name: "Marilyn",
    gender: "M",
    rPoint: 283,
    wPoint: 262,
    mPoint: 291,
  },
  {
    name: "Thompson",
    gender: "M",
    rPoint: 208,
    wPoint: 48,
    mPoint: 586,
  },
  {
    name: "Anthony",
    gender: "F",
    rPoint: 277,
    wPoint: 170,
    mPoint: 308,
  },
  { name: "Evans", gender: "F", rPoint: 257, wPoint: 44, mPoint: 263 },
  { name: "Julie", gender: "F", rPoint: 318, wPoint: 172, mPoint: 52 },
  { name: "Hall", gender: "M", rPoint: 213, wPoint: 312, mPoint: 480 },
  { name: "Paula", gender: "F", rPoint: 171, wPoint: 265, mPoint: 66 },
  {
    name: "Phillips",
    gender: "F",
    rPoint: 185,
    wPoint: 41,
    mPoint: 251,
  },
  { name: "Annie", gender: "F", rPoint: 73, wPoint: 43, mPoint: 275 },
  {
    name: "Hernandez",
    gender: "M",
    rPoint: 190,
    wPoint: 158,
    mPoint: 37,
  },
  { name: "Dorothy", gender: "M", rPoint: 100, wPoint: 4, mPoint: 603 },
  { name: "Murphy", gender: "F", rPoint: 13, wPoint: 12, mPoint: 538 },
  { name: "Alice", gender: "F", rPoint: 170, wPoint: 294, mPoint: 608 },
  { name: "Howard", gender: "M", rPoint: 21, wPoint: 179, mPoint: 361 },
];
//Viết hàm trả ra một mảng bao gồm các phần tử là tên của các học sinh nữ
const female = classroom.filter(student => student.gender === 'F').map(student => student.name)
console.log(female)
//Viết hàm trả ra một mảng bao gồm các phần tử là tên của các học sinh nam
const male = classroom.filter(student => student.gender == 'M').map(student => student.name)
console.log(male)
// Viết hàm trả ra một mảng bao gồm các phần tử là thông tin của các học sinh nữ
const femaleinformation = classroom.filter(student => student.gender == 'F')
console.log(femaleinformation)
// Viết hàm trả ra một mảng bao gồm các phần tử là thông tin của các học sinh nam
const maleinformation = classroom.filter(student => student.gender === 'M')
console.log(maleinformation)

// Viết hàm trả ra một mảng bao gồm các phần tử là điểm SAT và tên của các học sinh
const outRank = classroom.map( function (classroom) {
  return {
    name : classroom.name,
    gender : classroom.gender,
    Points : classroom.mPoint+classroom.rPoint+classroom.wPoint,
  }
})
console.log(outRank)

// Viết hàm trả ra thông tin bao gồm tên và điểm số SAT cao nhất của học sinh
 const bestStudent = classroom.reduce((totalPoint , currentStudent) => {
  const tongdiem = totalPoint.rPoint+totalPoint.mPoint+totalPoint.wPoint;
  const diemhientai = currentStudent.mPoint+currentStudent.rPoint+currentStudent.wPoint;
  return tongdiem > diemhientai ?  totalPoint: currentStudent
 })
 console.log(bestStudent)

 // Viết hàm trả ra thông tin bao gồm tên và điểm số SAT thấp nhất của học sinh nam
 const maleStudent = classroom.filter((male) => male.gender == 'M')
 const findSmallestMalePoint = maleStudent.reduce((totalPoint , currentSt ) => {
  const all = totalPoint.mPoint+totalPoint.rPoint+totalPoint.wPoint;
  const curpoint  = currentSt.mPoint+currentSt.wPoint+currentSt.rPoint;
  return all < curpoint ? totalPoint : currentSt
 })
 console.log(findSmallestMalePoint)
 
 // Viết hàm trả ra thông tin bao gồm tên và điểm số SAT cao nhất của học sinh nam
 const largestMaleScore = classroom.filter((male) => male.gender == 'M')
 const findLargestMalePoint = largestMaleScore.reduce((total , current) => {
  const all = total.mPoint+total.rPoint+total.wPoint
  const curpoint = current.mPoint+current.rPoint+current.wPoint
  return all > curpoint ? total: current
 })
 console.log(findLargestMalePoint)

 // Viết hàm trả ra thông tin bao gồm tên và điểm số SAT cao nhất của học sinh nữ
 const largestFemaleScore = classroom.filter((male) => male.gender == 'F')
 const findLargestFemalePoint = largestFemaleScore.reduce((total , current) => {
  const all = total.mPoint+total.rPoint+total.wPoint
  const curpoint = current.mPoint+current.rPoint+current.wPoint
  return all > curpoint ? total: current
 })
 console.log(findLargestFemalePoint)

 // Viết hàm trả ra thông tin bao gồm tên và điểm số SAT cao nhất của học sinh nữ
 const smallestFemaleScore = classroom.filter((male) => male.gender == 'F')
 const findSmallestFemalePoint = smallestFemaleScore.reduce((total , current) => {
  const all = total.mPoint+total.rPoint+total.wPoint
  const curpoint = current.mPoint+current.rPoint+current.wPoint
  return all < curpoint ? total: current
 })
 console.log(findSmallestFemalePoint)




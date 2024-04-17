const averageGrade = (physics, chemistry, biology, mathematics, computer) => {
  const averagePercentage =
    ((physics + chemistry + biology + mathematics + computer) / 50) * 100;
  let grade;
  if (averagePercentage >= 90) {
    grade = "Grade A";
  } else if (averagePercentage >= 80) {
    grade = "Grade B";
  } else if (averagePercentage >= 70) {
    grade = "Grade C";
  } else if (averagePercentage >= 60) {
    grade = "Grade D";
  } else if (averagePercentage >= 40) {
    grade = "Grade E";
  } else {
    grade = "Grade F";
  }
  console.log(`Ket qua : ${grade}`);
};
averageGrade(10, 10, 10, 10, 10);

const inOrder = (a, b, c, d) => {
  if (a <= b) {
    let temp;
    temp = a;
    a = b;
    b = temp;
  }
  if (b <= c) {
    let hihi;
    hihi = b;
    b = c;
    c = hihi;
  }
  if (a <= b) {
    let temp;
    temp = a;
    a = b;
    b = temp;
  }
  if (c <= d) {
    let huhu;
    huhu = c;
    c = d;
    d = huhu;
  }
  if (b <= c) {
    let hihi;
    hihi = b;
    b = c;
    c = hihi;
  }
  if (a <= b) {
    let temp;
    temp = a;
    a = b;
    b = temp;
  }
  console.log(a, b, c, d);
};
inOrder(1,6,3,9);

const countEven = (num) => {
  let string = "";
  let i = 2;
  while (i <= num) {
    if (i % 2 == 0) {
      if (string !== "") {
        string = string + "," + `${i}`;
      } else {
        string = string + `${i}`;
      }
    }
    i += 2;
  }
  console.log(string);
};
countEven(10);

const timesDouble = (num) => {
  let count = 0;
  while ( num % 2 == 0 && num != 0) {
    num /=2;
    count++
  }
  console.log(count)
}
timesDouble(8)

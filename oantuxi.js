let arr = ["kéo", "búa", "bao"];
let may1 = arr[Math.floor(Math.random() * 3)];
let may2 = arr[Math.floor(Math.random() * 3)];
console.log(`Máy 1 ra ${may1}`);
console.log(`Máy 2 ra ${may2}`);
let dem1 = 0
let dem2 = 0
while (true) {
  if (may1 === may2) {
    console.log("Hoa");
    break; // -> Khi nào hoà thì dừng 
  } else if (may1 == arr[0]) {
    if (may2 == arr[1]) {
      console.log("Máy 2 thắng");
      dem2++
    } else {
      console.log("Máy 1 thắng");
      dem1++
    }
  } else if (may1 == arr[1]) {
    if (may2 == arr[0]) {
      console.log("Máy 1 thắng");
      dem1 ++
    } else {
      console.log("Máy 2 thắng");
      dem2++
    }
  } else {
    if (may2 == arr[0]) {
      console.log("Máy 2 thắng");
      dem2++
    } else {
      console.log("Máy 1 thắng");
      dem1++
    }
  }
  may1 = arr[Math.floor(Math.random() * 3)];
  may2 = arr[Math.floor(Math.random() * 3)];
  console.log(`Máy 1 ra ${may1}`);
  console.log(`Máy 2 ra ${may2}`);
}
console.log(`Ti so la ${dem1} - ${dem2}`)

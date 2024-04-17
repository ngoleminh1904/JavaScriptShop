let arrayNumber = [11, 34, 25, 67, 45, 21, 53];
// SELECTION SORT

for (let i = 0; i <= arrayNumber.length - 1; i++) {
  let curValue = i;
  for (let j = i + 1; j <= arrayNumber.length - 1; j++) {
    if (arrayNumber[curValue] > arrayNumber[j]) {
      curValue = j;
    }
  }
  let temp = arrayNumber[i];
  arrayNumber[i] = arrayNumber[curValue];
  arrayNumber[curValue] = temp;
}
console.log(arrayNumber);

// QUICK SORT
const quickSort = (arr) => {

    if(arr.length < 2) return arr;
    
    // *** lấy phần tử cuối của 'arr' làm 'pivot'
    const pivotIndex = arr.length - 1;
    const pivot = arr[pivotIndex];

    const left = [];
    const right = [];
    
    let currentItem;
    // *** 'i < pivotIndex' => chúng ta sẽ không loop qua 'pivot' nữa
    for(let i = 0; i < pivotIndex; i++) {
        currentItem = arr[i];
        
        if(currentItem < pivot) {
            left.push(currentItem);
        } else {
            right.push(currentItem);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([100, 2, 5, 4, 7, 5, 6, 8, 0, 12, 34, 15]));
// *** => [0, 2, 4, 5, 5, 6, 7, 8, 12, 15, 34, 100]


// Find the second largest value in an array.
// let largest = array[0]
// let secondLargest;
// for (let i = 0; i <= array.length-1 ; i++) {
//     if ( array[i] > largest) {
//         secondLargest = largest;
//         largest = array[i]
//     } else if (array[i] < largest && largest !== secondLargest) {
//         secondLargest = array[i]
//     }
// }
// console.log(secondLargest)

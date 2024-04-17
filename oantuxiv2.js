// let array = []
// const n=10
// for ( i=0; i<n ; i++) {
//     array.push(Math.floor(Math.random()*100))
// }
// for ( i=0 ; i<n ; i++) {
//     console.log(array[i])
// }


let arr = ['keo','bua','bao']
let may1 = arr[Math.floor(Math.random()*3)]
let may2 = arr[Math.floor(Math.random()*3)]
console.log(may1)
console.log(may2)
if (may1 === may2) {
    console.log('Hoa')
} else if (may1 == arr[0]) {
    if (may2 == arr[1]){
        console.log('may2 win')
    } else {
        console.log('may1 win')
    }
} else if (may1 == arr[1]) {
    if (may2 == arr[0]){
        console.log('may1 win')
    } else {
        console.log('may2 win')
    }
} else  {
    if (may2 == arr[0]){
        console.log('may2 win')
    } else {
        console.log('may1 win')
    }
} 

function random(number) {
    return Math.floor(Math.random()*number)
}
// console.log(random(5))

// function levelUp (ratio) {
//     let level = 1
//     if ( (Math.floor(Math.random()*100)) < ratio ) {
//         return level + 1
//     } else {
//         return level - 1
//     }
// }
// console.log(levelUp(20))

const initialRandom = (num) => {
    let array = []
    const n = num
    for ( i=0 ; i < n ; i++ ) {
        array.push(random(num))
    }    
    return array
}
array=initialRandom(40)
const findFirst = (array,item) => {
    for ( let i=0 ; i< array.length ; i++) {
        if (array[i] > item ) return array[i]
    }
}
console.log(findFirst(array,20))

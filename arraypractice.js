const arrayWithDuplicates = [1,2,2,3,4,4,5,2]
let newArray = arrayWithDuplicates.reduce((accumulator,curValue) => {
    if (!accumulator.includes(curValue) ) {
        accumulator.push(curValue)
    }
    return accumulator
},[])
// console.log(newArray)






const removeDuplicates = (array) => {
    for ( let i = 0 ; i <= array.length - 1 ; i++ ) {
        for ( let k = i + 1 ; k <= array.length - 1 ; k++ ) {
            if ( array[i] == array[k] ) {
                array.splice(k,1)
                k--;
            }
        }
    }
    return array
}
const hihi = removeDuplicates(arrayWithDuplicates)
console.log(hihi)


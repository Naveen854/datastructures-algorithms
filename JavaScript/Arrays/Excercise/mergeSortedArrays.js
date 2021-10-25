//Merge Sorted Arrays
// Array1 = [0,3,4,31]
// array2 = [4,6,30]

function mergeSortedArrays1(array1, array2){
    if(array1.length === 0){
        return array2
    }
    if(array2.length == 0){
        return array1
    }

    const mergedArray = []
    let i = 0
    let j = 0

    while (i+j < array1.length+array2.length){
        // console.log(array1[i], array2[j])
        if(array2[j]===undefined || array1[i] < array2[j]){
            mergedArray.push(array1[i])
            i++
        }
        else{
            mergedArray.push(array2[j])
            j++
        }
        // console.log('Merged Array',mergedArray)
    }
    return mergedArray
}


// New Way
function mergeSortedArrays2(array1,array2){
    const mergedArray = [...array1,...array2]
    const sortFunction = (item1, item2)=> item1-item2
    return mergedArray.sort(sortFunction)
}
 
console.log(mergeSortedArrays1([0,3,4,31],[4,6,30]))
console.log(mergeSortedArrays1([4,6,30],[0,3,4,31]))
console.log(mergeSortedArrays1([],[3,4,5]))
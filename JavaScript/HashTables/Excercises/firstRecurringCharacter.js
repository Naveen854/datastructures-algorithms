// Google Interview
// Given an array  = [2,5,1,2,3,5,1,2,4]
// it should return 2

// Given an array  = [2,1,1,2,3,5,1,2,4]
// it should return 1

// Given an array  = [2,3,4,5]
// it should return undefined

// HashTables - optimal (O(n))
function firstRecurringCharacter1(arr){
    // Using Objects
    let numObject = {}
    for(let i=0; i<arr.length; i++){
        if(numObject[arr[i]]!==undefined) return arr[i]
        numObject[arr[i]] = i+1
    }

    // Using Map
    // let numMap = new Map()
    // for(let i=0; i<arr.length; i++){
    //     if(numMap.has(arr[i])) return arr[i]
    //     numMap.set(arr[i],arr[i])
    // }
    return undefined
}

// BruteForce - Not optimal O(n^2)
// some test cases are not valid
function firstRecurringCharacter2(arr){
    for(let i=0; i<arr.length; i++){
        for(let j=0; j< arr.length; j++){
            if(i!=j && arr[i] === arr[j]) return arr[i]
        }
    }
    return undefined
}


// Optimal case
// console.log('Optimal Approach')
// console.log(firstRecurringCharacter1([2,5,1,2,3,5,1,2,4]))
// console.log(firstRecurringCharacter1([2,1,1,2,3,5,1,2,4]))
// console.log(firstRecurringCharacter1([2,3,4,5]))

//BruteForce
console.log('BruteForce Approach')
console.log(firstRecurringCharacter2([2,5,1,2,3,5,1,2,4]))
console.log(firstRecurringCharacter2([2,1,1,2,3,5,1,2,4]))
console.log(firstRecurringCharacter2([2,3,4,5]))
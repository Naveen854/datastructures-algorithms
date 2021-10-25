// Given two arrays, create a function that let's user
// to know (true/false) whether these two arrays contain any common
// items

// input - two arrays
// output - true or false

// BrtuteForce Approach
// function havetCommonItems(array1, array2){
//     for(let i=0; i<array1.length;i++){
//         for(j=i+1; j<array2.length;j++){
//             if(array1[i] === array2[j]) return true
//         }
//     }
//     return false
// }

// // O(N*M) || O(1)
// function solution(array1, array2){
//     let len1 = array1.length
//     let len2 = array2.length
//     if(len1 > len2){
//         return havetCommonItems(array1,array2)
//     }else{
//         return havetCommonItems(array2, array1)
//     }
// }

// The Good One
// O(N+M)T || O(N) S
function haveCommonItem(array1, array2){
    let trackedNumbers = {}
    
    for(i=0;i<array1.length;i++){
        trackedNumbers[array1[i]] = i
    }

    for(i=0;i<array2.length;i++){
        if(array2[i] in trackedNumbers) return true
    }
    return false
}

console.log(haveCommonItem(['a','b','c','x'],['z','y','i']))
console.log(haveCommonItem(['a','b','c','x'],['z','y','x']))
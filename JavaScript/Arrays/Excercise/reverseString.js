// Create a function that reverse a string

const str = "Hi, i am Naveen"
// functional Method
// function reverse1(str){
//     if(!str || str.length < 2 || typeof str !== "string"){
//         return 'It is not a string'
//     }
//     let result = ''
//     const totoalItems = str.length -1
//     for (let i=totoalItems; i>=0; i--){
//         result = result+(str[i])
//     }
//     return result
// }

// function reverse2(str){
//     return str.split('').reverse().join('')
// }

// let result = reverse2("I am Naveen")
// console.log(result)

let result = [...str].reverse().join("")
console.log(result)
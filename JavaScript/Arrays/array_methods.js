let chars = ['a', 'b', 'c', 'd']
//indices 0 , 1 , 2, 3, 4
//memory locations 100, 104, 108, 112
// 4 items * 4 shells in storage = 16 bytes of storage(in 32 bit system)
console.log('Array of Charecters', chars)
console.log('\nElement at index 2', chars[2]) // 100+2*4 = 100+8

// arr.push(elements) - array method allows us to add items to end of array (O(1) operation)
//        returns new length of the array
console.log('\nAdding element "e"')
console.log('New Length : ',chars.push('e'))

console.log('\nAdding Muliple Elements')
console.log('New Length : ',chars.push('f','g','h'))


// arr.pop() - array method allows us to remove one item to end of array (O(1) operation)
//       and returns the element that is removed, if the array is empty returns undefined 
//       and array doesnt change

console.log('\nRemoving last element')
console.log('Removed Element', chars.pop())

//Add items to beggining of arry:
// arr.unshift(elements) - array method allows us to add items to beginning of the array((O(n) operation))
// We can add multiple items to beginning of the array
console.log('\nAdding elements to beginning of array')
console.log('Adding element "X" to beginning of array,', `New Length: ${chars.unshift('x')}`)
// Initially array was like
// chars = ['a', 'b', 'c', 'd']
//indices 0 , 1 , 2, 3, 4
//memory locations 100, 104, 108, 112

// while adding 'x' item to beginning of array
// chars = ['x', a', 'b', 'c', 'd']
//   indices     0 , 1 , 2, 3, 4
// Now the inidices will be changed after adding items to the beginning
// chars = ['x', a', 'b', 'c', 'd']
//   indices 0 , 1 , 2, 3, 4, 5
// We looped through every item and reassigned the indexes

// Adding items to the middle of the array
// arr.splice - array method to removes elements from an array and, if necessary
//          inserts new elements in their place, returning the deleted elements.
console.log('\nAdding elements to middle of the array')
console.log('Adding element "l" at index 2',chars.splice(2,0,'l'))

// Copy of an array
// arr.slice(startIndex, endIndex) - array method to return copy of an array
//  if there is no endIndex then it copies from startIndex to till the end of array
console.log('Copying from Index 2', chars.slice(2))
console.log('Copying from Index 2 to 6',chars.slice(2, 12))
// if endIndex is provided more than len(array)-1 then it returns all array of all items from startIndex

// Adding Arrays
// arr.concat(items) - array method to add arrays and returns new array
console.log('Adding array ["3","4"]', chars.concat(["3","4"]))
console.log('Adding elements 5, 6',chars.concat(5,6))

// Finding Index
// arr.indexOf(item, from) – looks for item starting from index from, 
//                           and returns the index where it was found, otherwise -1.
// arr.lastIndexOf(item, from) – same, but looks for from right to left.
//                               returns the index where it was found, otherwise -1.
//arr.indexOf(), arr.lastIndexOf methods use === comparison
console.log('\nIndex of item "g" is ', chars.indexOf('g'))
console.log('\nLast Index of item "a" is ', chars.indexOf('a'))

// If the element includes in the array
// arr.includes(item, from) – looks for item starting from index from, returns true if found.
//                            includes is that it correctly handles NaN
console.log('\nIs element "a" includes = ', chars.includes('a'))

// Finding element and getting it
// arr.find(function) - it takes a function that returns item or undefined based on function returns
// function return value :  is true is returned, item is returned and iteration is stopped
//                        for falsy scenario returns undefined
console.log('\nFind element b')
let result = chars.find(item => item === "b");
console.log('Found', result)
// Finding Element Index for reference data types like Object
// arr.findIndex(function) - method is essentially the same like arr.find(),
//                           but it returns the index where the element was found instead 
//                           of the element itself and -1 is returned when nothing is found.
console.log('\nFind Index of element g')
result = chars.findIndex(item => item=== "g")
console.log('Index of "g" is ', result)

// Filter element - to get array of element of same value
// arr.filter(function) - if true item is pushed to varaialble and the iteration continues
//          returns empty array if nothing found

console.log('Filter elements with value "a"')
result = chars.filter(item=>item==="a")
console.log('result ', result)

// Transform an array
// arr.map(function) - method is one of the most useful and often used.
// It calls the function for each element of the array and returns the array of results.

// Sorting Array
// arr.sort(function:optional for strings)- sorts the array in place, changing its element order.
//                                      The items are sorted as strings by default.
//                                      It also returns the sorted array, but the returned value is 
//                                      usually ignored as arr itself is modified.
// we can localeCompare to comapre strings
console.log("Sorting Array")
result = chars.sort((item1, item2)=> item1.localeCompare(item2))
console.log("Sorted Array ",result)

// Splitting Strins by given delimeter/ separator
// str.split(delim) -  It splits the string into an array by the given delimiter delim.
let myString = "I am Patra Naveen"

result = myString.split()
console.log('\nSplitting string Without any delimeter', result)
// It returns array of the string of length 1

result = myString.split(' ')
console.log('\nSplitting string With " " deimeter', result)

result = myString.split(';')
console.log('\nSplitting string With wrong delimeter', result)
// It returns array of the string of length 1

result = myString.split('')
console.log('\nSplitting string with \'\' delimeter', result)
// It returns array of each character in the string

// Joining array of strings into single string
// arr.join(glue) - does the reverse to split. It creates a string of arr items 
//                  joined by glue between them.

console.log('\nJoing all elements of previous result with \'\' is ', result.join(""))

// arr.reduce(function, initialValueOfAccumulator) - They are used to calculate a single value based 
//                                          on the array. if there is no initialValueOfAccumulator,
//                                          then reduce takes the first element of the array as the 
//                                          initial value and starts the iteration from the 2nd element
result = [1,2,3,4].reduce((accum,item)=> accum+item ,0)
console.log("Sum of elements of [1,2,3,4] using reduce is", result)

// To check if variable is of array type
// Array.isArray(varialbleName)
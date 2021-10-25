let user = {
    name:"Naveen Pathra",
    age:21,
    magic:true,
    scream: ()=> 'ahhhhh!',
}

console.log(user)
console.log(user.name)
user.spell = 'abraca dabra!'
console.log(user.spell)
console.log(user.scream())

// Object:
//      Only string is allowed to store as key
//      It maintains no insertion order

// In ES6 JavaScript has maps and sets
// Maps():
//      It allows you save any dataType as key
//      it maintains insertion order

// Sets():
//     It only saves keys but no values

// This is the kitchen sink lab

let myName = "Brian Hodgert"
const numberOfStates = 50
let result = 5 + 4

const sayHello = () => alert(`Hello World!`)
sayHello()

const checkAge = (username, age) => {
    if (age < 21) {
        alert(`Sorry ${username}, you arent old enough to view this page!`)
    }
}

checkAge('Charles', 21)
checkAge('Abby', 27)
checkAge('James', 18)
checkAge('John', 17)

const favVeg = ['carrots', 'peas', 'cauliflower', 'broccoli']
favVeg.forEach(veg => console.log(veg))

const pet = {
    name: 'Rocky',
    breed: 'cocker spaniel'
}

console.log(`My ${pet.breed} is named ${pet.name}`)

const members = [
    {
        name: "Jojo",
        age: 16
    },
    {
        name: "Dali",
        age: 43
    },
    {
        name: "Dunco",
        age: 21
    },
    {
        name: "Blitz",
        age: 31
    },
    {
        name: "Cubby",
        age: 20
    }
]

members.forEach(member => checkAge(member.name, member.age))

// for(let i=0; i<members.length; i++) {
//     const member = members[i];
//     checkAge(member.name, member.age)
// }

// let i=0;
// while(i<members.length){
//     let { name, age } = members[i]
//     checkAge( name, age )
//     i++
// }

const getLength = word => word.length;

let wordLength = getLength('Hello World')

// console.log(wordLength % 2)

if (wordLength % 2 === 0) {
    console.log('The world is nice and even!')
} else { console.log('The world is an odd place!') }


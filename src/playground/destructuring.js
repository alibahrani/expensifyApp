// //Object Destructuring

// const person = {
//     name:'Ali',
//     age:26,
//     location: {
//         city: 'Mississauga',
//         temp: 19
//     }
// };

// const {name = 'Anonymous',age, location} = person;

// const { city, temp: temprature } = location

// if (city && temprature ) {
//     console.log(`The temp is ${temprature} in ${city}`);
// }

// console.log(`${name} is ${age}.`);


// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan holiday',
//     publisher: {
//         // name: 'Penguin'
//     }
// };

// const {name: publisherName = 'Self published'} = book.publisher;
// console.log(publisherName);

//Array Destructuring

const address = ['6141 quartermain cres', 'Mississauga', 'l5s9v1'];

const [street, city, zipcode] = address;
console.log(`You are in ${street} ${city}.`)

const item =['Coffee (hot)', '$2.00','$3.00','$4.00']

const [product, small, medium, large] = item;
console.log(`A medium ${product} costs ${medium}`);
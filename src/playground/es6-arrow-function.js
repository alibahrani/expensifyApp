// const square = function (x) {
//     return x * x;
// };


// const squareArrow = (x) => {
//     return x * x;
// };

// //Arrow function expression sentax 

// const squareArrow2 = (x) => (x *x);
// console.log(squareArrow2(4));

//use arrow functions 

//getFirstName('Mike smith')

// create reqular arrow function 
const getFirstName = (fullName) => {
    if(fullName) {
        var firstName = fullName.split(' ')[0];

    }
    return firstName
}
// create arrow function using shorthand syntax
const getfirstNameShort = (fullName) => (
    fullName.split(' ')[0]
)


console.log(getfirstNameShort('Ali Al-Bahrani'));
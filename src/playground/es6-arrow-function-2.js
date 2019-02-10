// argument object =no longer bound with arrow functions 

const add = (a, b) => {
    return a + b;
}

console.log(add(5,6));

//this keyword - no longer bound

const user = {
    name: "Ali",
    cities: [
        "Baghdad",
        "Amman",
        "Dubai"
    ],

    printPlacesLived ()  {
        console.log(this.name);
        this.cities.map((city) => {
            console.log(this.name +' has lived in ' + city);
        })
    }
};

user.printPlacesLived();

const multiplier = {
    // numbres - array of numbers
    numbers: [1, 2, 3, 5],
    newArray: [],
    //multiplyby - single number
    multiplyBy(number) {
        this.numbers.map((x) => {
            result = number * x; 
            console.log(result)
        })
    },
    //multiply - return a new arrray where the numbe have been multiplied
    multiply(number) {
        this.numbers.map((x) => {
        let result = (x * number);
        newArray.add(result);    
        })
        return newArray;
    }
};


console.log(multiplier.multiply(4));
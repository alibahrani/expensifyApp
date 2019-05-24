const person = {
    name:'Ali',
    age:26,
    location: {
        city: 'Mississauga',
        temp: 19
    }
};

const {name = 'Anonymous',age, location} = person;

const { city, temp: temprature } = location

if (city && temprature ) {
    console.log(`The temp is ${temprature} in ${city}`);
}

console.log(`${name} is ${age}.`);


const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan holiday',
    publisher: {
        // name: 'Penguin'
    }
};

const {name: publisherName = 'Self published'} = book.publisher;
console.log(publisherName);
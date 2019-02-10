var nameVar  = 'Ali'; 
console.log('nameVar', nameVar);

let nameLet = 'Hussian';
nameLet = 'Jafar'
console.log('nameLet', nameLet);


const nameConst = 'Frank'; 
console.log('nameConst', nameConst);


function getPetName() {
    var petName = 'hal';
    return petName;
}


var fullName = "Ali Al-Bahrani"
if(fullName) {
    var firstName = fullName.split(' ')[0];
    console.log(firstName)
}
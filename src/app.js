/**
 * Common practice is to add each component to its own file when you are running webpack 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';


ReactDOM.render(<AppRouter />, document.getElementById('app'));



// //Class Plugins 

// class OldSyntax {
//     constructor() {
//         this.name ='Ali';

//     }
//     getGreeting() {
//         return `Hi. my name is ${this.name}`
//     }
// }

// const oldSyntax = new OldSyntax();
// console.log(oldSyntax.getGreeting)


// class NewSyntax {
//     name= 'Ali Bahrani';
//     getGreeting = () => {
//         return `Hi. my name is ${this.name}`

//     }
// }

// const newSyntax = new NewSyntax();
// console.log(newSyntax)

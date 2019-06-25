/**
 * Common practice is to add each component to its own file when you are running webpack 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters'
import getVisibleExpeses from './selectors/expenses';
const store = configureStore();

store.dispatch(addExpense({
    description: "Water bill",
    amount: 3500,
    createdAt: 0,
    note: "paying water bill"
}));
store.dispatch(addExpense({
    description: "Gas bill",
    amount: 2500,
    createdAt: 4500,
    note: "paying gas bill"
}));
store.dispatch(addExpense({
    description: "Rent",
    amount: 190000,
    createdAt: 1000,
    note: "paying water bill"
}))


const state = store.getState(); 
const visible = getVisibleExpeses(state.expenses,state.filters);

console.log(visible)

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));



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

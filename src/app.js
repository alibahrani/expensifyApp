/**
 * Common practice is to add each component to its own file when you are running webpack 
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
    <div>
        this is from my dashboard component
    </div>
);

const AddExpensePage = () => (
    <div>
        this is from my Add Expense component
    </div>
);

const EditExpensePage = () => (
    <div>
        This is from Edit page
    </div>
);

const HelpPage = () => (
    <div>
        This is from Help Page
    </div>
);
const NotFoundPage = () => (
    <div>
        404 - <Link to="/">Go home</Link>
    </div>
);

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact>Home</NavLink>
        <NavLink to="/Help" activeClassName="is-active">Help</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create</NavLink>
        <NavLink to="/edit" activeClassName="is-active">Edit</NavLink>
        </header>
);

const routes = (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" exact component={ExpenseDashboardPage} />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />

            </Switch>
        </div>

    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));



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

import React from 'react';

import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import ExpenseDashboard from '../components/ExpenseDashBoard';
import NotFoundPage from '../components/NotFoundPage';
import HelpPage from '../components/HelpPage';
import EditExpensePage from '../components/EditExpensePage';
import AddExpensePage from '../components/AddExpensePage';
import Header from '../components/Header';
//create 6 new files for the 6 componenets 
//setup imports , components , default export 
//import them 


const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Header />
        <Switch>
            <Route path="/" exact component={ExpenseDashboard} />
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit/:id" component={EditExpensePage} />
            <Route path="/help" component={HelpPage} />
            <Route component={NotFoundPage} />
        </Switch>
    </div>

</BrowserRouter>
);

export default AppRouter;
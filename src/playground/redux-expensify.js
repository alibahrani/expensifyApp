import { createStore, combineReducers } from 'redux';

//add_expense
const addExpense = () => ({
    type: 'ADD_EXPENSE',
    expense: {

    }
});
//remove_expenses
//edit_expenses

//settextfilter
//sort_by_date
//sortByAmount
//set_startDate
//set_endDate

//Expenses Reducer 

const expesesReducerDefaultState = [];
const expensesReducer = (state = expesesReducerDefaultState, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined, 
    endDate: undefined
};
//Filters Reducer
const FilterReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type) {
        default: 
        return state; 

    }
}
//store creation 

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: FilterReducer
    })
);

console.log(store.getState());

const demoState = {
    expenses: [{
        id: 'asldfjsdf',
        description: 'january rend',
        note: 'This was final payment for that address',
        amount: 545000,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
}
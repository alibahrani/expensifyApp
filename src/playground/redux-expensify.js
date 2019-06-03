import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';
//add_expense
const addExpense = (
    {description = '',
     note='',
     amount= 0,
     createdAt = 0 } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount, 
        createdAt
    }
});


//remove_expenses
const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});
//edit_expenses
const editExpese = (id, updates) => ({
    type:'EDIT_EXPENSE',
    id,
    updates
})
//settextfilter
//sort_by_date
//sortByAmount
//set_startDate
//set_endDate

//Expenses Reducer 

const expesesReducerDefaultState = [];
const expensesReducer = (state = expesesReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) =>{
                return id !==action.id;
            }
            );
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.id === action.id ) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                }else {
                    return expense
                };
            } );
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

store.subscribe(() => {
    console.log(store.getState());
})


const expenseOne = store.dispatch(addExpense({description: 'Rent', amount : 100 }));
const expenseTwo = store.dispatch(addExpense( {description: 'Coffee', amount: 1000}));

store.dispatch(editExpese(expenseTwo.expense.id, {amount : 500 }));
store.dispatch(removeExpense({id: expenseOne.expense.id }));

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


const user= {
    name:'jen',
    age: 24
}

console.log({
    ...user,
    location : 'Mississauga',
    age: 35
});
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
const setTextFilter = (text = '') => ({
    type:'SET_TEXT',
    text
});
//sort_by_date
const sortByDate = () => ({
    type: "SORT_BY_DATE",
    sortBy: "date"
})
//sortByAmount
const sortByAmount = () => ({
    type:"SORT_BY_AMOUNT",
    sortBy : "amount"
});

//set_startDate
const setStartDate = (startDate = undefined) => ({
    type:"SET_START_DATE",
    startDate
});
//set_endDate
const setEndDate = (endDate = undefined ) => ({
    type:"SET_END_DATE",
    endDate
});
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
                    };
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
        case 'SET_TEXT':
            return {
                ...state,
                text: action.text
            };
        case "SORT_BY_AMOUNT":
            return {
                ...state,
                sortBy: action.sortBy
            };
        case "SORT_BY_DATE":
            return {
                ...state,
                sortBy: action.sortBy
            };
        case "SET_START_DATE":
            return {
                ...state,
                startDate : action.startDate
            };
        case "SET_END_DATE":
            return {
                ...state, 
                endDate: action.endDate
            }
        default: 
        return state; 

    }
}


// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;

        //figure out if expenses.description has the text variable string inside of it
        //includes
        const descriptiontoLowerCase = expense.description.toLowerCase();
        const textToLowerCase = text.toLowerCase();
        descriptiontoLowerCase.includes(textToLowerCase);
        const textMatch = descriptiontoLowerCase.includes(textToLowerCase);

        
        //convert both strings to lower case 
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1;
        }else if(sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });
}

//store creation 

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: FilterReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

    console.log(visibleExpenses);
})


const expenseOne = store.dispatch(addExpense({description: 'Rent', amount : 100, createdAt: -21000 }));
const expenseTwo = store.dispatch(addExpense( {description: 'Coffee', amount: 1000, createdAt: -1000 }));

// store.dispatch(editExpese(expenseTwo.expense.id, {amount : 500 }));
// store.dispatch(removeExpense({id: expenseOne.expense.id }));

// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter(''));
store.dispatch(sortByAmount()); //amount
// store.dispatch(sortByDate()) //date
// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(999))


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
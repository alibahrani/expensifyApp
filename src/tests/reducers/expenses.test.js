import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('Should set default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
});

test('should remove expense by id ', ()=> {
    const action = {
        type: "REMOVE_EXPENSE",
        id: expenses[0].id
    }

    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1],expenses[2]]);
});

test('should not remove expenses if not found', () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: '-1'
    }

    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

// Should add Expense 
test('Should add Expense', ()=> {
    const expense = {
        id:'4',
        description: "Added by test",
        createdAt: moment(0).add(6,'days').valueOf(),
        note:"Something to add to note"

    }
    const action = {
        type: "ADD_EXPENSE",
        expense

    }
    const state = expensesReducer(expenses, action);
    
    expect(state).toEqual([...expenses, expense]);

});
//Should endit an Expense

test('Should edit expense', () => {
    const modifiedDescription = 'Some changes'    
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[2].id,
        updates: {
            description: modifiedDescription
        }
    }
    console.log(action.expense);
    const state = expensesReducer(expenses,action);
    console.log(state);

    expect(state[2].description).toEqual(modifiedDescription);
});

//Should not edit expense if expense not found
test('Should Not edit expense', () => {
    const modifiedDescription = 'Some changes'    
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            description: modifiedDescription
        }
    }
    console.log(action.expense);
    const state = expensesReducer(expenses,action);
    console.log(state);

    expect(state).toEqual(expenses);
});
import { addExpense, editExpese, removeExpense } from '../../actions/expenses';

test('Should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });

    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
});

test('should setup edit expense action object', () => {
    const action = editExpese('abc123', { note: 'something has been updated' });

    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'abc123',
        updates: {
            note: "something has been updated"

        }

    });
});

test('Should setup add expense action object with default values', () =>
{
    const expenseData = {
        description : '',
        amount : 0,
        createdAt: 0,
        note: ''
    };

    const action = addExpense();
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('Should setup add expense action object with correct values', () =>
{
    const expenseData = {
        description : 'Rent',
        amount : 109500,
        createdAt: 1000,
        note: 'This was last months rent'
    };

    const action = addExpense(expenseData);
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});
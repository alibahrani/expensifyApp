import selectExpenses from '../../selectors/expenses';
import moment from 'moment';
const expenses = [{
    id: '1',
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: 0
},
{
    id: '2',
    description: 'Rent',
    note: '',
    amount: 109500,
    createdAt: moment(0).subtract(4,'days').valueOf()
},
{
    id: '3',
    description: 'credit card',
    note: '',
    amount: 4500,
    createdAt: moment(0).add(4,'days').valueOf()
}]
test('Should filter by text value', () => {
    const filters = {
        text: 'e',
        sortBy:'date',
        startDate: undefined, 
        endDate: undefined
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2],expenses[1]]);
});

test('Should filter by startDate', () => {
    const filter = {
        text: '',
        sortBy: 'date', 
        startDate: moment(0),
        endDate: undefined
    }

    const result = selectExpenses(expenses, filter); 
    expect(result).toEqual([expenses[2],expenses[0]])

});

//Should filter by endDate 
test('should filter by endDate', () => {
    const filter = {
        text: '',
        sortBy: 'date', 
        startDate: undefined, 
        endDate: moment(0).add(2,'days')
    }

    const result = selectExpenses(expenses, filter); 
    expect(result).toEqual([expenses[0],expenses[1]])
});

//Should sort by date 

test('Should sort by date', () => {
    const filter = { 
        text: '',
        sortBy: 'date', 
        startDate: undefined, 
        endDate: undefined
    }

    const result = selectExpenses(expenses, filter); 
    expect(result).toEqual([expenses[2],expenses[0], expenses[1]])
})
//Should sort by amount 
test('Should sort by amount', () => {
    const filter = { 
        text: '',
        sortBy: 'amount', 
        startDate: undefined, 
        endDate: undefined
    };

    const result = selectExpenses(expenses, filter);
    expect(result).toEqual([expenses[1],expenses[2],expenses[0]])
});
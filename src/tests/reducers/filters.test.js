import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter values', () => {
    const state = filtersReducer(undefined,{type: '@@INIT'});
    expect(state).toEqual({
        text:'',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
});

test('Should set sortBy to amount', () => {
    const state = filtersReducer(undefined,{type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount')
});
test('Should sort by date', () => {
    const currentState = {
        text: '',
        startDate: undefined, 
        endDate: undefined, 
        sortBy: 'amount'

    };

    const action = {type:'SORT_BY_DATE'};
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date')
});

//Should set Text fileter
test('Should set textFilter', () => {
    const action = {type: 'SET_TEXT', text: 'Something' };
    const state = filtersReducer(undefined, action)

    expect(state.text).toBe('Something')
});
//Should set startDate filter 
test('Should set startDate  Filter', () => {
    const action = {type: 'SET_START_DATE', startDate: moment().startOf('month') };
    const state = filtersReducer(undefined, action)

    expect(state.startDate).toEqual(moment().startOf('month'))
});
//Should Set endDate filter 
test('Should set endDate  Filter', () => {
    const action = {type: 'SET_END_DATE', endDate: moment().endOf('month') };
    const state = filtersReducer(undefined, action)

    expect(state.endDate).toEqual(moment().endOf('month'))
});
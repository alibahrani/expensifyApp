import React from 'react'; 
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses'
test('Should render ExpenseForm correctly', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test('Should render expenseForm with expense data', () => {
    const wrapper = shallow(<ExpenseForm  expense = {expenses[2]} />);
    expect(wrapper).toMatchSnapshot();
});

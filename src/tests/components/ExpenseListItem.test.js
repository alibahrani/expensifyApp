import { shallow } from 'enzyme';
import React from 'react';
import expenses from '../fixtures/expenses';

import  ExpenseListItem  from '../../components/ExpenseListItem'; 

test('Should render ExpenseListItem ', () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[0]} />);
    expect(wrapper).toMatchSnapshot();
});
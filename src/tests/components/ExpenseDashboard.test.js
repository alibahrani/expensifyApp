import { shallow } from 'enzyme';
import React from 'react';

import ExpenseDashboard from '../../components/ExpenseDashBoard';

test('Should render Expense Dashboard Page', () => {
    const wrapper = shallow(<ExpenseDashboard />); 
    expect(wrapper).toMatchSnapshot(); 
    
})
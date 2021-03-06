import React from 'react';
import {connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {editExpese , removeExpense } from '../actions/expenses';
const EditExpensePage = (props) => {
    return (
        <div>
            <ExpenseForm 
                expense = {props.expense}
                onSubmit={(expense) => {
                    //Dispatch the action to edit the expense
                    props.dispatch(editExpese(props.expense.id, expense));
                    //Redirect to the dashboard
                    props.history.push('/');
                    console.log('updated', expense)
                }}
            />
            {props.expense && <button onClick={() => {
                props.dispatch(removeExpense({id: props.expense.id}));
                props.history.push("/");
            }}>Remove</button>}
        
        </div>
    );
};

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense)=> (expense.id === props.match.params.id))
    };
};

export default connect(mapStateToProps) (EditExpensePage);
import { createStore }  from 'redux';

//Action Generators 

const incrementCount = ({incrementBy = 1 } = {}) => (
    {
        type: 'INCREMENT',
        incrementBy: incrementBy
    }
    );

const decrementCount = ({decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const resetCount = () => ({
    type: 'RESET',
    count: 0
    }

);

//Reducers
// 1. Reducers are pure functions
//2. never change state or action 
// 

const counterReducer = (state = { count: 0 }, action) => {

    switch(action.type) {
        case 'INCREMENT':
        return {
            count: state.count + action.incrementBy 
        };
        case 'DECREMENT':
        return {
            count: state.count - action.decrementBy 
        };
        case 'RESET': 
        return {
            count: action.count
        }
        default: 
            return state;
    }
    
};

const store = createStore(counterReducer);


const unsubscribe = store.subscribe(() => {
    console.log(store.getState());

});

//Actions - object that get sent to the store


//increment the count
// store.dispatch({
//         type: 'INCREMENT',
//         incrementBy : 5
// });

store.dispatch(incrementCount({incrementBy : 5}))
store.dispatch(incrementCount());
store.dispatch(incrementCount());
    
store.dispatch(decrementCount({decrementBy : 10}));
//reset
store.dispatch(resetCount())

import {createStore} from "redux"
// la definition des actions : action = plain js object

export const INCREMENT_CONTER={type:"INCREMENT"}
export const DECREMENT_CONTER={type:"DECREMENT"}

// la definition de la fct reducer : pure function

const counterReducer=(counter={value:0} , action)=>{
    if(action.type==="INCREMENT"){
        return {...counter,value:counter.value+1};
    }
    else if(action.type==="DECREMENT"){
        return {...counter,value:counter.value-1};
    }
    else{
        return counter;
    }
};


const store = createStore(
    counterReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__ ()
);

export default store;
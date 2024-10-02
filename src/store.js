
import {combineReducers, createStore} from "redux";

const initialStore={
    mobile:null,
    fullName:"",
    balance:0
};

function accountReducer(state=initialStore,action){
    if(action.type==="deposit"){
        return {...state,balance:state.balance+ +action.payload};
    }

   else  if(action.type==="withdraw"){
        return {...state,balance:state.balance- +action.payload};
    }

    else if(action.type==="mobileUpdate"){
        return {...state,mobile:action.payload};
    }

    else if(action.type==="nameUpdate"){
        return {...state,fullName:action.payload};
    }
    else if(action.type==="reset"){
        return initialStore
    }

    else{
        return state
    }

}

function transactionReducer(state=[],action){
    switch(action.type){
        case "ADD":
            return [...state,{id:action.payload.id,amount:action.payload.amount,type:action.payload.type,date:action.payload.date}]
           default:
            return state 
    }
}

let rootReducer=combineReducers({
    account:accountReducer,
    transaction:transactionReducer
})






let store=createStore(rootReducer)
console.log(store.getState())

export default store;

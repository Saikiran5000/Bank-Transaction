
import {createStore} from "redux";

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
let store=createStore(accountReducer)
console.log(store.getState())

export default store;

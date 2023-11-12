import {combineReducers, createStore} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {accountReducer} from "./reducers/accountReducer";
import {customerReducer} from "./reducers/customerReducer";
import {accountTypes} from "./constants/accountTypes";
import {customerTypes} from "./constants/customerTypes";

import {depositToAccount, requestLoan, paymentToLoan, withdrawFromAccount} from "./actions/accountActions";


const rootReducer = combineReducers({
    account: accountReducer, customer: customerReducer
});


const store = createStore(rootReducer);

store.dispatch({type: accountTypes.ACCOUNT_DEPOSIT, payload: 500})

console.log('reactjs-redux-v1')
console.log(store.getState())

store.dispatch({type: accountTypes.ACCOUNT_WITHDRAW, payload: 125})

console.log(store.getState())

store.dispatch({
    type: accountTypes.LOAN_REQUEST, payload: {
        amount: 1000, purpose: "home repairs"
    }
});

store.dispatch({
    type: customerTypes.CREATE_CUSTOMER, payload: {
        fullName: "James Doe", nationalID: "1234567", createdAt: new Date().toISOString()
    }
})

console.log(store.getState())

store.dispatch({
    type: accountTypes.LOAN_PAYMENT, payload: {
        amount: 500, purpose: "home repairs"
    }
})

console.log(store.getState())

store.dispatch({
    type: accountTypes.LOAN_PAYMENT, payload: {
        amount: 800, purpose: "home repairs"
    }
})

console.log(store.getState())

store.dispatch({type: accountTypes.ACCOUNT_DEPOSIT, payload: 500})

console.log(store.getState())


store.dispatch(depositToAccount(300))

console.log(store.getState())
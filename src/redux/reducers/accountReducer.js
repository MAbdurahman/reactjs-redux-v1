import {accountTypes} from "../constants/accountTypes";


const accountInitialState = {
    balance: 0,
    loan: 0,
    loanPurpose: ""
}

function accountReducer( state = accountInitialState, action) {
    switch(action.type) {
        case accountTypes.ACCOUNT_WITHDRAW:
            return {
                ...state, balance: state.balance - action.payload
            }
        case accountTypes.ACCOUNT_DEPOSIT:
            return {
                ...state, balance: state.balance + action.payload
            }
        case accountTypes.LOAN_REQUEST:
            if (state.loan > 0) {
                return state;
            }
            return {
                ...state,
                loan: action.payload.amount,
                loanPurpose: action.payload.purpose,
                balance: state.balance + action.payload.amount,
            }
        case accountTypes.LOAN_PAYMENT:
            return {
                ...state,
                loan: 0,
                loanPurpose: "",
                balance: state.balance - state.loan,
            }
        default:
            return state;
    }
}
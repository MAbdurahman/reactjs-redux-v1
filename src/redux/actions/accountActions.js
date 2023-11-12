import {accountTypes} from "../constants/accountTypes";

export function depositToAccount(amount) {
    return {type: accountTypes.ACCOUNT_DEPOSIT, payload: amount};

}

export function withdrawFromAccount(amount) {
    return {type: accountTypes.ACCOUNT_WITHDRAW, payload: amount};
}

export function requestLoan(amount, purpose) {
    return {
        type: accountTypes.LOAN_REQUEST, payload: {amount, purpose}
    };
}

export function paymentToLoan(amount, purpose) {
    return {
        type: accountTypes.PAYMENT_TO_LOAN, payload: {
            amount, purpose
        }
    }
}
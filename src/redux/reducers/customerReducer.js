import {customerTypes} from "../constants/customerTypes";

const initialCustomerState = {
    fullName: "",
    nationalID: "",
    createdAt: ""
}

export function customerReducer (state = initialCustomerState, action) {
    switch(action.type) {
        case customerTypes.CREATE_CUSTOMER:
            return {
                ...state,
                fullName: action.payload.fullName,
                nationalID: action.payload.nationalID,
                createdAt: action.payload.createdAt,
            };
        case customerTypes.UPDATE_CUSTOMER:
            return {
                ...state, fullName: action.payload
            }
        default:
            return state;
    }
}
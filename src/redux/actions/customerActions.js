import {customerTypes} from "../constants/customerTypes";


export function createCustomer(fullName, nationalID) {
    return {type: customerTypes.CREATE_CUSTOMER, payload: {fullName, nationalID}}

}

export function updateCustomer(fullName) {
    return {type: customerTypes.UPDATE_CUSTOMER, payload: fullName}
}
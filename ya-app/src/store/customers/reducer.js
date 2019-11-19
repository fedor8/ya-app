import Immutable from 'seamless-immutable';
import * as types from './actionTypes';
import _ from 'lodash';

const initialState = Immutable({
    customersById: {},
    selectedCustomer: {}
});

export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        case types.CUSTOMERS_FETCHED:
            return state.merge({
                customersById: action.customersById
            });
        default:
            return state;
    }
}

export function getCustomersById(state) {
    return state.customers.customersById;
}

export function getCustomersIdArray(state) {
    return _.keys(state.customers.customersById);
}
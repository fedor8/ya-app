import _ from 'lodash';
import * as types from './actionTypes';
import customerService from '../../services/customerService';

export function fetchCustomers() {
    return async(dispatch, getState) => {
        try {
            const customersArray = await customerService.getAllCustomers();
            const customersById = _.keyBy(customersArray, (customer) => customer.id);
            dispatch({ type: types.CUSTOMERS_FETCHED, customersById });
        } catch (error) {
            console.error(error);
        }
    };
}

export function deleteCustomers() {
    return async(dispatch, getState) => {
        try {
            await customerService.deleteCustomers();
            dispatch({ type: types.CUSTOMERS_DELETED });
            await fetchCustomers()(dispatch, getState)();
        } catch (error) {
            console.error(error);
        }
    };
}

export function createCustomer(customer) {
    return async(dispatch, getState) => {
        try {
            await customerService.createCustomer(customer);
            dispatch({ type: types.CUSTOMER_CREATED, customer });
            await fetchCustomers()(dispatch, getState);
        } catch (error) {
            console.error(error);
        }
    };
}

export function updateSalary(customerId, salary) {
    return async(dispatch, getState) => {
        try {
            await customerService.updateSalary(customerId, salary);
            const updateData = {customerId: customerId, salary: salary};
            dispatch({ type: types.CUSTOMER_CREATED,  updateData});
            await fetchCustomers()(dispatch, getState);
        } catch (error) {
            console.error(error);
        }
    };
}
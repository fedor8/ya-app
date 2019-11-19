import _ from 'lodash';

const YA_DEMO_SERVICE_ENDPOINT = 'http://localhost:8002/demo-service/api';

class CustomerService {

    async createCustomer(customer) {
        const url = `${YA_DEMO_SERVICE_ENDPOINT}/customer/create`;
        const response = await fetch(url, {
            method: 'POST',
            mode: 'cors', // no-cors, cors, *same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrer: 'no-referrer',
            body: JSON.stringify(customer)
        });
        if (!response.ok) {
            throw new Error(`CustomerService create failed, HTTP status ${response.status}`);
        }
        return response.body;
    }

    async updateSalary(customerId, salary) {
        const url = `${YA_DEMO_SERVICE_ENDPOINT}/customer/${customerId}/update-salary?salary=${salary}`;
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                Authorization: 'Basic VVNFUjpVU0VS'
            }
        });
        if (!response.ok) {
            throw new Error(`CustomerService update salary failed, HTTP status ${response.status}`);
        }
        return response.body;
    }

    async deleteCustomers() {
        const url = `${YA_DEMO_SERVICE_ENDPOINT}/customer/`;
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                Authorization: 'Basic VVNFUjpVU0VS'
            }
        });
        if (!response.ok) {
            throw new Error(`CustomerService delete failed, HTTP status ${response.status}`);
        }
        return true;
    }

    async getAllCustomers() {
        const url = `${YA_DEMO_SERVICE_ENDPOINT}/customer/`;
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error(`CustomerService listAll failed, HTTP status ${response.status}`);
        }
        const data = await response.json();
        const sortedByName = _.orderBy(data, 'data.name', 'desc');
        return _.map(sortedByName, (customer) => {
            return {
                id: customer.id,
                name: customer.name,
                salary: {
                    amount: customer.salary.amount
                }
            }
        });
    }

}

export default new CustomerService();
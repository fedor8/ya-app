import React, { Component } from 'react';
import { connect } from 'react-redux';
import './CustomersScreen.css';
import * as customersActions from '../store/customers/actions';
import * as customersSelectors from '../store/customers/reducer';
import ListView from '../components/ListView';
import SalaryInput from '../components/SalaryInput';
import CustomerForm from '../components/CustomerForm';
import DeleteAllButton from "../components/DeleteAllButton";

class CustomersScreen extends Component {

    componentDidMount() {
        this.props.dispatch(customersActions.fetchCustomers());
        this.createCustomer = this.createCustomer.bind(this);
        this.updateSalary = this.updateSalary.bind(this);
        this.deleteCustomers = this.deleteCustomers.bind(this);
    }

    render() {
        if (!this.props.rowsById) return this.renderLoading();
        return (
            <div className="CustomersScreen">
                <CustomerForm onSave={this.createCustomer}/>
                <DeleteAllButton onClick={this.deleteCustomers}/>
                <ListView
                    rowsIdArray={this.props.rowsIdArray}
                    rowsById={this.props.rowsById}
                    renderRow={this.renderRow}
                    onSave={this.updateSalary}/>
            </div>
        );
    }

    renderLoading() {
        return (
            <p>Loading...</p>
        );
    }

    renderRow(row, onSave) {
        return (
            <div className="row">
                <h3 className="row__name">{row.name}</h3>
                <p className="row__salary">{row.salary.amount}</p>
                <SalaryInput id={row.id} salary={row.salary.amount} onSave={onSave}/>
            </div>
        )
    }

    createCustomer(name, salary){
        this.props.dispatch(customersActions.createCustomer({name: name, salary: {amount: salary}}));
    }

    updateSalary(customerId, salary){
        this.props.dispatch(customersActions.updateSalary(customerId, salary));
    }

    deleteCustomers(){
        this.props.dispatch(customersActions.deleteCustomers());
    }
}


function mapStateToProps(state) {
    return {
        rowsById: customersSelectors.getCustomersById(state),
        rowsIdArray: customersSelectors.getCustomersIdArray(state)
    };
}

export default connect(mapStateToProps)(CustomersScreen);
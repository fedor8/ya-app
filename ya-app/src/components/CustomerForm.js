import React, {Component} from 'react';
export default class CustomerForm extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {salary: '', name: ''};
    }

    render() {
        return (
            <div className="customer-form">
                <input className="customer-form__name-input"
                       type="text"
                       placeholder="Input name"
                       value={this.state.name}
                       onChange={(e)=>this.setState({name: e.target.value})}>
                </input>
                <input className="customer-form__salary-input"
                       type="number"
                       placeholder="Input salary"
                       value={this.state.salary}
                       onChange={(e)=>this.setState({salary: e.target.value})}>
                </input>
                <button className="salary-button" onClick={this.handleClick}>Создать</button>
            </div>
        );
    }

    handleClick() {
        this.props.onSave(this.state.name, this.state.salary);
        this.setState({salary: '', name: ''});
    }

}
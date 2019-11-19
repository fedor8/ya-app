import React, {Component} from 'react';

export default class SalaryInput extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {salary: props.salary};
    }

    render() {
        return (
            <div className="salary">
                <input className="salary-input"
                       type="number"
                       placeholder="Input salary"
                       value={this.state.salary}
                       onChange={(e)=>this.setState({salary: e.target.value})}>
                </input>
                <button className="salary-button" onClick={this.handleClick}>Обновить</button>
            </div>
        );
    }

    handleClick() {
        this.props.onSave(this.props.id, this.state.salary);
    }
}
import React, {Component} from 'react';
export default class DeleteAllButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <button className="DeleteAllButton" onClick={this.props.onClick}>Удалить все!</button>
        );
    }

    handleClick() {
    }

}
import React, { Component } from 'react';
import _ from 'lodash';
import './ListView.css';

export default class ListView extends Component {

    render() {
        return (
            <ul className="customers">
                {_.map(this.props.rowsIdArray, this.renderRowById.bind(this))}
            </ul>
        );
    }

    renderRowById(rowId) {
        return (
            <li key={rowId} className="customers__item">
                {this.props.renderRow(_.get(this.props.rowsById, rowId), this.props.onSave)}
            </li>
        );
    }

}
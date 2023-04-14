import React, { Component } from 'react';

export class Filter extends Component {
    render() {
        return (
            <input type='text' name='filter' onChange={this.props.onChange}></input>
        )
    }
}
import React, { Component } from 'react';

export class ContactItem extends Component {
  render() {
    return (
      <li>
        <p>{this.props.name}</p>
        <p>{this.props.number}</p>
      </li>
    );
  }
}

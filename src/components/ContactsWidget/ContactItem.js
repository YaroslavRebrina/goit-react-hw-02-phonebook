import React, { Component } from 'react';

export class ContactItem extends Component {
  render() {
    const { name, filter, number } = this.props;

    return name.toLowerCase().includes(filter.toLowerCase()) ? (
      <li>
        <p>{name}</p>
        <p>{number}</p>
      </li>
    ) : null;
  }
}

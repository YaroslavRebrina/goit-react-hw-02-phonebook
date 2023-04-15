import React, { Component } from 'react';

export class ContactItem extends Component {
  render() {
    const { name, filter, number, id, handlerDelete } = this.props;

    return name.toLowerCase().includes(filter.toLowerCase()) ? (
      <li key={id}>
        <p>{name}</p>
        <p>{number}</p>
        <button id={id} type="button" onClick={handlerDelete}>
          Delete
        </button>
      </li>
    ) : null;
  }
}

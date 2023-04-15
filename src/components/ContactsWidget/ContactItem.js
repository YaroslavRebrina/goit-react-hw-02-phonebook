import React, { Component } from 'react';
import css from './ContactItem.module.css';

export class ContactItem extends Component {
  render() {
    const { name, filter, number, id, handlerDelete } = this.props;

    return name.toLowerCase().includes(filter.toLowerCase()) ? (
      <li key={id} className={css.item}>
        <p className={css.itemChild}>{name}</p>
        <p className={css.itemChild}>{number}</p>
        <button
          className={css.itemButton}
          id={id}
          type="button"
          onClick={handlerDelete}
        >
          Delete
        </button>
      </li>
    ) : null;
  }
}

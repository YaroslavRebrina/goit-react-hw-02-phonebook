import React, { Component } from 'react';

export class ContactsForm extends Component {
  render() {
    const { name, number, handlerSubmit, handlerInput } = this.props;
    return (
      <form onSubmit={handlerSubmit}>
        name
        <input
          onChange={handlerInput}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Casnumbermore d'Artagnan"
          required
        />
        number
        <input
          onChange={handlerInput}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="submit">Add phone number</button>
      </form>
    );
  }
}

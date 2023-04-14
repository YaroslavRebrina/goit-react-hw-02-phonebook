import React, { Component } from 'react';
// import { ContactsForm } from './ContactsWidget/ContactsForm';
import { ContactItem } from './ContactsWidget/ContactItem';
import { Filter } from './ContactsWidget/Filter';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handlerSubmit = e => {
    const { name, number } = this.state;
    e.preventDefault();

    const contact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));

    this.reset();
  };

  handlerInput = e => {
    console.log(e.target.name);
    this.setState({ [e.target.name]: e.target.value });
  };
  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { contacts, name, number } = this.state;

    return (
      <>
        <form onSubmit={this.handlerSubmit}>
          name
          <input
            onChange={this.handlerInput}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Casnumbermore d'Artagnan"
            required
          />
          number
          <input
            onChange={this.handlerInput}
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button type="submit">Add phone number</button>
        </form>
        filter
        <Filter onChange={this.handlerInput} />
        <ul>
          {contacts.map(({ id, name, number }) => (
            <ContactItem key={id} name={name} number={number} />
          ))}
        </ul>
      </>
    );
  }
}

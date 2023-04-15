import React, { Component } from 'react';
import { ContactsForm } from './ContactsWidget/ContactsForm';
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
    const { name, number, contacts } = this.state;
    e.preventDefault();

    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is alrady in contacts.`);
      return;
    }

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
    this.setState({ [e.target.name]: e.target.value });
  };
  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { contacts, name, number } = this.state;

    return (
      <>
        <ContactsForm
          name={name}
          number={number}
          handlerSubmit={this.handlerSubmit}
          handlerInput={this.handlerInput}
        />
        filter
        <Filter onChange={this.handlerInput} />
        <ul>
          {contacts.map(({ id, name, number, filter }) => (
            <ContactItem
              key={id}
              name={name}
              number={number}
              filter={this.state.filter}
            />
          ))}
        </ul>
      </>
    );
  }
}

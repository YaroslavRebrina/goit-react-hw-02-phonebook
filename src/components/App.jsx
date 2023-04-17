import React, { Component } from 'react';
import { ContactsForm } from './ContactsWidget/ContactsForm';
import { Filter } from './ContactsWidget/Filter';
import { ContactItem } from './ContactsWidget/ContactItem';


import css from './App.module.css';

export class App extends Component {


  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handlerSubmit = (name, number, id) => {
    const { contacts } = this.state;

    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is alrady in contacts.`);
      return;
    }

    const contact = {
      id,
      name,
      number,
    };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  onFilterChange = value => {
    this.setState({ filter: value });
  };

  handleDelete = e => {
    const { contacts } = this.state;
    const contactsAfterDelete = contacts.filter(
      contact => contact.id !== e.target.id
    );

    this.setState({ contacts: contactsAfterDelete });
  };

  render() {
    const { contacts } = this.state;

    return (
      <div className={css.global__wrapper}>
        <ContactsForm handlerSubmit={this.handlerSubmit} />
        <Filter handlerFilter={this.onFilterChange} />
        <ul className={css.itemList}>
          {contacts.map(({ id, name, number }) => (
            <ContactItem
              key={id}
              id={id}
              name={name}
              number={number}
              filter={this.state.filter}
              handlerDelete={this.handleDelete}
            />
          ))}
        </ul>
      </div>
    );
  }
}

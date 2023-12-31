import React, { Component } from 'react';
import { Form } from './Form';
import { Filter } from './Filter';
import { List } from './List';
import { nanoid } from 'nanoid';

import css from './app.css';
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

  addContactOnSubmit = ({ name, number }) => {
    const contactOnList = this.state.contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (contactOnList) {
      alert('This contact is already on Your list');
    } else {
      const newContact = {
        id: nanoid(),
        name,
        number,
      };

      this.setState({
        contacts: [...this.state.contacts, newContact],
      });
    }
  };

  deleteContact = contactId => {
    const remainingContacts = this.state.contacts.filter(
      contact => contact.id !== contactId
    );
    this.setState({
      contacts: remainingContacts,
    });
  };

  onFilterChange = event => {
    event.preventDefault();
    this.setState({ filter: event.target.value.toLowerCase() });
  };

  showFilteredContact() {
    return this.state.contacts.filter(contact => {
      return contact.name.toLowerCase().includes(this.state.filter);
    });
  }

  render() {
    const filter = this.state.filter;

    return (
      <div className={css.container}>
        <h1>Phonebook</h1>
        <Form onSubmit={this.addContactOnSubmit} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.onFilterChange} />
        <List
          contacts={this.showFilteredContact()}
          onDelete={this.deleteContact}
        />
      </div>
    );
  }
}

import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { Section } from 'components/Section/Section';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';


export class App extends Component {
   
  state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
    filter: '',
  }

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null) {
      return this.setState({
        contacts: JSON.parse(savedContacts),
      })
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }
  }

  
   getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const filterContactsList = contacts.filter(contact => {

    return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
    return filterContactsList;
  };

 

  filterList = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  formSubmit = ({ name, number }) => {
    const contact = { id: nanoid(), name, number };
    if (this.state.contacts.some(e => e.name === name)) {
    return alert(`${name} is already in contacts!`);
    }

    this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }));
  };

   deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    
    return (
      <div>
        <Section title="Phonebook">
          <ContactForm onSubmit={this.formSubmit}/>
        </Section>
        
        <Section title="Contacts">
          <Filter value={this.filter} onChange={this.filterList}/>
          <ContactList contacts={this.getFilteredContacts()}
          deleteContact={this.deleteContact}/>
        </Section>

      </div>
    );
}
}

import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { Section } from 'components/Section/Section';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';


export function App () {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem('contacts')) ?? [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
    );
  const [filter, setFilter] = useState('');
  
   useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  

   const filterList = event => {
    setFilter(event.target.value) ;
  };

  const filterContactList = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()));

   const deleteContact = contactId => {
    setContacts(contacts =>
      contacts.filter(contact => contact.id !== contactId)
    );
  };

  const formSubmit = ({ name, number }) => {
    const contact = { id: nanoid(), name, number };

    if (contacts.some(e => e.name === name)) {
    return alert(`${name} is already in contacts!`);
    }

    setContacts([contact, ...contacts]);
  };


    return (
      <div>
        <Section title="Phonebook">
          <ContactForm onSubmit={formSubmit}/>
        </Section>
        
        <Section title="Contacts">
          <Filter value={filter} onChange={filterList}/>
          <ContactList contacts={filterContactList}
          deleteContact={deleteContact}/>
        </Section>

      </div>
    );
}


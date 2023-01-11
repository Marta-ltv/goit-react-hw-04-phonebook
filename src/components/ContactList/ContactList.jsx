import React from "react";
import propTypes from 'prop-types';
import { ContactsList, ButtonDelete, ContactListItem } from "./ContactList.styled";


export const ContactList = ({ contacts, deleteContact }) => (
    <ContactsList>
        {contacts.map((contact, id) => (
            <ContactListItem key={id}>
        {contact.name}: {contact.number}
        <ButtonDelete type="button" onClick={() => deleteContact(contact.id)}>
        Delete
        </ButtonDelete>
    </ContactListItem>
    ))}   
    </ContactsList>
);

ContactList.propTypes = {
  deleteContact: propTypes.func.isRequired,
  contacts: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ),
};
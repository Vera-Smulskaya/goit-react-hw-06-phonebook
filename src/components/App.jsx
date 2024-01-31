import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
// import Filter from './Filter/Filter';
import Section from './Section/Section';
import Title from './Title/Title';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contactsStore.contacts);

  useEffect(() => {
    const stringifiedContacts = JSON.stringify(contacts);
    localStorage.setItem('contacts', stringifiedContacts);
  }, [contacts]);

  const handleAddContact = contactData => {
    const hasDuplicates = contacts.some(
      contact => contact.name.toLowerCase() === contactData.name.toLowerCase()
    );
    if (hasDuplicates) {
      alert(`Contact with name ${contactData.name} already exists`);
      return;
    }

    const finalContact = {
      ...contactData,
      id: nanoid(),
    };
    const addContactAction = {
      type: 'contacts/addContact',
      payload: finalContact,
    };
    dispatch(addContactAction);
  };

  // const onFilter = event => {
  //   setFilter(event.target.value);
  // };

  // const filterContacts = () => {
  //   return contacts.filter(contact => {
  //     return contact.name.toLowerCase().includes(filter.toLowerCase());
  //   });
  // };

  const deleteContact = contactId => {
    const deleteContactAction = {
      type: 'contacts/deleteContact',
      payload: contactId,
    };
    dispatch(deleteContactAction);
    // setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  // const contactsNew = filter ? filterContacts() : contacts;

  return (
    <div>
      <Section>
        <Title>Phonebook</Title>
        <ContactForm handleFormContact={handleAddContact} />
      </Section>
      <Section>
        {/* <Filter value={filter} onChange={onFilter} /> */}
        <ContactList contacts={contacts} deleteContact={deleteContact} />
        <ContactList contacts={contacts} deleteContact={deleteContact} />
      </Section>
    </div>
  );
};

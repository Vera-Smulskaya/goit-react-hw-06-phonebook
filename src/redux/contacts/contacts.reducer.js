import { createSlice } from '@reduxjs/toolkit';

const startContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '321-459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '234-443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '123-645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '324-227-91-26' },
];

const initialState = {
  contacts: JSON.parse(localStorage.getItem('contacts')) ?? startContacts,
  isLoading: false,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, action) {
      state.contacts = [...state.contacts, action.payload];
      // state.contacts.push(action.payload); or
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

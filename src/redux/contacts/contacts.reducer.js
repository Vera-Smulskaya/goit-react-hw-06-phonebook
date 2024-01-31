const startContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '321-459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '234-443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '123-645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '324-227-91-26' },
];

const initialState = {
  contacts: JSON.parse(localStorage.getItem('contacts')) ?? startContacts,
  // filter: '',
};

export const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'contacts/addContact': {
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    }
    case 'contacts/deleteContact': {
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    }
    default:
      return state;
  }
};

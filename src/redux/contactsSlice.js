import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
  },
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },
    removeContact(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    filterContacts(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addContact, removeContact, filterContacts } =
  contactsSlice.actions;

//---------------------------------------------//
// import { createSlice } from '@reduxjs/toolkit';

// export const contactsSlice = createSlice({
//   name: 'contact',
//   initialState: {
//     items: [],
//     filter: '',
//   },
//   reducers: {
//     addContact(state, action) {
//       state.items.push(action.payload);
//     },
//     removeContact(state, action) {
//       state.items = state.items.filter(item => item.id !== action.payload);
//     },
//     filterContacts(state, action) {
//       state.filter = action.payload;
//     },
//   },
// });

// export const { addContact, removeContact, filterContacts } =
//   contactsSlice.actions;

// // import { createSlice } from '@reduxjs/toolkit';
// // import { persistReducer } from 'redux-persist';
// // import storage from 'redux-persist/lib/storage';

// // const contSlice = createSlice({
// //   name: 'contacts',
// //   initialState: { contacts: [] },
// //   reducers: {
// //     addContact(state, action) {
// //       state.contacts.push(action.payload);
// //     },
// //     deleteCont(state, action) {
// //       state.contacts = state.contacts.filter(el => el.id !== action.payload);
// //     },
// //   },
// // });

// // const persistConfig = {
// //   key: 'root',
// //   storage,
// // };

// // export const contReducer = persistReducer(persistConfig, contSlice.reducer);

// // export const { addContact, deleteCont } = contSlice.actions;

// // // selectors

// // export const getContacts = state => state.contacts.contacts;

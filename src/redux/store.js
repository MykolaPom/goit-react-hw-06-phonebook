import { configureStore } from '@reduxjs/toolkit';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import { contactsSlice } from './contactsSlice';

// const persistConfig = {
//   key: 'root',
//   storage: storage,
//   whitelist: ['items'],
// };

// const contacsPersistedReducer = persistReducer(
//   persistConfig,
//   contactsSlice.reducer
// );

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer, //contacsPersistedReducer,
  },
  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   }),
});

// export const persistor = persistStore(store);

//-----------------------------------------//
// import { configureStore } from '@reduxjs/toolkit';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import { contactsSlice } from './contactsSlice';

// const persistConfig = {
//   key: 'root',
//   storage: storage,
//   whitelist: ['items'],
// };

// const contacsPersistedReducer = persistReducer(
//   persistConfig,
//   contactsSlice.reducer
// );

// export const store = configureStore({
//   reducer: {
//     contacts: contacsPersistedReducer,
//   },
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store);

// //-------------------------------//
// // import { configureStore } from '@reduxjs/toolkit';
// // import {
// //   persistStore,
// //   FLUSH,
// //   REHYDRATE,
// //   PAUSE,
// //   PERSIST,
// //   PURGE,
// //   REGISTER,
// // } from 'redux-persist';
// // import { filterReducer } from './filterSlice';
// // import { contReducer } from './contactSlice';

// // export const store = configureStore({
// //   reducer: {
// //     contact: contReducer,
// //     filter: filterReducer,
// //   },
// //   middleware: getDefaultMiddleware =>
// //     getDefaultMiddleware({
// //       serializableCheck: {
// //         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
// //       },
// //     }),
// // });

// // export const persistor = persistStore(store);

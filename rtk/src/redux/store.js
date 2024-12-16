import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist'; // Import persistStore
import persistedReducer from './persistConfig'; // Use persistedReducer

const store = configureStore({
  reducer: {
    counter: persistedReducer, // Add the persisted reducer
  },
});

const persistor = persistStore(store); // Create a persistor to handle rehydration

export { store, persistor };

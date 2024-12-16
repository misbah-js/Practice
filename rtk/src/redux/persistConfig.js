import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Default storage (localStorage for web)
import counterReducer from './counterSlice'; // Your counter slice reducer

// Persist configuration for the 'counter' slice
const persistConfig = {
  key: 'counter',  // Key to store the persisted data under
  storage,         // Choose the storage method (localStorage for web)
  whitelist: ['value'],  // Persist only the 'value' field of the counter slice (optional)
};

// Wrap the counter reducer with persistReducer
const persistedReducer = persistReducer(persistConfig, counterReducer);

export default persistedReducer;

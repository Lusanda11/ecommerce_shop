// ****************** store_JS *********************



// Importing necessary functions and modules from Redux and React-Redux libraries.
// ----------------------------------------------------------------------------------------------------------------------------
    // import { createStore, combineReducers } from "redux";
    // import { Provider } from "react-redux";
    // import shippingReducer from "./reducers/shippingReducer";
// ----------------------------------------------------------------------------------------------------------------------------

// Combining multiple reducers into a single root reducer.
// ----------------------------------------------------------------------------------------------------------------------------
    // const rootReducer = combineReducers(
    // {
    //     shipping: shippingReducer,
    // });
    //
    // const store = createStore(rootReducer); // Creating the Redux store with the root reducer.
// ----------------------------------------------------------------------------------------------------------------------------

// export default store; // Exporting the store for use in other parts of the application.

import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers/rootReducer";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };

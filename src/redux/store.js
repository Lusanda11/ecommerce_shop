// ****************** store_JS *********************


// Importing necessary functions and modules from Redux and React-Redux libraries.
// ----------------------------------------------------------------------------------------------------------------------------
    import { createStore } from "redux"; // Redux core function to create the store.
    import rootReducer from "./reducers/rootReducer"; // Root reducer that combines all reducers in your app.
    import { persistStore, persistReducer } from "redux-persist"; // Redux Persist utilities.
    import storage from "redux-persist/lib/storage"; // Default storage (localStorage for web).
// ----------------------------------------------------------------------------------------------------------------------------

// Configuration for Redux Persist.
// ----------------------------------------------------------------------------------------------------------------------------
    const persistConfig = {
        key: "root",      // Key for persisted data in storage
        storage,          // Where to store the persisted state
    };
// ----------------------------------------------------------------------------------------------------------------------------

// Set up Redux store with persisted state.
// ----------------------------------------------------------------------------------------------------------------------------
    const persistedReducer = persistReducer(persistConfig, rootReducer); // Wrap the root reducer with persistence capabilities
    const store = createStore(persistedReducer); // Create the Redux store using the persisted reducer
    const persistor = persistStore(store);// Create the persistor, which controls persistence lifecycle
    export { store, persistor }; // Export store and persistor for use in index.js / main.jsx
// ----------------------------------------------------------------------------------------------------------------------------

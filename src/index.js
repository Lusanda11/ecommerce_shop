// ****************** index_JS *********************

// Importing necessary modules.
// ----------------------------------------------------------------------------------------------------------------------------
    import React from "react";
    import ReactDOM from "react-dom/client";
    import "./index.css";
    import App from "./App";
    import ShopContextProvider from "./Context/ShopContext";
    import { Provider } from "react-redux";
    import { store, persistor } from "./redux/store";
    import { PersistGate } from 'redux-persist/integration/react';
    // import store from "./redux/store";
// ----------------------------------------------------------------------------------------------------------------------------


// Creating a root for rendering the React component tree.
// ----------------------------------------------------------------------------------------------------------------------------
    const root = document.getElementById("root");

    const ReactRoot = ReactDOM.createRoot(root);
    ReactRoot.render(
        <ShopContextProvider>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <App />
                </PersistGate>
            </Provider>
        </ShopContextProvider>
    );
// ----------------------------------------------------------------------------------------------------------------------------

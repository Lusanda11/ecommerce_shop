// ****************** ShopContext_JSX *********************

// Import necessary Modules.
// ----------------------------------------------------------------------------------------------------------------------------
    import React, { createContext, useState } from "react";
    import all_product from "../Components/Assets/all_product";

    export const ShopContext = createContext(null); // Creates a new context named ShopContext with a default value of null.
// ----------------------------------------------------------------------------------------------------------------------------


// Defines a function getDefaultCart that initializes a cart object.
// ----------------------------------------------------------------------------------------------------------------------------
    const getDefaultCart = () =>
    {
        let cart = {}; // The cart object has keys representing product IDs and values initialized to 0.

        // Iterates over the all_product array and sets the initial quantity of each product in the cart to 0.
        for (let index = 0; index < all_product.length + 1; index++)
        {
            cart[index] = 0;
        }
        return cart;
    };
// ----------------------------------------------------------------------------------------------------------------------------


// Defines a functional component ShopContextProvider that takes props as an argument.
// ----------------------------------------------------------------------------------------------------------------------------
const ShopContextProvider = (props) =>
{
    // Uses useState to create cartItems state initialized with the getDefaultCart function.
    const [cartItems, setCartItems] = useState(getDefaultCart());
    // Uses useState to create shipmentMethod state initialized to an empty string.
    const [shipmentMethod, setShipmentMethod] = useState(""); // Add state for shipment method.

    // Defines a function addToCart that increments the quantity of a specified item in the cart.
    const addToCart = (itemId) =>
    {
        // Uses the setCartItems function to update the state, preserving the previous state and incrementing the specified item"s quantity.
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        console.log(cartItems);
    };     // Logs the cartItems state to the console.

    // Defines a function removeFromCart that decrements the quantity of a specified item in the cart.
    const removeFromCart = (itemId) =>
    {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };

    // Defines a function getTotalCartAmount that calculates the total cost of all items in the cart.
    const getTotalCartAmount = () =>
    {
        let totalAmount = 0;
        for (const item in cartItems)
        {
            if (cartItems[item] > 0)
            {
                let itemInfo = all_product.find((product) => product.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.new_price;
            }
        }
        return totalAmount;
    };

    const getTotalCartItems = () =>
    {
        let totalItem = 0;
        for (const item in cartItems)
        {
            if (cartItems[item] > 0)
            {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    };

    // Defines a function getTotalCartItems that calculates the total number of items in the cart.
    const contextValue =
    {
        getTotalCartItems,
        getTotalCartAmount,
        all_product,
        cartItems,
        addToCart,
        removeFromCart,
        shipmentMethod,
        setShipmentMethod, // Add setter to context
    };

    // Returns the ShopContext.Provider component, passing contextValue as the value prop.
    return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
    );
};
// ----------------------------------------------------------------------------------------------------------------------------


export default ShopContextProvider; // Export necessary modules.

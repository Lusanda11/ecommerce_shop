// ****************** ShippingOptions_JS *********************


// Importing necessary modules and functions.
// ----------------------------------------------------------------------------------------------------------------------------
    import React from "react";
    import { useDispatch } from "react-redux";
    import { requestHelp } from "../redux/actions/shippingActions";
// ----------------------------------------------------------------------------------------------------------------------------


// Defining the ShippingOptions component.
// ----------------------------------------------------------------------------------------------------------------------------
    const ShippingOptions = () =>
    {
        const dispatch = useDispatch();

        const handleRequestHelp = () =>
        {
        const details = "Here are the details of the shipping options: Standard, Express and Overnight Shipping. Click on the cart icon and scroll down to the dropdown-list for shipping options.";
        dispatch(requestHelp(details));
        };

        return (
            <div>
                <h2>Shipping Options</h2>
                <button onClick={handleRequestHelp}>Request Help</button>
            </div>
        );
    };
// ----------------------------------------------------------------------------------------------------------------------------

export default ShippingOptions; // Exporting the ShippingOptions component as the default export.

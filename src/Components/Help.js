// ****************** Help_JS *********************


// Importing necessary modules and functions.
// ----------------------------------------------------------------------------------------------------------------------------
    import React from "react";
    import { useDispatch, useSelector } from "react-redux";
    import { closeHelp } from "../redux/actions/shippingActions";
// ----------------------------------------------------------------------------------------------------------------------------


// Defining the Help component.
// ----------------------------------------------------------------------------------------------------------------------------
    const Help = () =>
    {
        const dispatch = useDispatch();
        const helpRequested = useSelector((state) => state.shipping.helpRequested);
        const shippingDetails = useSelector((state) => state.shipping.shippingDetails);

        if (!helpRequested)
        {
            return null;
        }

        return (
            <div className="help-popup">
              <div className="help-content">
                <h2>Shipping Options</h2>
                <p>{shippingDetails}</p>
                <button onClick={() => dispatch(closeHelp())}>Close</button>
              </div>
            </div>
        );
    };
// ----------------------------------------------------------------------------------------------------------------------------


export default Help; // Exporting the Help component as the default export.

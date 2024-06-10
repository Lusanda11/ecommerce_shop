// ****************** shippingReducer_JS *********************


// Defining the initial state for the shipping reducer.
// ----------------------------------------------------------------------------------------------------------------------------
    const initialState =
    {
        helpRequested: false,
        shippingDetails: "",
    };
// ----------------------------------------------------------------------------------------------------------------------------


// Defining the shipping reducer function.
// ----------------------------------------------------------------------------------------------------------------------------
    const shippingReducer = (state = initialState, action) =>
    {
        switch (action.type)
        {
            case "REQUEST_HELP":
            return{
                ...state,
                helpRequested: true,
                shippingDetails: action.payload,
            };
            case "CLOSE_HELP":
            return{
                ...state,
                helpRequested: false,
                shippingDetails: "",
            };
            default:
            return state;
        }
    };
// ----------------------------------------------------------------------------------------------------------------------------


export default shippingReducer; // Exporting the shipping reducer as the default export.

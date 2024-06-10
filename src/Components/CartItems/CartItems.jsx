// ****************** CartItems_JSX *********************

// Imports necessary dependencies.
// ----------------------------------------------------------------------------------------------------------------------------
    import React, { useContext } from "react"; // React and useContext from "react" are imported for building the component and accessing context.
    import "./CartItems.css";
    import { ShopContext } from "../../Context/ShopContext";
    import remove_icon from "../Assets/cart_cross_icon.png";
// ----------------------------------------------------------------------------------------------------------------------------


// This block defines the CartItems functional component.
// ----------------------------------------------------------------------------------------------------------------------------
    const CartItems = () =>
    {
        const
        {
            getTotalCartAmount,
            all_product,
            cartItems,
            removeFromCart,
            shipmentMethod,
            setShipmentMethod,
        } = useContext(ShopContext);

        const handleShipmentChange = (e) =>
        {
            setShipmentMethod(e.target.value);
        };

        return (
        <div className="cartitems">
          <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <hr />
          {all_product.map((e) => {
            if (cartItems[e.id] > 0) {
              return (
                <div key={e.id}>
                  <div className="cartitems-format cartitems-format-main">
                    <img src={e.image} alt="" className="carticon-product-icon" />
                    <p>{e.name}</p>
                    <p>${e.new_price}</p>
                    <button className="cartitems-quantity">{cartItems[e.id]}</button>
                    <p>${e.new_price * cartItems[e.id]}</p>
                    <img
                      className="cartitems-remove-icon"
                      src={remove_icon}
                      onClick={() => {
                        removeFromCart(e.id);
                      }}
                      alt=""
                    />
                  </div>
                  <hr />
                </div>
              );
            }
            return null;
          })}
          <div className="cartitems-down">
            <div className="cartitems-total">
              <h1>Cart Totals</h1>
              <div>
                <div className="cartitems-total-item">
                  <p>Subtotal</p>
                  <p>${getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                  <label htmlFor="shipment">Select Shipment Method:</label>
                  <select
                    id="shipment"
                    value={shipmentMethod}
                    onChange={handleShipmentChange}
                  >
                    <option value="">Select a method</option>
                    <option value="Standard">Standard Shipping</option>
                    <option value="Express">Express Shipping</option>
                    <option value="Overnight">Overnight Shipping</option>
                  </select>
                </div>
                <hr />
                <div className="cartitems-total-item">
                  <h3>Total</h3>
                  <h3>${getTotalCartAmount()}</h3>
                </div>
              </div>
              <button>PROCEED TO CHECKOUT</button>
            </div>
            <div className="cartitems-promocode">
              <p>If you have a promo code, enter it here</p>
              <div className="cartitems-promobox">
                <input type="text" placeholder="promo code" />
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>
        );
    };
// ----------------------------------------------------------------------------------------------------------------------------


export default CartItems; // Export necessary modules.

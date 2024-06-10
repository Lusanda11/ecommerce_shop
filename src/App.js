// ****************** App_JS *********************


// Importing necessary modules and components:
// ----------------------------------------------------------------------------------------------------------------------------
    import "./App.css"; // Importing the main CSS file for the application.
    import Navbar from "./Components/Navbar/Navbar"; // Importing the Navbar component.
    import { BrowserRouter, Routes, Route } from "react-router-dom"; // Importing BrowserRouter, Routes, and Route from react-router-dom for routing.
    import Shop from "./Pages/Shop"; // Importing the Shop component.
    import ShopCategory from "./Pages/ShopCategory"; // Importing the ShopCategory component.
    import Product from "./Pages/Product"; // Importing the Product component.
    import Cart from "./Pages/Cart"; // Importing the Cart component.
    import LoginSignup from "./Pages/LoginSignup"; // Importing the LoginSignup component.
    import Footer from "./Components/Footer/Footer"; // Importing the Footer component.
    import men_banner from "./Components/Assets/banner_mens.png"; // Importing the men"s banner image.
    import women_banner from "./Components/Assets/banner_women.png"; // Importing the women"s banner image.
    import kid_banner from "./Components/Assets/banner_kids.png"; // Importing the kid"s banner image.
    import ShippingOptions from "./Components/ShippingOptions";
    import Help from "./Components/Help";

// ----------------------------------------------------------------------------------------------------------------------------


// Function component App:
// ----------------------------------------------------------------------------------------------------------------------------
    function App()
    {
        return (
            <div> {/* Main container div */}
                <BrowserRouter> {/* Wrapping the app in BrowserRouter to enable routing */}
                    <Navbar/> {/* Rendering the Navbar component */}
                    <Help />
                    <ShippingOptions />
                    <Routes> {/* Defining routes for the application */}
                        <Route path="/" element={<Shop/>}/> {/* Route for the main shop page */}
                        <Route path="/mens" element={<ShopCategory banner={men_banner} category="men"/>}/> {/* Route for men"s category page with a banner */}
                        <Route path="/womens" element={<ShopCategory banner={women_banner} category="women"/>}/> {/* Route for women"s category page with a banner */}
                        <Route path="/kids" element={<ShopCategory banner={kid_banner} category="kid"/>}/> {/* Route for kid"s category page with a banner */}
                        <Route path="/product" element={<Product/>}> {/* Route for product page */}
                            <Route path=":productId" element={<Product/>}/> {/* Nested route for a specific product based on productId */}
                        </Route>
                        <Route path="/cart" element={<Cart/>}/> {/* Route for the cart page */}
                        <Route path="/login" element={<LoginSignup/>}/> {/* Route for the login and signup page */}
                    </Routes>
                    <Footer/> {/* Rendering the Footer component */}
                </BrowserRouter>
            </div>
        );
    };
// ----------------------------------------------------------------------------------------------------------------------------

export default App; // Export necessary modules.

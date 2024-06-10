// ****************** Hero_JSX *********************


// Import necessary modules and assets.
// ----------------------------------------------------------------------------------------------------------------------------
    import React from "react"; // Import React library.
    import "./Hero.css"; // Import the CSS file for styling.
    import hand_icon from "../Assets/hand_icon.png"; // Import hand icon image.
    import arrow_icon from "../Assets/arrow.png"; // Import arrow icon image.
    import hero_image from "../Assets/hero_image.png"; // Import hero image.
// ----------------------------------------------------------------------------------------------------------------------------


// Functional component "Home" that receives "currentUser" as a prop.
// ----------------------------------------------------------------------------------------------------------------------------
    // const Home = ({ currentUser }) => (
    //   <div className="hero-container"> {/* Container for the hero section */}
    //     <h1>Welcome, {currentUser.name}!</h1>  {/* Display a welcome message with the user"s name */}
    //   </div>
    // );
// ----------------------------------------------------------------------------------------------------------------------------


// Functional component "Hero" for displaying the hero section.
// ----------------------------------------------------------------------------------------------------------------------------
    const Hero = () =>
    {
      return (
        <div className="hero">  {/* Main container for the hero section */}
          <div className="hero-left">  {/* Left side of the hero section */}
            <h2>NEW ARRIVALS ONLY</h2> {/* Heading for new arrivals */}
            <div>
                <div className="hero-hand-icon">  {/* Container for the hand icon and "new" label */}
                    <p>new</p>  {/* "new" label */}
                    <img src={hand_icon} alt="" /> {/* Hand icon image */}
                </div>
                <p>collections</p> {/* Text indicating collections */}
                <p>for everyone</p> {/* Text indicating inclusivity */}
            </div>
            <div className="hero-latest-btn"> {/* Container for the "Latest Collection" button */}
                <div>Latest Collection</div>  {/* Button text */}
                <img src={arrow_icon} alt="" />  {/* Arrow icon image */}
            </div>
          </div>
          <div className="hero-right"> {/* Right side of the hero section */}
            <img src={hero_image} alt="" /> {/* Main hero image */}
          </div>
        </div>
      );
    };
// ----------------------------------------------------------------------------------------------------------------------------

export default Hero; // Export the Hero component as the default export.

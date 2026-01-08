// ****************** LoginSignup_JSX *********************



// Imports and CSS:
// ----------------------------------------------------------------------------------------------------------------------------
    import React, { useState } from "react";
    import { useDispatch, useSelector } from "react-redux";
    import { login, logout } from "../redux/actions/authActions"; // Ensure the path is correct
    import "./CSS/LoginSignup.css";
    import PropTypes from "prop-types";
// ----------------------------------------------------------------------------------------------------------------------------
//

// NavBar component:
// ----------------------------------------------------------------------------------------------------------------------------
    const NavBar = ({ currentUser, onLogout }) => (
        <header className="navbar">
            <h2>My App</h2>
            {currentUser ? (
              <div>
                <p>Logged in as: {currentUser.username}</p>
                <button onClick={onLogout} className="logout-button">Logout</button>
              </div>
            ) : (
              <p>Please log in</p>
            )}
        </header>
    );

    NavBar.propTypes =
    {
        currentUser: PropTypes.string,
        onLogout: PropTypes.func.isRequired
    };
// ----------------------------------------------------------------------------------------------------------------------------
//

// Hero component:
// ----------------------------------------------------------------------------------------------------------------------------
    const Hero = ({ currentUser }) => (
        <div className="hero">
            <h1>Welcome, {currentUser.username}!</h1>
        </div>
    );

    Hero.propTypes =
    {
        currentUser: PropTypes.string.isRequired
    };
// ----------------------------------------------------------------------------------------------------------------------------

// SignUp component:
// ----------------------------------------------------------------------------------------------------------------------------
    const SignUp = ({ onSignUp }) =>
    {
        const [formData, setFormData] = useState(
        {
            name: "",
            surname: "",
            email: "",
            username: "",
            password: "",
        });

        const [errors, setErrors] = useState({});

        const handleChange = (e) =>
        {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        };

        const validate = () =>
        {
            const newErrors = {};
            if (!formData.name) newErrors.name = "Name is required";
            if (!formData.surname) newErrors.surname = "Surname is required";
            if (!formData.email)
            {
                newErrors.email = "Email is required";
            }
            else if (!/\S+@\S+\.\S+/.test(formData.email))
            {
                newErrors.email = "Email is invalid";
            }
            if (!formData.username) newErrors.username = "Username is required";
            if (!formData.password)
            {
                newErrors.password = "Password is required";
            }
            else if (formData.password.length < 6)
            {
                newErrors.password = "Password must be at least 6 characters";
            }
            return newErrors;
        };

        const handleSubmit = (e) =>
        {
            e.preventDefault();
            const validationErrors = validate();
            if (Object.keys(validationErrors).length === 0)
            {
                onSignUp(formData);
                setFormData(
                {
                    name: "",
                    surname: "",
                    email: "",
                    username: "",
                    password: "",
                });
            }
            else
            {
                setErrors(validationErrors);
            }
        };

        return (
            <div className="form-container">
              <h1>Sign Up</h1>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                />
                {errors.name && <p className="error">{errors.name}</p>}
                <input
                  type="text"
                  name="surname"
                  value={formData.surname}
                  onChange={handleChange}
                  placeholder="Surname"
                  required
                />
                {errors.surname && <p className="error">{errors.surname}</p>}
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                />
                {errors.email && <p className="error">{errors.email}</p>}
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Username"
                  required
                />
                {errors.username && <p className="error">{errors.username}</p>}
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  required
                />
                {errors.password && <p className="error">{errors.password}</p>}
                <button type="submit">Sign Up</button>
              </form>
            </div>
        );
    };

    SignUp.propTypes =
    {
        onSignUp: PropTypes.func.isRequired
    };
// ----------------------------------------------------------------------------------------------------------------------------


// Login component:
// ----------------------------------------------------------------------------------------------------------------------------
    const Login = ({ onLogin }) =>
    {
        const [formData, setFormData] = useState(
        {
            username: "",
            password: "",
        });

        const [errors, setErrors] = useState({});

        const handleChange = (e) =>
        {
            const { name, value } = e.target;
            setFormData({ ...formData, [name]: value });
        };

        const validate = () =>
        {
            const newErrors = {};
            if (!formData.username) newErrors.username = "Username is required";
            if (!formData.password) newErrors.password = "Password is required";
            return newErrors;
        };

        const handleSubmit = (e) =>
        {
            e.preventDefault();
            const validationErrors = validate();
            if (Object.keys(validationErrors).length === 0)
            {
                onLogin(formData);
                setFormData(
                {
                    username: "",
                    password: "",
                });
            }
            else
            {
                setErrors(validationErrors);
            }
        };

        return (
            <div className="form-container">
              <h1>Login</h1>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Username"
                  required
                />
                {errors.username && <p className="error">{errors.username}</p>}
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  required
                />
                {errors.password && <p className="error">{errors.password}</p>}
                <button type="submit">Login</button>
              </form>
            </div>
        );
    };

    Login.propTypes =
    {
        onLogin: PropTypes.func.isRequired
    };
// ----------------------------------------------------------------------------------------------------------------------------


// LoginSignup component:
// ----------------------------------------------------------------------------------------------------------------------------
    const LoginSignup = () =>
    {
        const dispatch = useDispatch();
        const currentUser = useSelector((state) => state.auth.username);

        const handleSignUp = (user) =>
        {
            const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
            existingUsers.push(user);
            localStorage.setItem("users", JSON.stringify(existingUsers));
            alert("User signed up successfully!");
        };

        const handleLogin = ({ username, password }) =>
        {
            const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
            const user = existingUsers.find((user) => user.username === username && user.password === password);
            if (user)
            {
                dispatch(login({ username }));
                alert("Login successful!");
            }
            else
            {
                alert("Invalid username or password");
            }
        };

        const handleLogout = () =>
        {
            dispatch(logout());
        };

        return (
            <div>
              <NavBar currentUser={currentUser} onLogout={handleLogout} />
              {currentUser ? (
                <Hero currentUser={currentUser} />
              ) : (
                <div className="form-wrapper">
                  <Login onLogin={handleLogin} />
                  <SignUp onSignUp={handleSignUp} />
                </div>
              )}
            </div>
        );
    };
// ----------------------------------------------------------------------------------------------------------------------------

export default LoginSignup;  // Export necessary module.

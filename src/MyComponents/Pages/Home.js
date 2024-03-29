import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext';
import { Link } from 'react-router-dom';
import Bot from "../Bot"
import './Home.css'; // Import your CSS file for Home.js

const Home = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <div className="home-container">
      <Bot />
      <h1>Welcome to InfoPulse App</h1>
      <div className="home-content">
        {isLoggedIn ? (
          <p>You are logged in. View news content <Link to='/'>here</Link></p>
        ) : (
          <div className="home-options">
            <p>Please select an option:</p>
            <div className="button-group">
              <Link to='/login' className="button btn-success">Login</Link>
              <Link to='/signin' className="button btn-success">Sign In</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;

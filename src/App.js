import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [ profile, setProfile ] = useState([]);
  const clientId = "803583339617-v3v2k7d19bhl5leqkbhbj1fdk6e1lm52.apps.googleusercontent.com"


const onFailure = (err) => {
  console.log('failed', err);
};

const logOut = () => {
  setIsLoggedIn(false);
  setProfile(null);
};
const onSuccess = (res) => {
  setProfile(res.profileObj);
  setIsLoggedIn(true);
};

  return (
    <div className="App">
      <header className="App-header">
      <div>
            {profile ? (
                <div>
                    <p>Hi, {profile.name}</p>
                    <GoogleLogout clientId={clientId} buttonText="Log out" onLogoutSuccess={logOut} />
                </div>
            ) : (
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Sign in with Google"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}
                />
            )}
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;


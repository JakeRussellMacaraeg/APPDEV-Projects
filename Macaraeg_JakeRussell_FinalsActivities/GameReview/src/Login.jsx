import React, { useState } from 'react';

export default function Login({ onLogin }) {
    const account = { username: "admin", password: "admin" };
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleUserNameChange = (e) => setUserName(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const handleLogin = () => {
        if (userName === account.username && password === account.password) {
            onLogin(true);
        } else {
            setError("Invalid username or password");
        }
    };

    return (
        <div className="login-container">
            <h1>Welcome to Wormmmy's Reviews!</h1>
            <h4>Login to Continue:</h4>
            <input 
                type="text" 
                placeholder="Username" 
                value={userName} 
                onChange={handleUserNameChange} 
            />
            <br />
            <input 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={handlePasswordChange} 
            />
            <br />
            {error && <p className="error">{error}</p>}
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

import React, { useState } from 'react';
import Shop from './Shop';
import AdminPanel from './AdminPanel';

export default function Login() {
    const accounts = [
        { id: 1, username: 'customer', password: 'customer', role: 'customer' },
        { id: 2, username: 'admin', password: 'admin', role: 'admin' },
        { id: 3, username: 'customer2', password: 'customer', role: 'customer' },
        { id: 4, username: 'customer3', password: 'customer', role: 'customer' },
    ];

    const [isLoggedIn, setLoggedIn] = useState(false);
    const [role, setRole] = useState('');
    const [enteredUsernames, setEnteredUsernames] = useState('');
    const [enteredPasswords, setEnteredPasswords] = useState('');

    // Handle username input
    function getUsernames(event) {
        setEnteredUsernames(event.target.value);
    }

    // Handle password input
    function getPasswords(event) {
        setEnteredPasswords(event.target.value);
    }

    // Handle login logic
    function handleLogin() {
        accounts.forEach((account) => {
            if (account.username === enteredUsernames && account.password === enteredPasswords) {
                setLoggedIn(true);
                setRole(account.role);
                setEnteredUsernames('');
                setEnteredPasswords('');
            }
        });
    }

    // Sample items data for the shop component
    const items = [
        { id: 1, name: 'Item 1', price: '$10' },
        { id: 2, name: 'Item 2', price: '$20' },
        { id: 3, name: 'Item 3', price: '$30' },
    ];

    // Component to render login page
    const renderLogin = () => (
        <div>
            <h1>Login:</h1>
            Username: <input type="text" placeholder="Username" id="username" value={enteredUsernames} onChange={getUsernames} />
            Password: <input type="password" placeholder="Password" id="password" value={enteredPasswords} onChange={getPasswords} />
            <button onClick={handleLogin}>Login</button>
        </div>
    );

    // Component for rendering the shop page
    const renderShop = () => (
        <Shop isLoggedIn={isLoggedIn} items={items} />
    );

    const renderAdmin = () => {
        return(
            <AdminPanel isLoggedIn = {isLoggedIn} accounts = {accounts} />
        )
    }

    // Conditional rendering based on login status and role
    if (isLoggedIn === false) {
        return renderLogin();
    } else {
        if (role === 'customer') {
            return renderShop();
        } else {
            return renderAdmin();
        }
    }
}
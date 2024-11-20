import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Login from './Login';
import Reviews from './Reviews';

export default function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <>
            <Header />
            <main>
                {isLoggedIn ? (
                    <Reviews />
                ) : (
                    <Login onLogin={setIsLoggedIn} />
                )}
            </main>
            <Footer />
        </>
    );
}

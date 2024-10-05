// src/components/App.js

import React from 'react';
import './App.css';
import MessageForm from './MessageForm';

const App = () => {
    return (
        <div className="App">
            <header>
                <h1>Telegram Web App</h1>
            </header>
            <main>
                <MessageForm />
            </main>
            <footer>
                <p>&copy; 2024 Ваше приложение</p>
            </footer>
        </div>
    );
};

export default App;

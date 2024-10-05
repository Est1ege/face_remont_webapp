// src/components/MessageForm.js

import React, { useState } from 'react';
import axios from 'axios';

const MessageForm = () => {
    const [chatId, setChatId] = useState('');
    const [message, setMessage] = useState('');
    const [responseMessage, setResponseMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post(`/sendMessage?chatId=${chatId}&message=${encodeURIComponent(message)}`);
            setResponseMessage(`Сообщение отправлено: ${response.data.result.text}`);
        } catch (error) {
            console.error('Ошибка отправки сообщения:', error);
            setResponseMessage('Ошибка отправки сообщения');
        }
    };

    return (
        <div>
            <h2>Отправить сообщение в Telegram</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="ID чата"
                    value={chatId}
                    onChange={(e) => setChatId(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Ваше сообщение"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                />
                <button type="submit">Отправить</button>
            </form>
            {responseMessage && <p>{responseMessage}</p>}
        </div>
    );
};

export default MessageForm;

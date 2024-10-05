// server.js
require('dotenv').config(); // Эта строка должна быть в начале файла
const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.post('/sendMessage', async (req, res) => {
    const { chatId, message } = req.query;

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    try {
        const response = await axios.post(url, {
            chat_id: chatId,
            text: message,
        });
        res.send(response.data);
    } catch (error) {
        console.error('Ошибка отправки сообщения:', error);
        res.status(500).send('Ошибка отправки сообщения');
    }
});

app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});

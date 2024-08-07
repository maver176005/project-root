const express = require('express');
const app = express();
const carRoutes = require('./routes/carRoutes');
const storeRoutes = require('./routes/storeRoutes');
require('dotenv').config();
const db = require('./config/db');

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.use(express.json());
app.use('/api', carRoutes);
app.use('/api', storeRoutes);

db.raw('SELECT 1')
    .then(() => {
        console.log('Подключение к базе данных успешно');
    })
    .catch((err) => {
        console.error('Ошибка подключения к базе данных:', err);
    });

app.get('/', (req, res) => {
    res.send('Добро пожаловать в приложение Car App!');
});

const port = process.env.PORT || 8085;

app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});

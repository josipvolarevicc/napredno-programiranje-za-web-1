import express from 'express'
import mysql from 'mysql2/promise'
import productRoutes from './routes/products.js';

const app =express();
const PORT = 3000;

app.use(express.json());

const db = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'webshop',
    password: 'password'

});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})
app.use('/products', productRoutes);
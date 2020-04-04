const express = require('express');
const app = express();
const dotenv = require("dotenv");
dotenv.config();
require('./db');
const port = process.env.PORT || 5000

// Body parser middleware
app.use('/uploads', express.static('uploads'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Add headers in order to perform all operation on API
// Because CORS Thing (Google it if you do not know)
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Header', '*');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'POST,PUT,PATCH,DELETE,GET');
        return res.status(200).json({});
    }
    next();
});


const productRouter = require("./api/routes/products");
const orderRouter = require("./api/routes/orders");
const userRouter = require("./api/routes/user");

// Routes
app.use('/api/products', productRouter)
app.use('/api/order', orderRouter)
app.use('/api/user', userRouter)

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
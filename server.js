const express = require('express');
const app = express();
require('./db');
const port = process.env.PORT || 5000

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Add headers in order to perform all operation on API
// Because CORS Thing (Google it if you do not know)
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Header', '*');
    if (req.method === 'OPTIONS') {
        req.header('Access-Control-Allow-Methods', 'POST,PUT,PATCH,DELETE,GET');
        return res.status(200).json({});
    }
    next();
})

//Intial Route
app.get('/', (req, res) => {
    res.send({ msg: 'You are ready to rock bro....' });
})


// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
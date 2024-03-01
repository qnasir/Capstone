const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const port = process.env.PORT || 3000;

require('dotenv').config();
const app = express();

app.use(cors());

// Middleware for error catching
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

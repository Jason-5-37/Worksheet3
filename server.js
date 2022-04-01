// server.js


const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// routes
const books = require('./routes/api/books');

const server = express();

// Connect Database
connectDB();

// cors
server.use(cors({ origin: true, credentials: true }));

// Init Middleware
server.use(express.json({ extended: false }));

// use Routes
server.use('/api/books', books);

// Accessing the path module
const path = require("path");

// Step 1:
server.use(express.static(path.resolve(__dirname, "./client/build")));
// Step 2:
server.get("/", function (request, response) {
    response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

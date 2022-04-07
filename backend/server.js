const express = require("express");
const articles = require("./dummydata/articles")
const server = express();
var cors = require('cors')
server.use(cors()) 

const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 5000;

server.get('/', (req,res) => {
    res.send("API is running")
})

server.get('/api/articles', (req,res) => {
    res.json(articles);
})

server.get('/api/articles/:id', (req,res) => {
    const article = articles.find((n) => n._id === req.params.id);
    res.send(article);
    console.log(req.params);
});

server.listen(PORT,console.log(`server is working and listening on PORT ${PORT}`));
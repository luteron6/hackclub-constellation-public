const express = require('express');
const fs = require('fs');

const app = express()

//app.get('/', (req, res) => {
//    res.send("hello world!");
//});

//route :3000 to index.html
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

//route /api to constellation.json
app.get('/api', (req, res) => {
    const data = fs.readFileSync(__dirname + '/constellation.json');

    res.json(JSON.parse(data));
});

const port = 80;
app.listen(port, () => {
    console.log(`server started on port ${port}`);
});


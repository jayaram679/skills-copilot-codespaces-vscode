// Create web server
// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

app.use(bodyParser.json());

// Get all comments
app.get('/comments', (req, res) => {
    const comments = JSON.parse(fs.readFileSync(path.join(__dirname, 'comments.json')));
    res.send(comments);
});

// Add a comment
app.post('/comments', (req, res) => {
    const comments = JSON.parse(fs.readFileSync(path.join(__dirname, 'comments.json')));
    const newComment = req.body;
    comments.push(newComment);
    fs.writeFileSync(path.join(__dirname, 'comments.json'), JSON.stringify(comments));
    res.send(newComment);
});

// Start the web server
app.listen(port, () => {
    console.log(`Web server is running on http://localhost:${port}`);
});
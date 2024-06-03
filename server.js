const express = require('express');

// Data
const friends = [
    {
        id: 0,
        name: 'Nikola Tesla',
    },
    {
        id: 1,
        name: 'Sir Isaac Newton',
    },
    {
        id: 2,
        name: 'Albert Einstein',
    },
    {
        id: 3,
        name: 'Albert Einstein',
    }
];

const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware Function for logging
app.use((req, res, next) => {
    const start = Date.now();
    next();
    const end = Date.now() - start;
    console.log(`${req.method} ${req.url} ${end}ms`);
});

// Get all friends
app.get('/friends', (req, res) => {
    res.json(friends);
});

// Get friend by id
app.get('/friends/:id', (req, res) => {
    const id = Number(req.params.id);
    const friend = friends[id];
    if (friend) {
        res.status(200).json(friend);
    } else {
        res.status(404).json({
            error: "Data Not Exist"
        });
    }
});

// POST friend
app.post('/friends', (req, res) => {
    if (!req.body.name) {
        return res.status(400).json({
            error: "Missing Data"
        });
    }

    const newfriend = {
        id: friends.length,
        name: req.body.name
    };
    friends.push(newfriend);
    res.json(newfriend);
});

// Get messages
app.get('/messages', (req, res) => {
    res.send('<ul><li>Hello User</li></ul>');
});

// Post message
app.post('/messages', (req, res) => {
    console.log("Updating Messages...");
    res.sendStatus(200);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});

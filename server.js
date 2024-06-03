const express = require('express')

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
    }
];
const app = express();
const PORT = 3000
// app.get('/', (req, res) => {
//     res.send("Hello")
// });
app.get('/friends', (req, res) => {
    res.json(friends)
});

app.get('/messages', (req, res) => {
    res
        .send('<ul><li>Hello USer</li></ul>')
})
app.post('/messages', (req, res) => {
    console.log("Updateing Messages...")
})
app.get('/friends/:friendsId', (req, res) => {
    const friendsId = Number(req.params.friendsId)
    const friend = friends[friendsId];
    console.log(friend)
    if (friend) {
        res.status(200).json(friend)
    } else {
        res.status(404).json({
            error: "Data Not Exist"
        });
    }
})
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
})
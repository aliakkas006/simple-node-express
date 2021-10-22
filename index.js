const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('This is from node with express js and nodemon auto update server port');
});

const users = [
    { id: 0, name: 'Ali', email: 'ali@gmail.com', phone: '0132463245' },
    { id: 1, name: 'Anis', email: 'anis@gmail.com', phone: '0132463245' },
    { id: 2, name: 'Alauddin', email: 'alauddin@gmail.com', phone: '0132463245' },
    { id: 3, name: 'Rifat', email: 'rifat@gmail.com', phone: '0132463245' },
    { id: 4, name: 'Arif', email: 'arif@gmail.com', phone: '0132463245' }
]

app.get('/users', (req, res) => {
    const search = req.query.search;

    // Use query parameter
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    } else {
        res.send(users);
    }
});

// post method
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    res.json(newUser);
})

// dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
});

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('this is fazli');
})

app.listen(port, () => {
    console.log(`Listening to port: ${port}`);
});
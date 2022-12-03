const express = require('express');
const PORT = 3000;
const app = express();

const now = new Date();

const persons = [
    {
        "id": 1,
        "name": "Arto Hellas",
        "number": "040-123456"
    },
    {
        "id": 2,
        "name": "Ada Lovelace",
        "number": "39-44-5323523"
    },
    {
        "id": 3,
        "name": "Dan Abramov",
        "number": "12-43-234345"
    },
    {
        "id": 4,
        "name": "Mary Poppendieck",
        "number": "39-23-6423122"
    }
]


app.get('/', (req, res) => {
    res.send('<h1>Server is running on port 3000!</h1>')
});

app.get('/api/persons', (req, res) => {
    res.send(persons);
});

app.get('/info', (req, res) => {
    res.write(`There are ${persons.length} entries in the database`)
    res.end(`${now}`);
})

app.get('/api/persons/:id', (req, res) => {
    const personToReturn = persons.filter(person => person.id === Number(req.params.id))
    res.send(personToReturn);
})

app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`);
});



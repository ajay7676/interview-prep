// const express = require('express')

import express from "express";

const app = express();
// app.use(express.static('dist'))

// app.get("/", (req, res) => {
//   res.send("Server is ready");
// });

// git a list of 5 joke

app.get('/api/jokes', (req,res) =>{
    const jokes=[
        {
            id: 1,
            title: 'A Joke',
            content: 'This is a joke'
        },
        {
            id: 2,
            title: 'Another Joke',
            content: 'This is another joke'
        },
        {
            id: 3,
            title: 'thrid Joke',
            content: 'This is thrid joke'
        },
        {
            id: 4,
            title: 'Fourth Joke',
            content: 'This is Fourth joke'
        },
        {
            id: 5,
            title: 'Fivth Joke',
            content: 'This is five joke'
        },
    ]
    res.send(jokes)


})

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Serve at htttP://localhost:${port}`);
});

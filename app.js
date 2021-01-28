const mongoose = require('mongoose');
const validator = require('validator');
const express = require('express');
const User = require('./models/student');
const app = express();
app.use(express.json());
const port = process.env.PORT || 8000;
require('./db/conn');
require('./models/student');
const studentRouter = require('./routers/user');

app.get('/', (req, res) => {
    try {
        res.status(200).send('Hello Honey Bunny Sunny');

    } catch (error) {
        res.status(400).send(error);
    }
});

// app.post('/users', (req, res) => {

//     const user = new User(req.body);
//     user.save().then(() => {
//         console.log(req.body);
//         res.status(200).send('Hello my dear friends');
//     }).catch((e) => {
//         res.status(400).send('Error caught');
//     })
// });


app.use(studentRouter);




app.listen(port, () => {
    console.log(`Listening to port ${port} `);
})
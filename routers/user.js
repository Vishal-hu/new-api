const express = require('express');
const router = new express.Router();
const User = require('../models/student');
// router.get('/use', (req, res) => {
//     res.send("Hello guys");
// })

router.post('/users', async(req, res) => {
    try {
        const user = new User(req.body);
        const userData = await user.save();
        res.status(200).send(userData);
        console.log(userData)
    } catch (error) {
        res.status(400).send(error);
    }
});

router.get('/users', async(req, res) => {
    try {
        const userData = await User.find();
        res.status(200).send(userData);
    } catch (error) {
        res.status(400).send(error);
    }
})

router.get('/users/:id', async(req, res) => {
    try {
        const _id = req.params.id;
        const studentData = await User.findById(_id);
        if (!studentData) {
            return res.status(400).send();
        } else {
            res.send(studentData);
            console.log(studentData);
        }
    } catch (error) {
        res.status(500).send()
    }
});

router.patch('/users/:id', async(req, res) => {
    try {
        const _id = req.params.id;
        const updateDate = await User.findByIdAndUpdate(_id, req.body, {
            new: true
        });
        res.status(200).send(updateDate);
    } catch (error) {
        res.status(404).send(error);
    }
});
router.delete('/users/:id', async(req, res) => {
    try {
        const _id = req.params.id;
        const deleteData = await User.findByIdAndDelete(_id);
        if (!req.params.id) {
            res.status(404).send();
        } else {
            res.status(200).send(deleteData)
        }
    } catch (error) {
        res.status(404).send(error);
    }
});
module.exports = router;
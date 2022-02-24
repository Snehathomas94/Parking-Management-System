const express = require('express');
const router = express.Router();



const { parking } = require('../models/parking');

//Get all vehicle numbers

router.get('/api/parking', (req,res) => {
    parking.find({}, (err,data) => {
        if(!err) {
            res.send(data);
        } else {
            console.log(err);
        }

    });

});

module.exports = router;

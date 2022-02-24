//later refer parkingSystem.html

const mongoose = require('mongoose');

//Parking schema

const parking = mongoose.model('parking' , {
    vehicleNo: {
        type:String,
        required:true
    },
    parkingSlot: {
        type:String,
        required:true
    },
    entryTime: {
        type:String,
        required:true
    },
});

module.exports = { parking }
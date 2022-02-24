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

//Add a parking entry

router.post('/api/parking/add', (req,res) => {
const par = new parking({
vehicleNo: req.body.vehicleNo,
parkingSlot : req.body.parkingSlot,
entryTime : req.body.entryTime
});
par.save((err,data) => {
res.status(200).json({ code:200, message: 'Parking Entry added successfully',
addparking:data })
});
});

// To get a single parking slot

router.get('/api/parking/:id', (req,res) =>{
parking.findById(req.params.id, (err,data) => {
if(!err){
res.send(data);
}
else{
console.log(err);

}

});

});

//Update parking slot

router.put('/api/parking/edit/:id', (req,res) => {

const par = {
vehicleNo: req.body.vehicleNo,
parkingSlot : req.body.parkingSlot,
entryTime : req.body.entryTime
};

parking.findByIdAndUpdate(req.params.id, { $set:par },{ new:true } ,(err,data) => {
if(!err){
res.status(200).json({ code:200, message: 'Parking System has been successfully updated', 
updateparking : data })
} else{
console.log(err);
}
});

});

//Delete parking slots

router.delete('/api/parking/:id', (req,res) => {
parking.findByIdAndRemove(req.params.id, (err,data) => {
if(!err){
res.status(200).json({ code:200, message: 'Parking Entry has been successfully deleted',
deleteParking: data });
}
});

});

module.exports = router;



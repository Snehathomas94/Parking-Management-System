const router = require("express").Router();
const parking = require("../models/parking");
const {verifyToken} = require("../validation")

// Create new product

router.post("/", verifyToken,(req, res) => {
    const data = req.body;
    parking.insertMany(data)
        .then(data => { res.status(201).send(data); })
        .catch(err => { res.status(500).send({ message: err.message }); });
});

router.get("/parkingAlloted", (req, res) => {
    parking.find({parkingAlloted:true})
       .then(data => { res.status(201).send(data); })
       .catch(err => { res.status(500).send({ message: err.message }); });
});

router.get("/", (req, res) => {
    parking.find()
       .then(data => { res.status(201).send(data); })
       .catch(err => { res.status(500).send({ message: err.message }); });
});
//Getting vehicleNumber by id
// /api/parking/id

router.get("/:id", (req, res) => {
    parking.findById(req.params.id)
       .then(data => { res.status(201).send(data); })
       .catch(err => { res.status(500).send({ message: err.message }); });
});

//Update specific parking entries

router.put("/:id", (req,res) => {

    const id = req.params.id;

    parking.findByIdAndUpdate(id, req.body)
    .then(data => {
        if (!data)
        {
            res.status(404).send({message: "Cannot update product with id=" +id})
        }
        else
        {
           res.send({message: "Entry found"})
        }

})

.catch(err => {res.status(500).send({message: "Error updating entry with id" +id }); })
});

//Delete an entry----> delete

router.delete("/:id", verifyToken,(req,res) => {

    const id = req.params.id;

    parking.findByIdAndDelete(id)
    .then(data => {
        if (!data)
        {
            res.status(404).send({message: "Cannot delete product with id=" +id})
        }
        else
        {
           res.send({message: "Deleted successfully"})
        }

})

.catch(err => {res.status(500).send({message: "Error deleting entry with id" +id }); })
});


module.exports = router;

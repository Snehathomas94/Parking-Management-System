const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let parkingSchema = new Schema(
    {
        
        vehicleNumber: {type:String},
        parkingSlot : {type:String},
        entryTime :{type:String},
        exitTime : {type:String},
        date: { type: String},
        fare : {type:Number},
        parkingAlloted : {type:Boolean}
    }
);

module.exports = mongoose.model("parking", parkingSchema);

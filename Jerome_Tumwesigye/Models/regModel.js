//Invoke mongoose package
const mongoose = require("mongoose");

// schema definition
const entrySchema = new mongoose.Schema({
    surName: {
        type: String,
        required: 'Please Enter Surname'
    },
    givenName: {
        type: String,
        unique: true,
        required: 'Please Enter givenName'
    },
    dob: {
        type: String,
        required: 'Please Enter bate of birth'

    },
    
    residence: {
       type: String,
       required:'Please Enter givenName'
    },
    phone: {
        type: Number,
        required: 'Please Enter phone number'
    },
    email: {
        type: String,
        required: 'Please Enter Email Address'
    },
});

// Creating an instance of the model and exporting it
module.exports = mongoose.model("StudentDetail", entrySchema)
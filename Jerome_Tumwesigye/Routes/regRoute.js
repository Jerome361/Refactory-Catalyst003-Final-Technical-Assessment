//Invoke packages
const express = require('express');
const StudentDetail = require('../models/regModel')
const router = express.Router();

//Render the registration form on the path /register
router.get('/', (req, res)=>{
    res.render('form')
})


//Route for submitting information form the registration form
router.post('/', (req, res) => {
    //Create an instance of the model
    const myData = new StudentDetail(req.body)
    myData.save()
        .then(item => {
            StudentDetail.find().then(
                items => {
                    console.log("Data Saved to Database Successfully");
                    //Render the Registered students upon saving to db
                    res.render('list', { studentDetails: items })
                })
        })
        //Incase it cannot save to db
        .catch(err => {
            console.log(err);
            res.status(400).send("unable to save to database");
        });
});


//export routes.
module.exports = router;

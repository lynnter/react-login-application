const express = require('express')
const router = express.Router()
const signUpTemplateCopy = require('../models/SignUpModels')

//sign in 
router.post('/signup', (req, res) => {
    //when it runs will create a new instance of Schema
    const signedUpUser = new signUpTemplateCopy({
        fullName: req.body.fullName,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
    signedUpUser.save()
    .then(data => {
        res.json(data)
    })
    .catch(error => {
        res.json(error)
    })
})

module.exports = router
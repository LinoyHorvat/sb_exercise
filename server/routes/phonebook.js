const router = require('express').Router(); 

const {getAllPhonebook} = require('../controllers/phonebook')

module.exports =router;

router.get("/", getAllPhonebook)
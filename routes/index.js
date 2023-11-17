const router = require('express').Router(); 

//router.use('/', require('./swagger'));

//router.use("/books", require('./book'));
router.use("/clients", require('./client'));


module.exports = router;
const router = require('express').Router(); 

router.use('/', require('./swagger'));

router.use("/clients", require('./client'));
router.use("/books", require('./book'));

module.exports = router;
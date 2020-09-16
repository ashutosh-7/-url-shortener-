const express= require('express');
const index = require('.././controllers/index');
const router= express.Router();

router.get('/',index.getHome);
router.post('/',index.postURL);

module.exports = router;
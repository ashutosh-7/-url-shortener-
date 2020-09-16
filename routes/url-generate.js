const express= require('express');
const index = require('.././controllers/index');
const router= express.Router();

router.post('/url-generate',index.postURL);

module.exports = router;
const express = require('express');
const router = express.Router();
const {updateInfo, getChannelInfo} = require('../../controllers/channel');


//Update description and category info
router.put('/user/channel/:id', updateInfo)
router.get('/user/channel/:id', getChannelInfo)
module.exports = router
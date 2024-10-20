var express = require('express');
var path = require('path');
var router = express.Router();

router.get('/vpn', (req, res) => {
    res.sendFile(path.resolve('/views/index.html'))
})
router.get('/', (req, res) => {
    res.sendFile(path.resolve('/views/api.html'))
})
module.exports = router

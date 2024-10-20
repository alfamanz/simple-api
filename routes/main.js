var express = require('express');
var router = express.Router();

router.get('/vpn', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})
router.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/api.html')
})
module.exports = router
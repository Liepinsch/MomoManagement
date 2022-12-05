'use strict';
var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET home page. */
router.get('/', function (req, res) {
    var url = 'https://priceapi.mobox.io/kline/usdt?coins=[%22mbox%22,%22mec%22]'
    axios.get(url).then(response => {
        res.render('trends', { title: 'Trends', prices: JSON.stringify(response.data.data) });
    })
});

module.exports = router;


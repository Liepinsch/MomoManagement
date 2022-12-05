'use strict';
var express = require('express');
var router = express.Router();
var axios = require('axios');
var fs = require('fs');

/* GET home page. */
router.get('/', function (req, res) {
    var url = 'https://priceapi.mobox.io/kline/usdt?coins=[%22mbox%22,%22mec%22]'
    axios.get(url).then(response => {
        res.render('index', { title: 'Welcome', prices: JSON.stringify(response.data.data) });
    })
});

router.get('/getPrices', function (req, res) {

    fs.readFile('./data/prices.json', function (err, data) {
        if (err == null) {
            res.setHeader('content-type', 'application/json')
            res.type('application/json')
            res.send(data)
        }
    });
});

module.exports = router;


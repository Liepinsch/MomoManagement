'use strict';
var express = require('express');
var router = express.Router();
var axios = require('axios');
var fs = require('fs');

/* GET home page. */
router.get('/', function (req, res) {
    var url = 'https://priceapi.mobox.io/kline/usdt?coins=[%22mbox%22,%22mec%22]'
    axios.get(url).then(response => {
        res.render('momos', { title: 'Momo Management', prices: JSON.stringify(response.data.data) });
    })
   
});

/* GET momoimage file names */
router.get('/getMomoFileArray', function (req, res) {

    fs.readdir('./public/images/momo', function (err, filenames) {
        if (err == null) {
            var arrayRare = []
            var arrayEpic = []
            filenames.forEach(function (filename) {
                if (filename.includes('rare')) {
                    arrayRare.push({ "name": filename })
                } else if (filename.includes('epic')) {
                    arrayEpic.push({ "name": filename })
                }
                
            });
            res.setHeader('content-type', 'application/json')
            res.type('application/json')
            res.send(arrayRare.concat(arrayEpic))
        }
    });
    
    
});

module.exports = router;


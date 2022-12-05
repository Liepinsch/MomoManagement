'use strict';
var debug = require('debug')('my express app');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs = require('fs');
var axios = require('axios');
var helpers = require('./public/javascripts/shelpers');
//var sass = require('node-sass');

var routes = require('./routes/index');
var users = require('./routes/users');
var momos = require('./routes/momos');
var trends = require('./routes/trends');
var game = require('./routes/game');
var clash = require('./routes/clash');
var defence = require('./routes/defence');
var tockenmaster = require('./routes/tockenmaster');
var blockbrawler = require('./routes/blockbrawler');
var chainz = require('./routes/chainz');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');



// uncomment after placing your favicon in /public
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/momos', momos);
app.use('/trends', trends);
app.use('/game', game);
app.use('/clash', clash);
app.use('/defence', defence);
app.use('/tockenmaster', tockenmaster);
app.use('/blockbrawler', blockbrawler);
app.use('/chainz', chainz);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

app.set('port', process.env.PORT || 3000);


// using sass
const mscss = path.resolve(__dirname, 'scss', 'custom.scss');
const mcss = path.resolve(__dirname, 'public/stylesheets', 'custom.css');

//sass.render({
//    file: mscss,
//    outputStyle: 'compact', //compressed | nested | expanded | compact
//    outFile: mcss,
//    sourceMap: true, // or an absolute or relative (to outFile) path
//    }, function (err, result) {
//        if (err) throw err;
//        console.log('scss render completed');

//        fs.writeFile(mcss, result.css, function (err) {
//            if (!err) {
//                console.log('css file created');
//            }
//        });
//});

setInterval(function () {
    var url = 'https://priceapi.mobox.io/kline/usdt?coins=[%22mbox%22,%22mec%22]';
    var path = 'data/prices.json';
    axios.get(url).then(response => {
        helpers.jsonUpdate(path, response.data.data)
    })
}, 60000);

var server = app.listen(app.get('port'), function () {
    debug('Express server listening on port ' + server.address().port);
});

const fs = require("fs");

module.exports = {
    jsonReader: function (filePath, cb) {
        fs.readFile(filePath, 'utf8', (err, fileData) => {
            if (err) {
                return cb && cb(err);
            }
            try {               
                const object = JSON.parse(fileData);
                return cb && cb(null, object);
            } catch (err) {
                return cb && cb(err);
            }
        });
    },
    createDailyPrice: function () {
        var price = new Object()
        var candle = new Object()
        var candleMEC = new Object()
        candle.o = 0.0
        candle.h = 0.0
        candle.l = 0.0
        candle.c = 0.0
        candleMEC.o = 0.0
        candleMEC.h = 0.0
        candleMEC.l = 0.0
        candleMEC.c = 0.0
        price.mbox = candle
        price.mec = candleMEC
        price.date = new Date().getDate() + '.' + (new Date().getMonth() + 1) + '.' + new Date().getFullYear()
        price.ts = Math.floor(Date.now() / 1000)
        return price
    },
    jsonUpdate: function (filePath, actPrice) {
        this.jsonReader(filePath, (err, saved) => {
            if (err) {
                console.log("Error reading file: ", err);
                return;
            }
            var priceArray = []
            if (saved) {
                priceArray = saved
                var today = new Date().getDate() + '.' + (new Date().getMonth() + 1) + '.' + new Date().getFullYear()
                if (priceArray[0].date == today) {
                    priceArray[0].mbox.c = parseFloat(actPrice.mbox.price)
                    priceArray[0].mbox.h = priceArray[0].mbox.h < parseFloat(actPrice.mbox.price) ? parseFloat(actPrice.mbox.price) : priceArray[0].mbox.h
                    priceArray[0].mbox.l = priceArray[0].mbox.l > parseFloat(actPrice.mbox.price) ? parseFloat(actPrice.mbox.price) : priceArray[0].mbox.l
                    priceArray[0].mec.c = parseFloat(actPrice.mec.price)
                    priceArray[0].mec.h = priceArray[0].mec.h < parseFloat(actPrice.mec.price) ? parseFloat(actPrice.mec.price) : priceArray[0].mec.h
                    priceArray[0].mec.l = priceArray[0].mec.l > parseFloat(actPrice.mec.price) ? parseFloat(actPrice.mec.price) : priceArray[0].mec.l
                    priceArray[0].ts = new Date().toLocaleString()
                } else {
                    var todayCandle = this.createDailyPrice()
                    todayCandle.mbox.c = parseFloat(actPrice.mbox.price)
                    todayCandle.mbox.h = parseFloat(actPrice.mbox.price)
                    todayCandle.mbox.l = parseFloat(actPrice.mbox.price)
                    todayCandle.mbox.o = parseFloat(actPrice.mbox.price)
                    todayCandle.mec.c = parseFloat(actPrice.mec.price)
                    todayCandle.mec.h = parseFloat(actPrice.mec.price)
                    todayCandle.mec.l = parseFloat(actPrice.mec.price)
                    todayCandle.mec.o = parseFloat(actPrice.mec.price)
                    todayCandle.ts = new Date().toLocaleString()
                    priceArray.unshift(todayCandle)
                }
            } else {
                var todayCandle = this.createDailyPrice()
                todayCandle.mbox.c = parseFloat(actPrice.mbox.price)
                todayCandle.mbox.h = parseFloat(actPrice.mbox.price)
                todayCandle.mbox.l = parseFloat(actPrice.mbox.price)
                todayCandle.mbox.o = parseFloat(actPrice.mbox.price)
                todayCandle.mec.c = parseFloat(actPrice.mec.price)
                todayCandle.mec.h = parseFloat(actPrice.mec.price)
                todayCandle.mec.l = parseFloat(actPrice.mec.price)
                todayCandle.mec.o = parseFloat(actPrice.mec.price)
                todayCandle.ts = new Date().toLocaleString()
                priceArray.unshift(todayCandle)
            }
            fs.writeFile(filePath, JSON.stringify(priceArray, null, 2), err => {
                if (err) console.log("Error writing file:", err);
            });
        });
    }
};




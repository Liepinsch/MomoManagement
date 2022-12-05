

function getPriceDataFromServer() {
    const Http = new XMLHttpRequest()
    Http.open("GET", '/getPrices')

    Http.onreadystatechange = (stateChange) => {
        if (Http.readyState === XMLHttpRequest.DONE) {
            const status = Http.status;
            if (status === 0 || (status >= 200 && status < 400)) {
                var sArray = JSON.parse(Http.responseText)
                createCandlestickChart("#priceMec", sArray, 'MBOX', 3)
                createCandlestickChart("#priceMbox", sArray, 'MEC', 4)
            }
        }

    }
    Http.send()
}

function getProductivityDataFromLocalStorage() {
    if (checkLocalstorage('productivity')) {
        var data = JSON.parse(localStorage.getItem('productivity'))
        createLineChart("feather", data, "Bird", 3)
        createLineChart("leather", data, "Beast", 3)
        createLineChart("pearl", data, "Fish", 3)
        createLineChart("ore", data, "Monster", 3)
        createLineChart("gold", data, "Epic", 3)
    }
}

function createDataForCandleStick(currency, array, precision) {
    var data = []
    array.forEach(function (element) {
        var candle = new Object()
        candle.x = new Date(element.date.split('.')[2], element.date.split('.')[1] - 1, element.date.split('.')[0])
        candle.y = [round(element[currency].o, precision), round(element[currency].h, precision), round(element[currency].l, precision), round(element[currency].c, precision)]
        data.push(candle)
    })
    return data
}

function createDataForLineChart(currency, array, precision) {
    var data = []
    array.forEach(function (element) {
        data.unshift(round(element[currency], precision))
    })
    return data
}

function createDatesForLineChart(array) {
    var dates = []
    array.forEach(function (element) {
        var index = array.indexOf(element)
        if (index % 2 == 0) {
            dates.unshift(element.date)
        } else {
            dates.unshift("")
        }
        
    })
    return dates
}

function createCandlestickChart(id, data, currency, precision) {
    var options = {
        series: [{
            data: createDataForCandleStick(currency.toLowerCase(), data, precision)
        }],
        chart: {
            type: 'candlestick',
            height: 350
        },
        title: {
            text: currency,
            align: 'left',
            style: {
                color: '#aaa'
            }
        },
        xaxis: {
            type: 'datetime',
            labels: {
                style: {
                    colors: '#aaa'
                }
            }
        },
        yaxis: {
            tooltip: {
                enabled: true
            },
            labels: {
                style: {
                    colors: '#aaa'
                },
                formatter: function (val, index) {
                    return val.toFixed(precision) + '$';
                }
            }
        },
        legend: {
            labels: {
                colors: '#aaa'
            }
        }
    };

    var chart = new ApexCharts(document.querySelector(id), options);
    chart.render();
}

function createLineChart(id, data, currency, precision) {
    var serie1 = createDataForLineChart(currency.toLowerCase(), data, precision)
    var serie2 = createDataForLineChart(currency.toLowerCase() + '_price', data, precision)
    var correctionS1 = 0.1
    var correctionS2 = 0.01

    var options = {
        chart: {
            height: 350,
            type: "line",
            stacked: false
        },
        title: {
            text: capitalizeFirstLetter(id),
            align: 'left',
            style: {
                color: '#aaa'
            }
        },
        dataLabels: {
            enabled: false
        },
        colors: ["#FF1654", "#247BA0"],
        series: [
            {
                name: "Rate",
                data: serie1,
            },
            {
                name: "Price",
                data: serie2,
            }
        ],            
        stroke: {
            width: [4, 4]
        },
        plotOptions: {
            bar: {
                columnWidth: "20%"
            }
        },
        xaxis: {
            labels: {
                style: {
                    colors: '#aaa'
                }
            },
            categories: createDatesForLineChart(data)
        },
        yaxis: [
            {
                axisTicks: {
                    show: true
                },
                axisBorder: {
                    show: true,
                    color: "#FF1654"
                },
                labels: {
                    style: {
                        colors: "#FF1654"
                    }
                },
                title: {
                    text: capitalizeFirstLetter(id) + ' Rate',
                    style: {
                        color: "#FF1654"
                    }
                },
                min: Math.min(...serie1) - correctionS1,
                max: Math.max(...serie1) + correctionS1
            },
            {
                opposite: true,
                axisTicks: {
                    show: true
                },
                axisBorder: {
                    show: true,
                    color: "#247BA0"
                },
                labels: {
                    style: {
                        colors: "#247BA0"
                    }
                },
                title: {
                    text: capitalizeFirstLetter(id) + ' Price',
                    style: {
                        color: "#247BA0"
                    }
                },
                min: Math.min(...serie2) - correctionS2,
                max: Math.max(...serie2) + correctionS2
            }
        ],
        tooltip: {
            shared: false,
            intersect: true,
            x: {
                show: false
            }
        },
        legend: {
            horizontalAlign: "left",
            offsetX: 40,
            labels: {
                colors: '#aaa'
            }
        }
    };

    var chart = new ApexCharts(document.getElementById(id), options);
    chart.render();
}

function round(value, digits) {
    var m = Math.pow(10, digits)
    return Math.round(value * m) / m
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


function createSummaryMomoTable() {

    var roi = 0.0

    if (checkLocalstorage('momoList')) {
        var momoList = JSON.parse(localStorage.getItem('momoList'))
        for (var i = 0; i < momoList.length; i++) {
            if (momoList[i].dailyROI != '' && momoList[i].dailyROI != undefined) {
                roi += parseFloat(momoList[i].dailyROI)
            }
        }
    }



    if (document.getElementById('summary_table')) {
        document.getElementById('summary_table').remove()
    }


    var table = document.createElement('table')
    table.setAttribute('id', 'summary_table')
    table.setAttribute('width', '100%')
    table.style.textAlign = 'left'
    table.style.verticalAlign = 'top'

    var tr = document.createElement('tr')
    var td = document.createElement('th')
    td.appendChild(document.createTextNode('1d ROI'))
    td.style.width = '12.5%'
    tr.appendChild(td)
    var td = document.createElement('th')
    td.appendChild(document.createTextNode('30d ROI'))
    td.style.width = '12.5%'
    tr.appendChild(td)
    var td = document.createElement('th')
    td.appendChild(document.createTextNode('60d ROI'))
    td.style.width = '12.5%'
    tr.appendChild(td)
    var td = document.createElement('th')
    td.appendChild(document.createTextNode('30d MEC'))
    td.style.width = '12.5%'
    tr.appendChild(td)
    var td = document.createElement('th')
    td.appendChild(document.createTextNode('30d USD'))
    td.style.width = '12.5%'
    tr.appendChild(td)
    table.appendChild(tr)
    var td = document.createElement('th')
    td.appendChild(document.createTextNode('Total Spend'))
    td.style.width = '12.5%'
    tr.appendChild(td)
    table.appendChild(tr)
    var td = document.createElement('th')
    td.appendChild(document.createTextNode('Earned'))
    td.style.width = '12.5%'
    tr.appendChild(td)
    table.appendChild(tr)
    var td = document.createElement('th')
    td.appendChild(document.createTextNode('d for ROI'))
    td.style.width = '12.5%'
    tr.appendChild(td)
    table.appendChild(tr)

    var tr = document.createElement('tr')
    tr.style.verticalAlign = 'top'

    var td = document.createElement('td')
    td.appendChild(document.createTextNode((Math.round(roi * 100) / 100) + ' MBOX'))
    tr.appendChild(td)

    var td = document.createElement('td')
    td.appendChild(document.createTextNode((Math.round(roi * 30 * 100) / 100) + ' MBOX'))
    tr.appendChild(td)

    var td = document.createElement('td')
    td.appendChild(document.createTextNode((Math.round(roi * 60 * 100) / 100) + ' MBOX'))
    tr.appendChild(td)
    if (checkLocalstorage('prices')) {
        var prices = JSON.parse(localStorage.getItem('prices'))
        var td = document.createElement('td')
        td.appendChild(document.createTextNode((Math.round(roi * 30.0 * 100.0 * prices.mbox / prices.mec) / 100) + ' MEC'))
        tr.appendChild(td)

        var td = document.createElement('td')
        td.appendChild(document.createTextNode((Math.round(roi * 30.0 * 100.0 * prices.mbox) / 100) + ' $'))
        tr.appendChild(td)

        var td = document.createElement('td')
        var momoList = JSON.parse(localStorage.getItem('momoList'))
        var spend = 0.0
        for (var i = 0; i < momoList.length; i++) {
            spend += parseFloat(momoList[i].price ?? 0) + parseFloat(momoList[i].upgradeUsd ?? 0) + parseFloat(momoList[i].upgradeMec ?? 0) * prices.mec + parseFloat(momoList[i].enchancement ?? 0) * prices.mec
        }
        td.appendChild(document.createTextNode((Math.round(spend * 100.0) / 100) + ' $'))
        tr.appendChild(td)

        var td = document.createElement('td')
        var input = document.createElement('input')
        input.setAttribute('type', 'number')
        input.setAttribute('class', 'form-control')
        input.style.width = '60%'
        input.style.display = 'inline-block'
        input.value = checkPropertyInLocalstorage('earnings', 'usd') ? JSON.parse(localStorage.getItem('earnings')).usd : 0.0
        input.onchange = function () {
            saveEarnings(this.value, 'usd')
        }
        td.appendChild(input)
        var btn = document.createElement('i')
        btn.setAttribute('class', 'fa-regular fa-square-plus fa-lg')
        btn.style.marginLeft = '-1em'
        btn.onclick = function (e) {
            createAddPopup(e, 'earnings', 'usd', 'earningsChanged')
        }       
        td.appendChild(btn)
        td.appendChild(createUnits('$'))

        var input = document.createElement('input')
        input.setAttribute('type', 'number')
        input.setAttribute('class', 'form-control')
        input.style.width = '60%'
        input.style.display = 'inline-block'
        input.value = checkPropertyInLocalstorage('earnings', 'mbox') ? JSON.parse(localStorage.getItem('earnings')).mbox : 0.0
        input.onchange = function () {
            saveEarnings(this.value, 'mbox')
        }
        td.appendChild(input)
        var btn = document.createElement('i')
        btn.setAttribute('class', 'fa-regular fa-square-plus fa-lg')
        btn.style.marginLeft = '-1em'
        btn.onclick = function (e) {
            createAddPopup(e, 'earnings', 'mbox', 'earningsChanged')
        }
        td.appendChild(btn)
        td.appendChild(createUnits('MBOX'))

        var input = document.createElement('input')
        input.setAttribute('type', 'number')
        input.setAttribute('class', 'form-control')
        input.style.width = '60%'
        input.style.display = 'inline-block'
        input.value = checkPropertyInLocalstorage('earnings', 'mec') ? JSON.parse(localStorage.getItem('earnings')).mec : 0.0
        input.onchange = function () {
            console.log(1)
            saveEarnings(this.value, 'mec')
        }
        td.appendChild(input)
        var btn = document.createElement('i')
        btn.setAttribute('class', 'fa-regular fa-square-plus fa-lg')
        btn.style.marginLeft = '-1em'
        btn.onclick = function (e) {
            createAddPopup(e, 'earnings', 'mec', 'earningsChanged')
        }
        td.appendChild(btn)
        td.appendChild(createUnits('MEC'))
        tr.appendChild(td)

        var td = document.createElement('td')
        var earnedUsd = 0.0
        var earnedMbox = 0.0
        var earnedMec = 0.0
        earnedUsd = checkPropertyInLocalstorage('earnings', 'usd') ? JSON.parse(localStorage.getItem('earnings')).usd : 0
        earnedMbox = checkPropertyInLocalstorage('earnings', 'mbox') ? JSON.parse(localStorage.getItem('earnings')).mbox : 0
        earnedMec = checkPropertyInLocalstorage('earnings', 'mec') ? JSON.parse(localStorage.getItem('earnings')).mec : 0
        var balance = spend - earnedMec * prices.mec - earnedMbox * prices.mbox - earnedUsd
        var result = Math.round(balance / (roi != 0 ? roi : 0.000001) * 100.0) / 100
        td.appendChild(document.createTextNode(result > 0 ? result + ' days' : 'yeeah!'))
        tr.appendChild(td)
    }
    table.appendChild(tr)

    document.getElementById('summary').appendChild(table)
}

function saveEarnings(value, property) {
    if (checkPropertyInLocalstorage('earnings', property)) {
        var earnings = JSON.parse(localStorage.getItem('earnings'))
        earnings[property] = value
        localStorage.setItem('earnings', JSON.stringify(earnings))
    } else {
        var earnings = new Object()
        earnings.usd = 0.0
        earnings.mec = 0.0
        earnings.mbox = 0.0
        earnings[property] = value
        localStorage.setItem('earnings', JSON.stringify(earnings))
    }
    console.log(4)
    document.dispatchEvent(new CustomEvent('earningsChanged'))
}



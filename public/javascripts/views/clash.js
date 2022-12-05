function addcmSeason() {

    if (checkLocalstorage('CM_game')) {
        var array = JSON.parse(localStorage.getItem('CM_game'))
        array.unshift(createcmSeason())
        localStorage.setItem('CM_game', JSON.stringify(array))
    } else {
        var array = []
        array.unshift(createcmSeason())
        localStorage.setItem('CM_game', JSON.stringify(array))
    }
    document.dispatchEvent(new CustomEvent('newcmSeasonAdded'))
}

function createcmTable() {
    if (checkLocalstorage('CM_game')) {
        var array = JSON.parse(localStorage.getItem('CM_game'))
        if (document.querySelector('[id*="cm_row"]')) {
            document.querySelectorAll('[id*="cm_row"]').forEach(element => {
                element.remove();
            })
        }

        for (var i = 0; i < array.length; i++) {
            createcmSeasonRow(array[i])
        }
    }
}

function createcmSeasonRow(row) {

    var table = document.getElementById('CM_game')

    if (document.getElementById('cm_row_' + row.n)) {
        document.getElementById('cm_row_' + row.n).remove()
    }
    if (document.getElementById('cm_row2_' + row.n)) {
        document.getElementById('cm_row2_' + row.n).remove()
    }
    if (document.getElementById('cm_row3_' + row.n)) {
        document.getElementById('cm_row3_' + row.n).remove()
    }
    var tr = document.createElement('tr')
    tr.setAttribute('id', 'cm_row_' + row.n)
    var td = document.createElement('th')
    td.rowSpan = 3
    td.style.backgroundColor = '#3a3f44'
    td.style.color = 'white'
    td.style.paddingLeft = '1em'
    td.style.border = '3px solid #272b30'
    td.appendChild(document.createTextNode('S' + row.n))
    tr.appendChild(td)

    var td = document.createElement('td')
    var input = document.createElement('input')
    input.setAttribute('type', 'number')
    input.setAttribute('class', 'form-control')
    input.style.width = '60%'
    input.style.display = 'inline-block'
    input.value = row.monumentMbox
    input.onchange = function () {
        saveValueinLocalStorage(this.parentNode.parentNode.id, this.value, 'CM_game', 'monumentMbox')
    }
    td.appendChild(input)
    td.appendChild(createUnits('MBOX'))
    tr.appendChild(td)

    var td = document.createElement('td')
    var input = document.createElement('input')
    input.setAttribute('type', 'number')
    input.setAttribute('class', 'form-control')
    input.style.width = '60%'
    input.style.display = 'inline-block'
    input.value = row.arenaMbox
    input.onchange = function () {
        saveValueinLocalStorage(this.parentNode.parentNode.id, this.value, 'CM_game', 'arenaMbox')
    }
    td.appendChild(input)
    td.appendChild(createUnits('MBOX'))
    tr.appendChild(td)

    var td = document.createElement('td')
    var input = document.createElement('input')
    input.setAttribute('type', 'number')
    input.setAttribute('class', 'form-control')
    input.style.width = '60%'
    input.style.display = 'inline-block'
    input.value = row.prosperityMbox
    input.onchange = function () {
        saveValueinLocalStorage(this.parentNode.parentNode.id, this.value, 'CM_game', 'prosperityMbox')
    }
    td.appendChild(input)
    td.appendChild(createUnits('MBOX'))
    tr.appendChild(td)

    var td = document.createElement('td')
    var input = document.createElement('input')
    input.setAttribute('type', 'number')
    input.setAttribute('class', 'form-control')
    input.style.width = '60%'
    input.style.display = 'inline-block'
    input.value = row.heroMbox
    input.onchange = function () {
        saveValueinLocalStorage(this.parentNode.parentNode.id, this.value, 'CM_game', 'heroMbox')
    }
    td.appendChild(input)
    td.appendChild(createUnits('MBOX'))
    tr.appendChild(td)

    var td = document.createElement('td')
    var input = document.createElement('input')
    input.setAttribute('type', 'number')
    input.setAttribute('class', 'form-control')
    input.style.width = '60%'
    input.style.display = 'inline-block'
    input.value = row.prestigeMbox
    input.onchange = function () {
        saveValueinLocalStorage(this.parentNode.parentNode.id, this.value, 'CM_game', 'prestigeMbox')
    }
    td.appendChild(input)
    td.appendChild(createUnits('MBOX'))
    tr.appendChild(td)

    var td = document.createElement('td')
    var input = document.createElement('input')
    input.setAttribute('type', 'number')
    input.setAttribute('class', 'form-control')
    input.style.width = '60%'
    input.style.display = 'inline-block'
    input.value = row.earningsMbox
    input.onchange = function () {
        saveValueinLocalStorage(this.parentNode.parentNode.id, this.value, 'CM_game', 'earningsMbox')
    }
    td.appendChild(input)
    td.appendChild(createUnits('MBOX'))
    tr.appendChild(td)

    var td = document.createElement('td')
    var input = document.createElement('input')
    input.setAttribute('type', 'number')
    input.setAttribute('class', 'form-control')
    input.style.width = '60%'
    input.style.display = 'inline-block'
    input.value = row.expenciesMbox
    input.onchange = function () {
        saveValueinLocalStorage(this.parentNode.parentNode.id, this.value, 'CM_game', 'expenciesMbox')
    }
    td.appendChild(input)
    td.appendChild(createUnits('MBOX'))
    tr.appendChild(td)

    var td = document.createElement('td')
    td.rowSpan = 3
    td.style.textAlign = 'center'
    td.appendChild(createcmSeasonResult(row.n))
    tr.appendChild(td)

    var td = document.createElement('td')
    td.style.textAlign = 'left'
    td.rowSpan = 3
    var i = document.createElement('i')
    i.setAttribute('class', 'fa-solid fa-trash-can fa-xl')

    i.onclick = function () {
        deletecmSeason(this.parentNode.parentNode.id, 'CM_game')
    }
    td.appendChild(i)
    tr.appendChild(td)

    table.appendChild(tr)

    var tr = document.createElement('tr')
    tr.setAttribute('id', 'cm_row2_' + row.n)

    var td = document.createElement('td')
    var input = document.createElement('input')
    input.setAttribute('type', 'number')
    input.setAttribute('class', 'form-control')
    input.style.width = '60%'
    input.style.display = 'inline-block'
    input.value = row.monumentMec
    input.onchange = function () {
        saveValueinLocalStorage(this.parentNode.parentNode.id, this.value, 'CM_game', 'monumentMec')
    }
    td.appendChild(input)
    td.appendChild(createUnits('MEC'))
    tr.appendChild(td)

    var td = document.createElement('td')
    var input = document.createElement('input')
    input.setAttribute('type', 'number')
    input.setAttribute('class', 'form-control')
    input.style.width = '60%'
    input.style.display = 'inline-block'
    input.value = row.arenaMec
    input.onchange = function () {
        saveValueinLocalStorage(this.parentNode.parentNode.id, this.value, 'CM_game', 'arenaMec')
    }
    td.appendChild(input)
    td.appendChild(createUnits('MEC'))
    tr.appendChild(td)

    var td = document.createElement('td')
    var input = document.createElement('input')
    input.setAttribute('type', 'number')
    input.setAttribute('class', 'form-control')
    input.style.width = '60%'
    input.style.display = 'inline-block'
    input.value = row.prosperityMec
    input.onchange = function () {
        saveValueinLocalStorage(this.parentNode.parentNode.id, this.value, 'CM_game', 'prosperityMec')
    }
    td.appendChild(input)
    td.appendChild(createUnits('MEC'))
    tr.appendChild(td)

    var td = document.createElement('td')
    var input = document.createElement('input')
    input.setAttribute('type', 'number')
    input.setAttribute('class', 'form-control')
    input.style.width = '60%'
    input.style.display = 'inline-block'
    input.value = row.heroMec
    input.onchange = function () {
        saveValueinLocalStorage(this.parentNode.parentNode.id, this.value, 'CM_game', 'heroMec')
    }
    td.appendChild(input)
    td.appendChild(createUnits('MEC'))
    tr.appendChild(td)

    var td = document.createElement('td')
    var input = document.createElement('input')
    input.setAttribute('type', 'number')
    input.setAttribute('class', 'form-control')
    input.style.width = '60%'
    input.style.display = 'inline-block'
    input.value = row.prestigeMec
    input.onchange = function () {
        saveValueinLocalStorage(this.parentNode.parentNode.id, this.value, 'CM_game', 'prestigeMec')
    }
    td.appendChild(input)
    td.appendChild(createUnits('MEC'))
    tr.appendChild(td)

    var td = document.createElement('td')
    var input = document.createElement('input')
    input.setAttribute('type', 'number')
    input.setAttribute('class', 'form-control')
    input.style.width = '60%'
    input.style.display = 'inline-block'
    input.value = row.earningsMec
    input.onchange = function () {
        saveValueinLocalStorage(this.parentNode.parentNode.id, this.value, 'CM_game', 'earningsMec')
    }
    td.appendChild(input)
    td.appendChild(createUnits('MEC'))
    tr.appendChild(td)

    var td = document.createElement('td')
    var input = document.createElement('input')
    input.setAttribute('type', 'number')
    input.setAttribute('class', 'form-control')
    input.style.width = '60%'
    input.style.display = 'inline-block'
    input.value = row.expenciesMec
    input.onchange = function () {
        saveValueinLocalStorage(this.parentNode.parentNode.id, this.value, 'CM_game', 'expenciesMec')
    }
    td.appendChild(input)
    td.appendChild(createUnits('MEC'))
    tr.appendChild(td)

    table.appendChild(tr)


    var tr = document.createElement('tr')
    tr.setAttribute('id', 'cm_row3_' + row.n)


    var td = document.createElement('td')
    tr.appendChild(td)

    var td = document.createElement('td')
    var input = document.createElement('input')
    input.setAttribute('type', 'text')
    input.setAttribute('class', 'form-control')
    input.value = row.arenaRes
    input.onchange = function () {
        saveValueinLocalStorage(this.parentNode.parentNode.id, this.value, 'CM_game', 'arenaRes')
    }
    td.appendChild(input)
    tr.appendChild(td)

    var td = document.createElement('td')
    var input = document.createElement('input')
    input.setAttribute('type', 'text')
    input.setAttribute('class', 'form-control')
    input.value = row.prosperityRes
    input.onchange = function () {
        saveValueinLocalStorage(this.parentNode.parentNode.id, this.value, 'CM_game', 'prosperityRes')
    }
    td.appendChild(input)
    tr.appendChild(td)

    var td = document.createElement('td')
    var input = document.createElement('input')
    input.setAttribute('type', 'text')
    input.setAttribute('class', 'form-control')
    input.value = row.heroRes
    input.onchange = function () {
        saveValueinLocalStorage(this.parentNode.parentNode.id, this.value, 'CM_game', 'heroRes')
    }
    td.appendChild(input)
    tr.appendChild(td)

    var td = document.createElement('td')
    var input = document.createElement('input')
    input.setAttribute('type', 'text')
    input.setAttribute('class', 'form-control')
    input.value = row.prestigeRes
    input.onchange = function () {
        saveValueinLocalStorage(this.parentNode.parentNode.id, this.value, 'CM_game', 'prestigeRes')
    }
    td.appendChild(input)
    tr.appendChild(td)

    var td = document.createElement('td')
    tr.appendChild(td)

    var td = document.createElement('td')
    tr.appendChild(td)

    table.appendChild(tr)
}

function saveValueinLocalStorage(id, value, item, property) {
    var array = JSON.parse(localStorage.getItem(item))
    for (var i = 0; i < array.length; i++) {
        if (array[i].n == id.split('_')[2]) {
            array[i][property] = value
            localStorage.setItem(item, JSON.stringify(array))

        }
    }

    document.dispatchEvent(new CustomEvent('cmValueChanged', { detail: id.split('_')[2] }))
}

function deletecmSeason(id, item) {
    var array = JSON.parse(localStorage.getItem(item))
    for (var i = 0; i < array.length; i++) {
        if (array[i].n == id.split('_')[2]) {
            var index = array.indexOf(array[i])
            array.splice(index, 1)
            localStorage.setItem(item, JSON.stringify(array))

        }
    }

    document.dispatchEvent(new CustomEvent('seasoncmDeleted'))
}

function createcmSeasonResult(id) {

    if (checkLocalstorage('CM_game')) {
        var array = JSON.parse(localStorage.getItem('CM_game'))
        for (var i = 0; i < array.length; i++) {
            if (array[i].n == id) {
                var prices = JSON.parse(localStorage.getItem('prices'))
                var row = array[i]
                var mbox = (parseFloat(row.monumentMbox) + parseFloat(row.arenaMbox) + parseFloat(row.prosperityMbox) + parseFloat(row.heroMbox) + parseFloat(row.prestigeMbox) + parseFloat(row.earningsMbox) - parseFloat(row.expenciesMbox)) * parseFloat(prices.mbox)
                var mec = (parseFloat(row.monumentMec) + parseFloat(row.arenaMec) + parseFloat(row.prosperityMec) + parseFloat(row.heroMec) + parseFloat(row.prestigeMec) + parseFloat(row.earningsMec) - parseFloat(row.expenciesMec)) * parseFloat(prices.mec)
                var usd = Math.round((mbox + mec) * 100) / 100

                var div = document.createElement('div')
                div.setAttribute('id', 'cmSeasonResult' + id)
                div.style.color = usd > 0 ? 'green' : usd < 0 ? 'red' : 'yellow'
                div.style.fontWeight = 'bold'
                div.appendChild(document.createTextNode(usd + '$'))

                if (document.getElementById('cmSeasonResult' + array[i].n)) {
                    document.getElementById('cmSeasonResult' + array[i].n).replaceWith(div)
                }

                return div
            }
        }
    }

}

function createcmSeason() {
    var season = new Object()
    season.n = 1
    if (checkLocalstorage('CM_game')) {
        var array = JSON.parse(localStorage.getItem('CM_game'))
        if (array.length > 0 && array[0].hasOwnProperty('n')) {
            season.n = array[0].n + 1
        }  
    }
    season.monumentMbox = 0.0
    season.monumentMec = 0.0
    season.arenaMbox = 0.0
    season.arenaMec = 0.0
    season.prosperityMbox = 0.0
    season.prosperityMec = 0.0
    season.heroMbox = 0.0
    season.heroMec = 0.0
    season.prestigeMbox = 0.0
    season.prestigeMec = 0.0
    season.earningsMbox = 0.0
    season.earningsMec = 0.0
    season.expenciesMbox = 0.0
    season.expenciesMec = 0.0
    season.prosperityRes = 0.0
    season.arenaRes = 0.0
    season.heroRes = 0.0
    season.prestigeRes = 0.0

    return season
}
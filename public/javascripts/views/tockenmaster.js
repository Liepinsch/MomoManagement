function addTMSeason() {

    if (checkLocalstorage('TM_game')) {
        var array = JSON.parse(localStorage.getItem('TM_game'))
        array.unshift(createTMSeason())
        localStorage.setItem('TM_game', JSON.stringify(array))
    } else {
        var array = []
        array.unshift(createTMSeason())
        localStorage.setItem('TM_game', JSON.stringify(array))
    }
    document.dispatchEvent(new CustomEvent('newTMSeasonAdded'))
}

function createTMTable() {
    if (checkLocalstorage('TM_game')) {
        var array = JSON.parse(localStorage.getItem('TM_game'))
        if (document.querySelector('[id*="TM_row"]')) {
            document.querySelectorAll('[id*="TM_row"]').forEach(element => {
                element.remove();
            })
        }

        for (var i = 0; i < array.length; i++) {
            createTMSeasonRow(array[i])
            createTMSeasonResult(array[i].n)
        }
    }
}

function createTMSeasonRow(row) {
    var table = document.getElementById('TM_game')

    if (document.getElementById('TM_row_' + row.n)) {
        document.getElementById('TM_row_' + row.n).remove()
    }
    if (document.getElementById('TM_row2_' + row.n)) {
        document.getElementById('TM_row2_' + row.n).remove()
    }
    if (document.getElementById('TM_row3_' + row.n)) {
        document.getElementById('TM_row3_' + row.n).remove()
    }

    var tr = document.createElement('tr')
    tr.setAttribute('id', 'TM_row_' + row.n)
    var td = document.createElement('th')
    td.rowSpan = 3
    td.style.backgroundColor = '#3a3f44'
    td.style.color = 'white'
    td.style.paddingLeft = '1em'
    td.style.border = '3px solid #272b30'
    td.appendChild(document.createTextNode('S' + row.n))
    tr.appendChild(td)

    var td = document.createElement('td')
    tr.appendChild(td)

    var td = document.createElement('td')
    var input = document.createElement('input')
    input.setAttribute('type', 'number')
    input.setAttribute('class', 'form-control')
    input.style.width = '60%'
    input.style.display = 'inline-block'
    input.value = row.plunderMbox
    input.onchange = function () {
        saveValueinLocalStorage(this.parentNode.parentNode.id, this.value, 'TM_game', 'plunderMbox')
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
    input.value = row.goldMbox
    input.onchange = function () {
        saveValueinLocalStorage(this.parentNode.parentNode.id, this.value, 'TM_game', 'goldMbox')
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
        saveValueinLocalStorage(this.parentNode.parentNode.id, this.value, 'TM_game', 'earningsMbox')
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
        saveValueinLocalStorage(this.parentNode.parentNode.id, this.value, 'TM_game', 'expenciesMbox')
    }
    td.appendChild(input)
    td.appendChild(createUnits('MBOX'))
    tr.appendChild(td)

    var td = document.createElement('td')
    td.rowSpan = 3
    td.style.textAlign = 'center'
    td.appendChild(createTMSeasonResult(row.n))
    tr.appendChild(td)

    var td = document.createElement('td')
    td.style.textAlign = 'left'
    td.rowSpan = 3
    var i = document.createElement('i')
    i.setAttribute('class', 'fa-solid fa-trash-can fa-xl')

    i.onclick = function () {
        deleteTMSeason(this.parentNode.parentNode.id, 'TM_game')
    }
    td.appendChild(i)
    tr.appendChild(td)

    table.appendChild(tr)

    var tr = document.createElement('tr')
    tr.setAttribute('id', 'TM_row2_' + row.n)

    var td = document.createElement('td')
    var input = document.createElement('input')
    input.setAttribute('type', 'number')
    input.setAttribute('class', 'form-control')
    input.style.width = '60%'
    input.style.display = 'inline-block'
    input.value = row.adventure
    input.onchange = function () {
        saveValueinLocalStorage(this.parentNode.parentNode.id, this.value, 'TM_game', 'adventure')
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
    input.value = row.plunderMec
    input.onchange = function () {
        saveValueinLocalStorage(this.parentNode.parentNode.id, this.value, 'TM_game', 'plunderMec')
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
    input.value = row.goldMec
    input.onchange = function () {
        saveValueinLocalStorage(this.parentNode.parentNode.id, this.value, 'TM_game', 'goldMec')
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
        saveValueinLocalStorage(this.parentNode.parentNode.id, this.value, 'TM_game', 'earningsMec')
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
        saveValueinLocalStorage(this.parentNode.parentNode.id, this.value, 'TM_game', 'expenciesMec')
    }
    td.appendChild(input)
    td.appendChild(createUnits('MEC'))
    tr.appendChild(td)

    table.appendChild(tr)


    var tr = document.createElement('tr')
    tr.setAttribute('id', 'TM_row3_' + row.n)


    var td = document.createElement('td')
    tr.appendChild(td)

    var td = document.createElement('td')
    var input = document.createElement('input')
    input.setAttribute('type', 'text')
    input.setAttribute('class', 'form-control')
    input.value = row.plunderRes
    input.onchange = function () {
        saveValueinLocalStorage(this.parentNode.parentNode.id, this.value, 'TM_game', 'plunderRes')
    }
    td.appendChild(input)
    tr.appendChild(td)

    var td = document.createElement('td')
    var input = document.createElement('input')
    input.setAttribute('type', 'text')
    input.setAttribute('class', 'form-control')
    input.value = row.goldRes
    input.onchange = function () {
        saveValueinLocalStorage(this.parentNode.parentNode.id, this.value, 'TM_game', 'goldRes')
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

    document.dispatchEvent(new CustomEvent('TMValueChanged', { detail: id.split('_')[2] }))
}

function deleteTMSeason(id, item) {
    var array = JSON.parse(localStorage.getItem(item))
    for (var i = 0; i < array.length; i++) {
        if (array[i].n == id.split('_')[2]) {
            var index = array.indexOf(array[i])
            array.splice(index, 1)
            localStorage.setItem(item, JSON.stringify(array))

        }
    }

    document.dispatchEvent(new CustomEvent('seasonTMDeleted'))
}

function createTMSeasonResult(id) {

    if (checkLocalstorage('TM_game')) {
        var array = JSON.parse(localStorage.getItem('TM_game'))
        for (var i = 0; i < array.length; i++) {
            if (array[i].n == id) {
                var prices = JSON.parse(localStorage.getItem('prices'))
                var row = array[i]
                var mbox = (parseFloat(row.plunderMbox) + parseFloat(row.goldMbox) + parseFloat(row.earningsMbox) - parseFloat(row.expenciesMbox)) * parseFloat(prices.mbox)
                var mec = (parseFloat(row.adventure) + parseFloat(row.goldMec) + parseFloat(row.plunderMec) + parseFloat(row.earningsMec) - parseFloat(row.expenciesMec)) * parseFloat(prices.mec)
                var usd = Math.round((mbox + mec) * 100) / 100

                var div = document.createElement('div')
                div.setAttribute('id', 'TMSeasonResult' + id)
                div.style.color = usd > 0 ? 'green' : usd < 0 ? 'red' : 'yellow'
                div.style.fontWeight = 'bold'
                div.appendChild(document.createTextNode(usd + '$'))

                if (document.getElementById('TMSeasonResult' + array[i].n)) {
                    document.getElementById('TMSeasonResult' + array[i].n).replaceWith(div)
                }

                return div
            }
        }
    }

}

function createTMSeason() {
    var season = new Object()
    season.n = 1
    if (checkLocalstorage('TM_game')) {
        var array = JSON.parse(localStorage.getItem('TM_game'))
        if (array.length > 0 && array[0].hasOwnProperty('n')) {
            season.n = array[0].n + 1
        }     
    }
    season.adventure = 0.0
    season.goldMbox = 0.0
    season.goldMec = 0.0
    season.plunderMbox = 0.0
    season.plunderMec = 0.0
    season.earningsMbox = 0.0
    season.earningsMec = 0.0
    season.expenciesMbox = 0.0
    season.expenciesMec = 0.0
    season.goldRes = 0.0
    season.plunderRes = 0.0

    return season
}
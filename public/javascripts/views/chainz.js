
function addCZSeason() {

    if (checkLocalstorage('CZ_game')) {
        var array = JSON.parse(localStorage.getItem('CZ_game'))
        array.unshift(createCZSeason())
        localStorage.setItem('CZ_game', JSON.stringify(array))
    } else {
        var array = []
        array.unshift(createCZSeason())
        localStorage.setItem('CZ_game', JSON.stringify(array))
    }
    document.dispatchEvent(new CustomEvent('newCZSeasonAdded'))
}

function createCZTable() {
    if (checkLocalstorage('CZ_game')) {
        var array = JSON.parse(localStorage.getItem('CZ_game'))
        if (document.querySelector('[id*="cz_row"]')) {
            document.querySelectorAll('[id*="cz_row"]').forEach(element => {
                element.remove();
            })
        }

        for (var i = 0; i < array.length; i++) {
            createCZSeasonRow(array[i])
        }
    }
}

function createCZSeasonRow(row) {

    var table = document.getElementById('CZ_game')

    if (document.getElementById('cz_row_' + row.n)) {
        document.getElementById('cz_row_' + row.n).remove()
    }
    if (document.getElementById('cz_row2_' + row.n)) {
        document.getElementById('cz_row2_' + row.n).remove()
    }
    if (document.getElementById('cz_row3_' + row.n)) {
        document.getElementById('cz_row3_' + row.n).remove()
    }
    var tr = document.createElement('tr')
    tr.setAttribute('id', 'cz_row_' + row.n)
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
    input.value = row.mbap
    input.onchange = function () {
        saveValueinLocalStorage(this.parentNode.parentNode.id, this.value, 'CZ_game', 'mbap')
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
        saveValueinLocalStorage(this.parentNode.parentNode.id, this.value, 'CZ_game', 'arenaMbox')
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
    input.value = row.royalMbox
    input.onchange = function () {
        saveValueinLocalStorage(this.parentNode.parentNode.id, this.value, 'CZ_game', 'royalMbox')
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
    input.value = row.dungeonMbox
    input.onchange = function () {
        saveValueinLocalStorage(this.parentNode.parentNode.id, this.value, 'CZ_game', 'dungeonMbox')
    }
    td.appendChild(input)
    td.appendChild(createUnits('MBOX'))
    tr.appendChild(td)

    var td = document.createElement('td')
    tr.appendChild(td)

    var td = document.createElement('td')
    var input = document.createElement('input')
    input.setAttribute('type', 'number')
    input.setAttribute('class', 'form-control')
    input.style.width = '60%'
    input.style.display = 'inline-block'
    input.value = row.earningsMbox
    input.onchange = function () {
        saveValueinLocalStorage(this.parentNode.parentNode.id, this.value, 'CZ_game', 'earningsMbox')
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
        saveValueinLocalStorage(this.parentNode.parentNode.id, this.value, 'CZ_game', 'expenciesMbox')
    }
    td.appendChild(input)
    td.appendChild(createUnits('MBOX'))
    tr.appendChild(td)

    var td = document.createElement('td')
    td.rowSpan = 3
    td.style.textAlign = 'center'
    td.appendChild(createCZSeasonResult(row.n))
    tr.appendChild(td)

    var td = document.createElement('td')
    td.style.textAlign = 'left'
    td.rowSpan = 3
    var i = document.createElement('i')
    i.setAttribute('class', 'fa-solid fa-trash-can fa-xl')

    i.onclick = function () {
        deleteCZSeason(this.parentNode.parentNode.id, 'CZ_game')
    }
    td.appendChild(i)
    tr.appendChild(td)

    table.appendChild(tr)

    var tr = document.createElement('tr')
    tr.setAttribute('id', 'cz_row2_' + row.n)

    var td = document.createElement('td')
    var input = document.createElement('input')
    input.setAttribute('type', 'number')
    input.setAttribute('class', 'form-control')
    input.style.width = '60%'
    input.style.display = 'inline-block'
    input.value = row.sap
    input.onchange = function () {
        saveValueinLocalStorage(this.parentNode.parentNode.id, this.value, 'CZ_game', 'sap')
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
        saveValueinLocalStorage(this.parentNode.parentNode.id, this.value, 'CZ_game', 'arenaMec')
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
    input.value = row.royalMec
    input.onchange = function () {
        saveValueinLocalStorage(this.parentNode.parentNode.id, this.value, 'CZ_game', 'royalMec')
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
    input.value = row.dungeonMec
    input.onchange = function () {
        saveValueinLocalStorage(this.parentNode.parentNode.id, this.value, 'CZ_game', 'dungeonMec')
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
    input.value = row.treasure
    input.onchange = function () {
        saveValueinLocalStorage(this.parentNode.parentNode.id, this.value, 'CZ_game', 'treasure')
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
        saveValueinLocalStorage(this.parentNode.parentNode.id, this.value, 'CZ_game', 'earningsMec')
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
        saveValueinLocalStorage(this.parentNode.parentNode.id, this.value, 'CZ_game', 'expenciesMec')
    }
    td.appendChild(input)
    td.appendChild(createUnits('MEC'))
    tr.appendChild(td)

    table.appendChild(tr)


    var tr = document.createElement('tr')
    tr.setAttribute('id', 'cz_row3_' + row.n)


    var td = document.createElement('td')
    tr.appendChild(td)

    var td = document.createElement('td')
    var input = document.createElement('input')
    input.setAttribute('type', 'text')
    input.setAttribute('class', 'form-control')
    input.value = row.arenaRes
    input.onchange = function () {
        saveValueinLocalStorage(this.parentNode.parentNode.id, this.value, 'CZ_game', 'arenaRes')
    }
    td.appendChild(input)
    tr.appendChild(td)

    var td = document.createElement('td')
    var input = document.createElement('input')
    input.setAttribute('type', 'text')
    input.setAttribute('class', 'form-control')
    input.value = row.royalRes
    input.onchange = function () {
        saveValueinLocalStorage(this.parentNode.parentNode.id, this.value, 'CZ_game', 'royalRes')
    }
    td.appendChild(input)
    tr.appendChild(td)

    var td = document.createElement('td')
    var input = document.createElement('input')
    input.setAttribute('type', 'text')
    input.setAttribute('class', 'form-control')
    input.value = row.dungeonRes
    input.onchange = function () {
        saveValueinLocalStorage(this.parentNode.parentNode.id, this.value, 'CZ_game', 'dungeonRes')
    }
    td.appendChild(input)
    tr.appendChild(td)

    var td = document.createElement('td')
    var input = document.createElement('input')
    input.setAttribute('type', 'text')
    input.setAttribute('class', 'form-control')
    input.value = row.treasureRes
    input.onchange = function () {
        saveValueinLocalStorage(this.parentNode.parentNode.id, this.value, 'CZ_game', 'treasureRes')
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

    document.dispatchEvent(new CustomEvent('czValueChanged', { detail: id.split('_')[2] }))
}

function deleteCZSeason(id, item) {
    var array = JSON.parse(localStorage.getItem(item))
    for (var i = 0; i < array.length; i++) {
        if (array[i].n == id.split('_')[2]) {
            var index = array.indexOf(array[i])
            array.splice(index, 1)
            localStorage.setItem(item, JSON.stringify(array))

        }
    }

    document.dispatchEvent(new CustomEvent('seasonCZDeleted'))
}

function createCZSeasonResult(id) {

    if (checkLocalstorage('CZ_game')) {
        var array = JSON.parse(localStorage.getItem('CZ_game'))
        for (var i = 0; i < array.length; i++) {
            if (array[i].n == id) {
                var prices = JSON.parse(localStorage.getItem('prices'))
                var row = array[i]
                var mbox = (parseFloat(row.mbap) + parseFloat(row.arenaMbox) + parseFloat(row.royalMbox) + parseFloat(row.dungeonMbox) + parseFloat(row.earningsMbox) - parseFloat(row.expenciesMbox)) * parseFloat(prices.mbox)
                var mec = (parseFloat(row.sap) + parseFloat(row.arenaMec) + parseFloat(row.royalMec) + parseFloat(row.dungeonMec) + parseFloat(row.treasure) + parseFloat(row.earningsMec) - parseFloat(row.expenciesMec)) * parseFloat(prices.mec)
                var usd = Math.round((mbox + mec) * 100) / 100

                var div = document.createElement('div')
                div.setAttribute('id', 'czSeasonResult' + id)
                div.style.color = usd > 0 ? 'green' : usd < 0 ? 'red' : 'yellow'
                div.style.fontWeight = 'bold'
                div.appendChild(document.createTextNode(usd + '$'))

                if (document.getElementById('czSeasonResult' + array[i].n)) {
                    document.getElementById('czSeasonResult' + array[i].n).replaceWith(div)
                }

                return div
            }
        }
    }

}

function createCZSeason() {
    var season = new Object()
    season.n = 1
    if (checkLocalstorage('CZ_game')) {
        var array = JSON.parse(localStorage.getItem('CZ_game'))
        if (array.length > 0 && array[0].hasOwnProperty('n')) {
            season.n = array[0].n + 1
        }  
    }
    season.mbap = 0.0
    season.sap = 0.0
    season.arenaMbox = 0.0
    season.arenaMec = 0.0
    season.royalMbox = 0.0
    season.royalMec = 0.0
    season.dungeonMbox = 0.0
    season.dungeonMec = 0.0
    season.treasure = 0.0
    season.earningsMbox = 0.0
    season.earningsMec = 0.0
    season.expenciesMbox = 0.0
    season.expenciesMec = 0.0
    season.dungeonRes = 0.0
    season.arenaRes = 0.0
    season.royalRes = 0.0
    season.treasureRes = 0.0

    return season
}
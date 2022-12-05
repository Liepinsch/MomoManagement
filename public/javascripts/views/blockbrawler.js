function addBBSeason() {

    if (checkLocalstorage('BB_game')) {
        var array = JSON.parse(localStorage.getItem('BB_game'))
        array.unshift(createBBSeason())
        localStorage.setItem('BB_game', JSON.stringify(array))
    } else {
        var array = []
        array.unshift(createBBSeason())
        localStorage.setItem('BB_game', JSON.stringify(array))
    }
    document.dispatchEvent(new CustomEvent('newBBSeasonAdded'))
}

function createBBTable() {
    if (checkLocalstorage('BB_game')) {
        var array = JSON.parse(localStorage.getItem('BB_game'))
        if (document.querySelector('[id*="BB_row"]')) {
            document.querySelectorAll('[id*="BB_row"]').forEach(element => {
                element.remove();
            })
        }

        for (var i = 0; i < array.length; i++) {
            createBBSeasonRow(array[i])
        }
    }
}

function createBBSeasonRow(row) {
    var table = document.getElementById('BB_game')

    if (document.getElementById('BB_row_' + row.n)) {
        document.getElementById('BB_row_' + row.n).remove()
    }
    if (document.getElementById('BB_row2_' + row.n)) {
        document.getElementById('BB_row2_' + row.n).remove()
    }
    if (document.getElementById('BB_row3_' + row.n)) {
        document.getElementById('BB_row3_' + row.n).remove()
    }

    var tr = document.createElement('tr')
    tr.setAttribute('id', 'BB_row_' + row.n)
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
    input.value = row.battleMbox
    input.onchange = function () {
        saveValueinLocalStorage(this.parentNode.parentNode.id, this.value, 'BB_game', 'battleMbox')
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
        saveValueinLocalStorage(this.parentNode.parentNode.id, this.value, 'BB_game', 'dungeonMbox')
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
        saveValueinLocalStorage(this.parentNode.parentNode.id, this.value, 'BB_game', 'earningsMbox')
    }
    td.appendChild(input)
    var btn = document.createElement('i')
    btn.setAttribute('class', 'fa-regular fa-square-plus fa-lg')
    btn.style.marginLeft = '-1em'
    btn.onclick = function (e) {
        createAddPopup(e, 'BB_game', 'earningsMbox', 'BBValueChanged', this.parentNode.parentNode.id.split('_')[2], input)
    }
    td.appendChild(btn)
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
        saveValueinLocalStorage(this.parentNode.parentNode.id, this.value, 'BB_game', 'expenciesMbox')
    }
    td.appendChild(input)
    td.appendChild(createUnits('MBOX'))
    tr.appendChild(td)

    var td = document.createElement('td')
    td.rowSpan = 3
    td.style.textAlign = 'center'
    td.appendChild(createBBSeasonResult(row.n))
    tr.appendChild(td)

    var td = document.createElement('td')
    td.style.textAlign = 'left'
    td.rowSpan = 3
    var i = document.createElement('i')
    i.setAttribute('class', 'fa-solid fa-trash-can fa-xl')

    i.onclick = function () {
        deleteBBSeason(this.parentNode.parentNode.id, 'BB_game')
    }
    td.appendChild(i)
    tr.appendChild(td)

    table.appendChild(tr)

    var tr = document.createElement('tr')
    tr.setAttribute('id', 'BB_row2_' + row.n)

    var td = document.createElement('td')
    var input = document.createElement('input')
    input.setAttribute('type', 'number')
    input.setAttribute('class', 'form-control')
    input.style.width = '60%'
    input.style.display = 'inline-block'
    input.value = row.sweep
    input.onchange = function () {
        saveValueinLocalStorage(this.parentNode.parentNode.id, this.value, 'BB_game', 'sweep')
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
    input.value = row.battleMec
    input.onchange = function () {
        saveValueinLocalStorage(this.parentNode.parentNode.id, this.value, 'BB_game', 'battleMec')
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
        saveValueinLocalStorage(this.parentNode.parentNode.id, this.value, 'BB_game', 'dungeonMec')
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
        saveValueinLocalStorage(this.parentNode.parentNode.id, this.value, 'BB_game', 'earningsMec')
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
        saveValueinLocalStorage(this.parentNode.parentNode.id, this.value, 'BB_game', 'expenciesMec')
    }
    td.appendChild(input)
    td.appendChild(createUnits('MEC'))
    tr.appendChild(td)

    table.appendChild(tr)


    var tr = document.createElement('tr')
    tr.setAttribute('id', 'BB_row3_' + row.n)


    var td = document.createElement('td')
    tr.appendChild(td)

    var td = document.createElement('td')
    var input = document.createElement('input')
    input.setAttribute('type', 'text')
    input.setAttribute('class', 'form-control')
    input.value = row.battleRes
    input.onchange = function () {
        saveValueinLocalStorage(this.parentNode.parentNode.id, this.value, 'BB_game', 'battleRes')
    }
    td.appendChild(input)
    tr.appendChild(td)

    var td = document.createElement('td')
    var input = document.createElement('input')
    input.setAttribute('type', 'text')
    input.setAttribute('class', 'form-control')
    input.value = row.dungeonRes
    input.onchange = function () {
        saveValueinLocalStorage(this.parentNode.parentNode.id, this.value, 'BB_game', 'dungeonRes')
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

    document.dispatchEvent(new CustomEvent('BBValueChanged', { detail: id.split('_')[2] }))
}

function deleteBBSeason(id, item) {
    var array = JSON.parse(localStorage.getItem(item))
    for (var i = 0; i < array.length; i++) {
        if (array[i].n == id.split('_')[2]) {
            var index = array.indexOf(array[i])
            array.splice(index, 1)
            localStorage.setItem(item, JSON.stringify(array))

        }
    }

    document.dispatchEvent(new CustomEvent('seasonBBDeleted'))
}

function createBBSeasonResult(id) {

    if (checkLocalstorage('BB_game')) {
        var array = JSON.parse(localStorage.getItem('BB_game'))
        for (var i = 0; i < array.length; i++) {
            if (array[i].n == id) {
                var prices = JSON.parse(localStorage.getItem('prices'))
                var row = array[i]
                var mbox = (parseFloat(row.battleMbox) + parseFloat(row.dungeonMbox) + parseFloat(row.earningsMbox) - parseFloat(row.expenciesMbox)) * parseFloat(prices.mbox)
                var mec = (parseFloat(row.sweep) + parseFloat(row.battleMec) + parseFloat(row.dungeonMec) + parseFloat(row.earningsMec) - parseFloat(row.expenciesMec)) * parseFloat(prices.mec)
                var usd = Math.round((mbox + mec) * 100) / 100

                var div = document.createElement('div')
                div.setAttribute('id', 'BBSeasonResult' + id)
                div.style.color = usd > 0 ? 'green' : usd < 0 ? 'red' : 'yellow'
                div.style.fontWeight = 'bold'
                div.appendChild(document.createTextNode(usd + '$'))

                if (document.getElementById('BBSeasonResult' + array[i].n)) {
                    document.getElementById('BBSeasonResult' + array[i].n).replaceWith(div)
                }

                return div
            }
        }
    }

}

function createBBSeason() {
    var season = new Object()
    season.n = 1
    if (checkLocalstorage('BB_game')) {
        var array = JSON.parse(localStorage.getItem('BB_game'))
        if (array.length > 0 && array[0].hasOwnProperty('n')) {
            season.n = array[0].n + 1
        }   
    }
    season.sweep = 0.0
    season.battleMbox = 0.0
    season.battleMec = 0.0
    season.dungeonMbox = 0.0
    season.dungeonMec = 0.0
    season.earningsMbox = 0.0
    season.earningsMec = 0.0
    season.expenciesMbox = 0.0
    season.expenciesMec = 0.0
    season.battleRes = 0.0
    season.dungeonRes = 0.0

    return season
}
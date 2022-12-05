function addMDSeason() {

    if (checkLocalstorage('MD_game')) {
        var array = JSON.parse(localStorage.getItem('MD_game'))
        array.unshift(createMDSeason())
        localStorage.setItem('MD_game', JSON.stringify(array))
    } else {
        var array = []
        array.unshift(createMDSeason())
        localStorage.setItem('MD_game', JSON.stringify(array))
    }
    document.dispatchEvent(new CustomEvent('newSeasonAdded'))
}

function createMDTable() {
    if (checkLocalstorage('MD_game')) {
        var array = JSON.parse(localStorage.getItem('MD_game'))
        if (document.querySelector('[id*="md_row"]')) {
            document.querySelectorAll('[id*="md_row"]').forEach(element => {
                element.remove();
            })
        }

        for (var i = 0; i < array.length; i++) {
            createMDSeasonRow(array[i])
        }
    }
}

function createMDSeasonRow(row) {

    var table = document.getElementById('MD_game')

    if (document.getElementById('md_row_' + row.n)) {
        document.getElementById('md_row_' + row.n).remove()
    }
    if (document.getElementById('md_row2_' + row.n)) {
        document.getElementById('md_row2_' + row.n).remove()
    }
    if (document.getElementById('md_row3_' + row.n)) {
        document.getElementById('md_row3_' + row.n).remove()
    }
    var tr = document.createElement('tr')
    tr.setAttribute('id', 'md_row_' + row.n)
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
    input.value = row.arenaMbox
    input.onchange = function () {
        saveValueinLocalStorage(this.parentNode.parentNode.id, this.value, 'MD_game', 'arenaMbox')
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
    input.value = row.heroesMbox
    input.onchange = function () {
        saveValueinLocalStorage(this.parentNode.parentNode.id, this.value, 'MD_game', 'heroesMbox')
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
    input.value = row.chapterMbox
    input.onchange = function () {
        saveValueinLocalStorage(this.parentNode.parentNode.id, this.value, 'MD_game', 'chapterMbox')
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
        saveValueinLocalStorage(this.parentNode.parentNode.id, this.value, 'MD_game', 'earningsMbox')
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
        saveValueinLocalStorage(this.parentNode.parentNode.id, this.value, 'MD_game', 'expenciesMbox')
    }
    td.appendChild(input)
    td.appendChild(createUnits('MBOX'))
    tr.appendChild(td)

    var td = document.createElement('td')
    td.rowSpan = 3
    td.style.textAlign = 'center'
    td.appendChild(createMDSeasonResult(row.n))
    tr.appendChild(td)

    var td = document.createElement('td')
    td.style.textAlign = 'left'
    td.rowSpan = 3
    var i = document.createElement('i')
    i.setAttribute('class', 'fa-solid fa-trash-can fa-xl')

    i.onclick = function () {
        deleteMDSeason(this.parentNode.parentNode.id, 'MD_game')
    }
    td.appendChild(i)
    tr.appendChild(td)

    table.appendChild(tr)

    var tr = document.createElement('tr')
    tr.setAttribute('id', 'md_row2_' + row.n)

    var td = document.createElement('td')
    var input = document.createElement('input')
    input.setAttribute('type', 'number')
    input.setAttribute('class', 'form-control')
    input.style.width = '60%'
    input.style.display = 'inline-block'
    input.value = row.relic
    input.onchange = function () {
        saveValueinLocalStorage(this.parentNode.parentNode.id, this.value, 'MD_game', 'relic')
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
        saveValueinLocalStorage(this.parentNode.parentNode.id, this.value, 'MD_game', 'arenaMec')
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
    input.value = row.heroesMec
    input.onchange = function () {
        saveValueinLocalStorage(this.parentNode.parentNode.id, this.value, 'MD_game', 'heroesMec')
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
    input.value = row.chapterMec
    input.onchange = function () {
        saveValueinLocalStorage(this.parentNode.parentNode.id, this.value, 'MD_game', 'chapterMec')
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
    input.value = row.peakarena
    input.onchange = function () {
        saveValueinLocalStorage(this.parentNode.parentNode.id, this.value, 'MD_game', 'peakarena')
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
        saveValueinLocalStorage(this.parentNode.parentNode.id, this.value, 'MD_game', 'earningsMec')
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
        saveValueinLocalStorage(this.parentNode.parentNode.id, this.value, 'MD_game', 'expenciesMec')
    }
    td.appendChild(input)
    td.appendChild(createUnits('MEC'))
    tr.appendChild(td)

    table.appendChild(tr)


    var tr = document.createElement('tr')
    tr.setAttribute('id', 'md_row3_' + row.n)


    var td = document.createElement('td')
    tr.appendChild(td)

    var td = document.createElement('td')
    var input = document.createElement('input')
    input.setAttribute('type', 'text')
    input.setAttribute('class', 'form-control')
    input.value = row.arenaRes
    input.onchange = function () {
        saveValueinLocalStorage(this.parentNode.parentNode.id, this.value, 'MD_game', 'arenaRes')
    }
    td.appendChild(input)
    tr.appendChild(td)

    var td = document.createElement('td')
    var input = document.createElement('input')
    input.setAttribute('type', 'text')
    input.setAttribute('class', 'form-control')
    input.value = row.heroesRes
    input.onchange = function () {
        saveValueinLocalStorage(this.parentNode.parentNode.id, this.value, 'MD_game', 'heroesRes')
    }
    td.appendChild(input)
    tr.appendChild(td)

    var td = document.createElement('td')
    var input = document.createElement('input')
    input.setAttribute('type', 'text')
    input.setAttribute('class', 'form-control')
    input.value = row.chapterRes
    input.onchange = function () {
        saveValueinLocalStorage(this.parentNode.parentNode.id, this.value, 'MD_game', 'chapterRes')
    }
    td.appendChild(input)
    tr.appendChild(td)

    var td = document.createElement('td')
    var input = document.createElement('input')
    input.setAttribute('type', 'text')
    input.setAttribute('class', 'form-control')
    input.value = row.peakarenaRes
    input.onchange = function () {
        saveValueinLocalStorage(this.parentNode.parentNode.id, this.value, 'MD_game', 'peakarenaRes')
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

    document.dispatchEvent(new CustomEvent('mdValueChanged', { detail: id.split('_')[2] }))
}

function deleteMDSeason(id, item) {
    var array = JSON.parse(localStorage.getItem(item))
    for (var i = 0; i < array.length; i++) {
        if (array[i].n == id.split('_')[2]) {
            var index = array.indexOf(array[i])
            array.splice(index, 1)
            localStorage.setItem(item, JSON.stringify(array))

        }
    }

    document.dispatchEvent(new CustomEvent('seasonDeleted'))
}

function createMDSeasonResult(id) {

    if (checkLocalstorage('MD_game')) {
        var array = JSON.parse(localStorage.getItem('MD_game'))
        for (var i = 0; i < array.length; i++) {
            if (array[i].n == id) {
                var prices = JSON.parse(localStorage.getItem('prices'))
                var row = array[i]
                var mbox = (parseFloat(row.arenaMbox) + parseFloat(row.heroesMbox) + parseFloat(row.chapterMbox) + parseFloat(row.earningsMbox) - parseFloat(row.expenciesMbox)) * parseFloat(prices.mbox)
                var mec = (parseFloat(row.arenaMec) + parseFloat(row.heroesMec) + parseFloat(row.chapterMec) + parseFloat(row.peakarena) + parseFloat(row.earningsMec) + parseFloat(row.relic) * 14.0 - parseFloat(row.expenciesMec)) * parseFloat(prices.mec)
                var usd = Math.round((mbox + mec) * 100) / 100

                var div = document.createElement('div')
                div.setAttribute('id', 'mdSeasonResult' + id)
                div.style.color = usd > 0 ? 'green' : usd < 0 ? 'red' : 'yellow'
                div.style.fontWeight = 'bold'
                div.appendChild(document.createTextNode(usd + '$'))

                if (document.getElementById('mdSeasonResult' + array[i].n)) {
                    document.getElementById('mdSeasonResult' + array[i].n).replaceWith(div)
                }

                return div
            }
        }
    }

}



function createMDSeason() {
    var season = new Object()
    season.n = 1
    if (checkLocalstorage('MD_game')) {
        var array = JSON.parse(localStorage.getItem('MD_game'))
        if (array.length > 0 && array[0].hasOwnProperty('n')) {
            season.n = array[0].n + 1
        }  
    }
    season.relic = 0.0
    season.arenaMbox = 0.0
    season.heroesMbox = 0.0
    season.chapterMbox = 0.0
    season.earningsMbox = 0.0
    season.expenciesMbox = 0.0
    season.arenaMec = 0.0
    season.heroesMec = 0.0
    season.chapterMec = 0.0
    season.peakarena = 0.0
    season.earningsMec = 0.0
    season.expenciesMec = 0.0
    season.arenaRes = 0.0
    season.heroesRes = 0.0
    season.chapterRes = 0.0
    season.peakarenaRes = 0.0

    return season
}
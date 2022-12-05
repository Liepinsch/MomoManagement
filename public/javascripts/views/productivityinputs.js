function createInputFieldsForProductivity() {
    var div = document.getElementById('productivity')

    if (document.getElementById('productivity_table')) {
        document.getElementById('productivity_table').remove()
    }

    var productivity = ''
    if (checkLocalstorage('productivity')) {
        productivity = JSON.parse(localStorage.getItem('productivity'))[0]
    }
    var table = document.createElement('table')
    table.setAttribute('id', 'productivity_table')
    table.style.float = 'right'
    table.style.marginBottom = '3em'

    var tr = document.createElement('tr')
    var td = document.createElement('td')
    td.style.width = '60%'
    td.appendChild(document.createTextNode('Feather Mining Rate: '))
    tr.appendChild(td)
    var td = document.createElement('td')
    td.style.width = '40%'
    var input = createInputFieldForProductivity(productivity != '' ? productivity.bird : 0.0)
    input.onchange = function () {
        saveProductivity(this.value, 'bird')
    }
    td.appendChild(input)
    tr.appendChild(td)
    table.appendChild(tr)

    var tr = document.createElement('tr')
    var td = document.createElement('td')
    td.appendChild(document.createTextNode('Feather Price: '))
    tr.appendChild(td)
    var td = document.createElement('td')
    var input = createInputFieldForProductivity(productivity != '' ? productivity.bird_price : 0.0)
    input.onchange = function () {
        saveProductivity(this.value, 'bird_price')
    }
    td.appendChild(input)
    tr.appendChild(td)
    table.appendChild(tr)

    var tr = document.createElement('tr')
    var td = document.createElement('td')
    td.appendChild(document.createTextNode('Leather Mining Rate: '))
    tr.appendChild(td)
    var td = document.createElement('td')
    var input = createInputFieldForProductivity(productivity != '' ? productivity.beast : 0.0)
    input.onchange = function () {
        saveProductivity(this.value, 'beast')
    }
    td.appendChild(input)
    tr.appendChild(td)
    table.appendChild(tr)

    var tr = document.createElement('tr')
    var td = document.createElement('td')
    td.appendChild(document.createTextNode('Leather Price: '))
    tr.appendChild(td)
    var td = document.createElement('td')
    var input = createInputFieldForProductivity(productivity != '' ? productivity.beast_price : 0.0)
    input.onchange = function () {
        saveProductivity(this.value, 'beast_price')
    }
    td.appendChild(input)
    tr.appendChild(td)
    table.appendChild(tr)

    var tr = document.createElement('tr')
    var td = document.createElement('td')
    td.appendChild(document.createTextNode('Pearl Mining Rate: '))
    tr.appendChild(td)
    var td = document.createElement('td')
    var input = createInputFieldForProductivity(productivity != '' ? productivity.fish : 0.0)
    input.onchange = function () {
        saveProductivity(this.value, 'fish')
    }
    td.appendChild(input)
    tr.appendChild(td)
    table.appendChild(tr)

    var tr = document.createElement('tr')
    var td = document.createElement('td')
    td.appendChild(document.createTextNode('Pearl Price: '))
    tr.appendChild(td)
    var td = document.createElement('td')
    var input = createInputFieldForProductivity(productivity != '' ? productivity.fish_price : 0.0)
    input.onchange = function () {
        saveProductivity(this.value, 'fish_price')
    }
    td.appendChild(input)
    tr.appendChild(td)
    table.appendChild(tr)

    var tr = document.createElement('tr')
    var td = document.createElement('td')
    td.appendChild(document.createTextNode('Ore Mining Rate: '))
    tr.appendChild(td)
    var td = document.createElement('td')
    var input = createInputFieldForProductivity(productivity != '' ? productivity.monster : 0.0)
    input.onchange = function () {
        saveProductivity(this.value, 'monster')
    }
    td.appendChild(input)
    tr.appendChild(td)
    table.appendChild(tr)

    var tr = document.createElement('tr')
    var td = document.createElement('td')
    td.appendChild(document.createTextNode('Ore Price: '))
    tr.appendChild(td)
    var td = document.createElement('td')
    var input = createInputFieldForProductivity(productivity != '' ? productivity.monster_price : 0.0)
    input.onchange = function () {
        saveProductivity(this.value, 'monster_price')
    }
    td.appendChild(input)
    tr.appendChild(td)
    table.appendChild(tr)

    var tr = document.createElement('tr')
    var td = document.createElement('td')
    td.appendChild(document.createTextNode('Gold Mining Rate: '))
    tr.appendChild(td)
    var td = document.createElement('td')
    var input = createInputFieldForProductivity(productivity != '' ? productivity.epic : 0.0)
    input.onchange = function () {
        saveProductivity(this.value, 'epic')
    }
    td.appendChild(input)
    tr.appendChild(td)
    table.appendChild(tr)

    var tr = document.createElement('tr')
    var td = document.createElement('td')
    td.appendChild(document.createTextNode('Gold Price: '))
    tr.appendChild(td)
    var td = document.createElement('td')
    var input = createInputFieldForProductivity(productivity != '' ? productivity.epic_price : 0.0)
    input.onchange = function () {
        saveProductivity(this.value, 'epic_price')
    }
    td.appendChild(input)
    tr.appendChild(td)
    table.appendChild(tr)

    var tr = document.createElement('tr')
    var td = document.createElement('td')
    td.appendChild(document.createTextNode('MBOX Mining Rate: '))
    tr.appendChild(td)
    var td = document.createElement('td')
    var input = createInputFieldForProductivity(productivity != '' ? productivity.mbox : 0.0)
    input.onchange = function () {
        saveProductivity(this.value, 'mbox')
    }
    td.appendChild(input)
    tr.appendChild(td)

    table.appendChild(tr)



    div.appendChild(table)

}

function createInputFieldForProductivity(value) {

    var input = document.createElement('input')
    input.setAttribute('type', 'number');
    input.setAttribute('class', 'form-control');
    input.setAttribute('value', value ?? 0);
    return input
}

function saveProductivity(value, property) {
    if (checkLocalstorage('productivity')) {
        var productivity = JSON.parse(localStorage.getItem('productivity'))
        var today = new Date().getDate() + '.' + (new Date().getMonth() + 1) + '.' + new Date().getFullYear()

        if (productivity[0].date == today) {
            productivity[0][property] = parseFloat(value)
            localStorage.setItem('productivity', JSON.stringify(productivity))
        } else {
            var todayProductivity = createDailyProductivity()
            todayProductivity[property] = parseFloat(value)
            productivity.unshift(todayProductivity)
            localStorage.setItem('productivity', JSON.stringify(productivity))
            createInputFieldsForProductivity()
        }
    } else {
        var productivity = []
        var todayProductivity = createDailyProductivity()
        todayProductivity[property] = parseFloat(value)
        productivity.unshift(todayProductivity)
        localStorage.setItem('productivity', JSON.stringify(productivity))
    }
    document.dispatchEvent(new CustomEvent('productivityChanged'))
}

function createDailyProductivity() {
    var productivity = new Object()
    productivity.beast = 0
    productivity.beast_price = 0
    productivity.bird = 0
    productivity.bird_price = 0
    productivity.epic = 0
    productivity.epic_price = 0
    productivity.monster = 0
    productivity.monster_price = 0
    productivity.fish = 0
    productivity.fish_price = 0
    productivity.mbox = 0
    productivity.date = new Date().getDate() + '.' + (new Date().getMonth() + 1) + '.' + new Date().getFullYear()
    return productivity
}
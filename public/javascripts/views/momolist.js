function createMomoList() {
    var list = localStorage.getItem('momoList')
    if (list != null && list != '') {
        jsonList = JSON.parse(list)
        var div = document.getElementById('momoList')
        var div_data = document.createElement('div')

        if (document.getElementById('div_data')) {
            document.getElementById('div_data').remove()
        }
        div_data.setAttribute('id', 'div_data')

        if (jsonList.length > 0) {

            jsonList.forEach(momo => {
                div_data.appendChild(createMomoTable(momo))
                div_data.appendChild(createProductivityMomoTable(momo))
                div_data.appendChild(createButtonTable(momo))
            })
            div.appendChild(div_data)
        }
    }
}

function createMomoTable(momo) {
    var table = document.createElement('table')
    table.setAttribute('id', momo.id)
    table.setAttribute('width', '20%')
    table.style.textAlign = 'right'
    table.style.display = 'inline-block'
    table.style.marginRight = '4%'

    var tr = document.createElement('tr')
    var td_pic = document.createElement('td')
    td_pic.setAttribute('width', '60%')
    td_pic.colSpan = 4
    td_pic.rowSpan = 4
    td_pic.appendChild(createMomoDiv(momo.id))
    tr.appendChild(td_pic)

    var td_rarity = document.createElement('td')
    td_rarity.appendChild(createRarityDiv(momo.id))
    td_rarity.appendChild(createTypeDiv(momo.id))
    tr.appendChild(td_rarity)
    table.appendChild(tr)

    var tr = document.createElement('tr')
    var td_level = document.createElement('td')
    var td_level_span = document.createElement('span')
    td_level_span.style.width = '50%'
    td_level_span.style.display = 'inline'
    td_level_span.appendChild(document.createTextNode('Level: '))
    var td_level_input = document.createElement('input')
    td_level_input.setAttribute('type', 'number');
    td_level_input.setAttribute('class', 'form-control');
    td_level_input.setAttribute('value', momo.level ?? 0);
    td_level_input.style.width = '49%'
    td_level_input.style.display = 'inline'
    td_level_input.onchange = function () {
        saveLevel(this.parentNode.parentNode.parentNode.id, this.value);
    }
    td_level.appendChild(td_level_span)
    td_level.appendChild(td_level_input)
    tr.appendChild(td_level)
    table.appendChild(tr)

    var tr = document.createElement('tr')
    var td_ihp = document.createElement('td')
    var td_ihp_span = document.createElement('span')
    td_ihp_span.style.width = '50%'
    td_ihp_span.style.display = 'inline'
    td_ihp_span.appendChild(document.createTextNode('IHP: '))
    var td_ihp_input = document.createElement('input')
    td_ihp_input.setAttribute('type', 'number');
    td_ihp_input.setAttribute('class', 'form-control');
    td_ihp_input.setAttribute('value', momo.sihp ?? 0);
    td_ihp_input.style.width = '49%'
    td_ihp_input.style.display = 'inline'
    td_ihp_input.onchange = function () {
        saveIhp(this.parentNode.parentNode.parentNode.id, this.value);
    }
    td_ihp.appendChild(td_ihp_span)
    td_ihp.appendChild(td_ihp_input)
    tr.appendChild(td_ihp)
    table.appendChild(tr)

    var tr = document.createElement('tr')
    var td_hp = document.createElement('td')
    td_hp.appendChild(createIHPDiv(momo.id))
    tr.appendChild(td_hp)
    table.appendChild(tr)

    var tr = document.createElement('tr')
    var td_gem1 = document.createElement('td')
    td_gem1.appendChild(createGem1Div(momo.id))
    tr.appendChild(td_gem1)

    var td_gem2 = document.createElement('td')
    td_gem2.appendChild(createGem2Div(momo.id))
    tr.appendChild(td_gem2)

    var td_gem3 = document.createElement('td')
    td_gem3.appendChild(createGem3Div(momo.id))
    tr.appendChild(td_gem3)

    var td_gem4 = document.createElement('td')
    td_gem4.appendChild(createGem4Div(momo.id))
    tr.appendChild(td_gem4)

    var td = document.createElement('td')
    tr.appendChild(td)
    table.appendChild(tr)

    return table
}

function createProductivityMomoTable(momo) {
    var table = document.createElement('table')
    table.setAttribute('id', momo.id + '_productivity_table')
    table.setAttribute('width', '70%')
    table.style.display = 'inline-block'
    table.style.textAlign = 'left'
    table.style.verticalAlign = 'top'

    var tr = document.createElement('tr')
    var td = document.createElement('td')
    td.style.width = '15%'
    tr.appendChild(td)

    var td = document.createElement('td')
    td.style.width = '5%'
    tr.appendChild(td)

    var td = document.createElement('th')
    td.appendChild(document.createTextNode('1d ROI'))
    td.style.width = '16%'
    tr.appendChild(td)
    var td = document.createElement('th')
    td.appendChild(document.createTextNode('30d ROI'))
    td.style.width = '16%'
    tr.appendChild(td)
    var td = document.createElement('th')
    td.appendChild(document.createTextNode('60d ROI'))
    td.style.width = '16%'
    tr.appendChild(td)
    var td = document.createElement('th')
    td.appendChild(document.createTextNode('30d MEC'))
    td.style.width = '16%'
    tr.appendChild(td)
    var td = document.createElement('th')
    td.appendChild(document.createTextNode('30d USD'))
    td.style.width = '16%'
    tr.appendChild(td)
    table.appendChild(tr)

    var tr = document.createElement('tr')
    var td = document.createElement('td')
    td.appendChild(createProductivityDiv(momo.id))
    tr.appendChild(td)

    var td = document.createElement('td')
    tr.appendChild(td)

    var td = document.createElement('td')
    td.colSpan = 5
    td.appendChild(createProductivityTable(momo.id))
    tr.appendChild(td)
    table.appendChild(tr)

    var tr = document.createElement('tr')
    var td = document.createElement('td')

    var input = document.createElement('button')
    input.setAttribute('class', 'btn btn-primary')
    input.setAttribute('id', momo.id + '_momoversebutton')
    input.style.width = '100%'
    input.style.height = '2em'
    input.style.padding = 0
    var img = document.createElement('img')
    img.setAttribute('src', momo.momoverse ? '/images/momoverse.png' : '/images/momofarmer.png')
    img.style.height = '2em'
    input.appendChild(img)
    input.onclick = function () {
        saveMomoverse(this.parentNode.parentNode.parentNode.id);
    }

    td.appendChild(input)
    tr.appendChild(td)

    var td = document.createElement('td')
    tr.appendChild(td)

    var td = document.createElement('td')
    td.rowSpan = 2
    td.colSpan = 5
    td.appendChild(createCostsTable(momo.id))
    tr.appendChild(td)
    table.appendChild(tr)



    var tr = document.createElement('tr')
    var td = document.createElement('td')
    var input = document.createElement('button')
    input.setAttribute('class', 'btn btn-primary')
    input.setAttribute('id', momo.id + '_familybutton')
    input.style.width = '100%'
    input.style.height = '2em'
    input.style.padding = 0
    var img = document.createElement('img')
    img.setAttribute('src', momo.family ? '/images/family.png' : '/images/momo_empty.png')
    img.style.height = '2em'
    input.appendChild(img)
    input.onclick = function () {
        saveFamily(this.parentNode.parentNode.parentNode.id);
    }

    td.appendChild(input)
    tr.appendChild(td)
    table.appendChild(tr)

    return table
}

function createCostsTable(id) {

    var momoList = JSON.parse(localStorage.getItem('momoList'))
    for (var i = 0; i < momoList.length; i++) {
        if (momoList[i].id == id) {
            var momo = momoList[i]

            var container = document.createElement('div')
            container.setAttribute('id', momo.id + '_cost_table')
            container.setAttribute('class', 'container-fluid')

            var row = document.createElement('div')
            row.setAttribute('class', 'row')
            row.setAttribute('width', '100%')
            row.style.textAlign = 'left'
            row.style.verticalAlign = 'top'

            var col = document.createElement('div')
            col.setAttribute('class', 'col')
            col.style.width = '20%'
            col.style.padding = '0'
            col.style.fontWeight = 'bold'
            col.appendChild(document.createTextNode('Price'))
            row.appendChild(col)

            var col = document.createElement('div')
            col.setAttribute('class', 'col')
            col.style.width = '20%'
            col.style.padding = '0'
            col.style.fontWeight = 'bold'
            col.appendChild(document.createTextNode('Enchancement'))
            row.appendChild(col)

            var col = document.createElement('div')
            col.setAttribute('class', 'col')
            col.style.width = '20%'
            col.style.padding = '0'
            col.style.fontWeight = 'bold'
            col.appendChild(document.createTextNode('Upgrade Momos'))
            row.appendChild(col)

            var col = document.createElement('div')
            col.setAttribute('class', 'col')
            col.style.width = '20%'
            col.style.padding = '0'
            col.style.fontWeight = 'bold'
            col.appendChild(document.createTextNode('Upgrade MEC'))
            row.appendChild(col)

            var col = document.createElement('div')
            col.setAttribute('class', 'col')
            col.style.width = '20%'
            col.style.padding = '0'
            col.style.fontWeight = 'bold'
            col.appendChild(document.createTextNode('Total'))
            row.appendChild(col)
            container.appendChild(row)

            var row = document.createElement('div')
            row.setAttribute('class', 'row')
            row.setAttribute('width', '100%')
            row.style.textAlign = 'left'
            row.style.verticalAlign = 'top'

            var col = document.createElement('div')
            col.setAttribute('class', 'col')
            col.style.width = '20%'
            col.style.padding = '0'

            var input = document.createElement('input')
            input.setAttribute('type', 'number')
            input.setAttribute('class', 'form-control')
            input.style.width = '60%'
            input.style.display = 'inline-block'
            input.value = momo.price ?? 0
            input.onchange = function () {
                saveMomoValueinLocalStorage(this.parentNode.parentNode.parentNode.id, this.value, 'momoList', 'price')
                document.dispatchEvent(new CustomEvent('costsChanged', { detail: this.parentNode.parentNode.parentNode.id.split('_')[0] }))
            }
            col.appendChild(input)
            var btn = document.createElement('i')
            btn.setAttribute('class', 'fa-regular fa-square-plus fa-lg')
            btn.style.marginLeft = '-1em'
            btn.onclick = function (e) {
                createAddPopup(e, 'momoList', 'price', 'costsChanged', this.parentNode.parentNode.parentNode.id.split('_')[0])
            }
            col.appendChild(btn)
            col.appendChild(createUnits('USD'))
            row.appendChild(col)

            var col = document.createElement('div')
            col.setAttribute('class', 'col')
            col.style.width = '20%'
            col.style.padding = '0'
            var input = document.createElement('input')
            input.setAttribute('type', 'number')
            input.setAttribute('class', 'form-control')
            input.style.width = '60%'
            input.style.display = 'inline-block'
            input.value = momo.enchancement ?? 0
            input.onchange = function () {
                saveMomoValueinLocalStorage(this.parentNode.parentNode.parentNode.id, this.value, 'momoList', 'enchancement')
                document.dispatchEvent(new CustomEvent('costsChanged', { detail: this.parentNode.parentNode.parentNode.id.split('_')[0] }))
            }
            col.appendChild(input)
            var btn = document.createElement('i')
            btn.setAttribute('class', 'fa-regular fa-square-plus fa-lg')
            btn.style.marginLeft = '-1em'
            btn.onclick = function (e) {
                createAddPopup(e, 'momoList', 'enchancement', 'costsChanged', this.parentNode.parentNode.parentNode.id.split('_')[0])
            }
            col.appendChild(btn)
            col.appendChild(createUnits('MEC'))
            row.appendChild(col)

            var col = document.createElement('div')
            col.setAttribute('class', 'col')
            col.style.width = '20%'
            col.style.padding = '0'
            var input = document.createElement('input')
            input.setAttribute('type', 'number')
            input.setAttribute('class', 'form-control')
            input.style.width = '60%'
            input.style.display = 'inline-block'
            input.value = momo.upgradeUsd ?? 0
            input.onchange = function () {
                saveMomoValueinLocalStorage(this.parentNode.parentNode.parentNode.id, this.value, 'momoList', 'upgradeUsd')
                document.dispatchEvent(new CustomEvent('costsChanged', { detail: this.parentNode.parentNode.parentNode.id.split('_')[0] }))
            }
            col.appendChild(input)
            var btn = document.createElement('i')
            btn.setAttribute('class', 'fa-regular fa-square-plus fa-lg')
            btn.style.marginLeft = '-1em'
            btn.onclick = function (e) {
                createAddPopup(e, 'momoList', 'upgradeUsd', 'costsChanged', this.parentNode.parentNode.parentNode.id.split('_')[0])
            }
            col.appendChild(btn)
            col.appendChild(createUnits('USD'))
            row.appendChild(col)

            var col = document.createElement('div')
            col.setAttribute('class', 'col')
            col.style.width = '20%'
            col.style.padding = '0'
            var input = document.createElement('input')
            input.setAttribute('type', 'number')
            input.setAttribute('class', 'form-control')
            input.style.width = '60%'
            input.style.display = 'inline-block'
            input.value = momo.upgradeMec ?? 0
            input.onchange = function () {
                saveMomoValueinLocalStorage(this.parentNode.parentNode.parentNode.id, this.value, 'momoList', 'upgradeMec')
                document.dispatchEvent(new CustomEvent('costsChanged', { detail: this.parentNode.parentNode.parentNode.id.split('_')[0] }))
            }
            col.appendChild(input)
            var btn = document.createElement('i')
            btn.setAttribute('class', 'fa-regular fa-square-plus fa-lg')
            btn.style.marginLeft = '-1em'
            btn.onclick = function (e) {
                createAddPopup(e, 'momoList', 'upgradeMec', 'costsChanged', this.parentNode.parentNode.parentNode.id.split('_')[0])
            }
            col.appendChild(btn)
            col.appendChild(createUnits('MEC'))
            row.appendChild(col)

            var col = document.createElement('div')
            col.setAttribute('class', 'col')
            col.style.width = '20%'
            col.style.padding = '0'
            var total = 0.0
            if (checkLocalstorage('prices')) {
                var prices = JSON.parse(localStorage.getItem('prices'))
                total = parseFloat(momo.price ?? 0) + parseFloat(momo.upgradeUsd ?? 0) + parseFloat(momo.upgradeMec ?? 0) * prices.mec + parseFloat(momo.enchancement ?? 0) * prices.mec
            }
            col.appendChild(document.createTextNode(Math.round(total * 100) / 100 + ' USD'))
            row.appendChild(col)
            container.appendChild(row)

            if (document.getElementById(momo.id + '_cost_table')) {

                document.getElementById(momo.id + '_cost_table').replaceWith(container)
            }

            return container
        }
    }
}

function createProductivityTable(id) {

    var momoList = JSON.parse(localStorage.getItem('momoList'))
    for (var i = 0; i < momoList.length; i++) {
        if (momoList[i].id == id) {
            var momo = momoList[i]

            var table = document.createElement('table')
            table.setAttribute('id', momo.id + '_costValue_table')
            table.setAttribute('width', '100%')
            table.style.textAlign = 'left'
            table.style.verticalAlign = 'top'

            var tr = document.createElement('tr')

            if (checkLocalstorage('productivity')) {
                var productivity = JSON.parse(localStorage.getItem('productivity'))[0]
                var roi = 0.0
                if (momo.momoverse == true) {
                    roi = parseFloat(calculateProductivity(momo.id)) / 100.0 * parseFloat(productivity[momo.type]) * parseFloat(productivity[momo.type + '_price'])
                } else {
                    roi = parseFloat(calculateHP(momo.id)) / 1000.0 * parseFloat(productivity['mbox'])
                }

                var td = document.createElement('td')
                td.style.width = '20%'
                td.appendChild(document.createTextNode((Math.round(roi * 100) / 100) + ' MBOX'))
                tr.appendChild(td)

                var td = document.createElement('td')
                td.style.width = '20%'
                td.appendChild(document.createTextNode((Math.round(roi * 30 * 100) / 100) + ' MBOX'))
                tr.appendChild(td)

                var td = document.createElement('td')
                td.style.width = '20%'
                td.appendChild(document.createTextNode((Math.round(roi * 60 * 100) / 100) + ' MBOX'))
                tr.appendChild(td)
                if (checkLocalstorage('prices')) {
                    var prices = JSON.parse(localStorage.getItem('prices'))

                    var td = document.createElement('td')
                    td.style.width = '20%'
                    td.appendChild(document.createTextNode((Math.round(roi * 30.0 * 100.0 * prices.mbox / prices.mec) / 100) + ' MEC'))
                    tr.appendChild(td)

                    var td = document.createElement('td')
                    td.style.width = '20%'
                    td.appendChild(document.createTextNode((Math.round(roi * 30.0 * 100.0 * prices.mbox) / 100) + ' USD'))
                    tr.appendChild(td)
                } else {
                    var td = document.createElement('td')
                    td.style.width = '20%'
                    tr.appendChild(td)

                    var td = document.createElement('td')
                    td.style.width = '20%'
                    tr.appendChild(td)
                }
            }
            table.appendChild(tr)



            if (document.getElementById(momo.id + '_productivityValue_table')) {
                document.getElementById(momo.id + '_productivityValue_table').replaceWith(table)
            }

            return table
        }
    }
}

function createButtonTable(momo) {
    var momoList = JSON.parse(localStorage.getItem('momoList'))
    var table = document.createElement('table')
    table.setAttribute('id', momo.id + '_button_table')
    table.setAttribute('width', '5%')
    table.style.display = 'inline-block'
    table.style.textAlign = 'left'
    table.style.verticalAlign = 'top'

    var tr = document.createElement('tr')
    var td = document.createElement('td')
    var up_button = document.createElement('i')
    if (momoList.findIndex(e => e.id == momo.id) > 0) {
        up_button.setAttribute('class', 'fa-regular fa-square-caret-up fa-xl')
        up_button.onclick = function () {
            moveMomoUpDown(this.parentNode.parentNode.parentNode.id.split('_')[0], 'up')
        }
    } else {
        up_button.setAttribute('class', 'fa-solid fa-stop fa-xl')
    }
    td.appendChild(up_button)
    td.style.width = '100%'
    td.style.padding = '0.5em'
    tr.appendChild(td)
    table.appendChild(tr)

    var tr = document.createElement('tr')
    var td = document.createElement('td')
    var down_button = document.createElement('i')
    if (momoList.findIndex(e => e.id == momo.id) < momoList.length - 1) {
        down_button.setAttribute('class', 'fa-regular fa-square-caret-down fa-xl')
        down_button.onclick = function () {
            moveMomoUpDown(this.parentNode.parentNode.parentNode.id.split('_')[0], 'down')
        }
    } else {
        down_button.setAttribute('class', 'fa-solid fa-stop fa-xl')
    }
    td.appendChild(down_button)
    td.style.padding = '0.5em'
    tr.appendChild(td)
    table.appendChild(tr)

    var tr = document.createElement('tr')
    var td = document.createElement('td')
    var delete_button = document.createElement('i')
    delete_button.setAttribute('class', 'fa-solid fa-trash-can fa-xl')
    delete_button.onclick = function () {
        deleteMomoFromLocalStorage(this.parentNode.parentNode.parentNode.id.split('_')[0])
    }
    td.appendChild(delete_button)
    td.style.padding = '0.5em'
    tr.appendChild(td)
    table.appendChild(tr)

    return table
}

function saveLevel(id, value) {

    var momoList = JSON.parse(localStorage.getItem('momoList'))
    for (var i = 0; i < momoList.length; i++) {
        if (momoList[i].id == id) {
            momoList[i].level = value
            localStorage.setItem('momoList', JSON.stringify(momoList))
        }
    }
    document.dispatchEvent(new CustomEvent('levelChanged', { detail: id }))
}

function saveIhp(id, value) {

    var momoList = JSON.parse(localStorage.getItem('momoList'))
    for (var i = 0; i < momoList.length; i++) {
        if (momoList[i].id == id) {
            momoList[i].sihp = value
            localStorage.setItem('momoList', JSON.stringify(momoList))
        }
    }
    document.dispatchEvent(new CustomEvent('ihpChanged', { detail: id }))
}

function saveMomoverse(uid) {

    var momoList = JSON.parse(localStorage.getItem('momoList'))
    var id = uid.split('_')[0]
    for (var i = 0; i < momoList.length; i++) {
        if (momoList[i].id == id) {
            momoList[i].momoverse = !momoList[i].momoverse
            document.getElementById(id + '_momoversebutton').firstChild.src = momoList[i].momoverse ? '/images/momoverse.png' : '/images/momofarmer.png'
            localStorage.setItem('momoList', JSON.stringify(momoList))
        }
    }
    document.dispatchEvent(new CustomEvent('locationChanged', { detail: id }))
}

function saveFamily(uid) {

    var momoList = JSON.parse(localStorage.getItem('momoList'))
    var id = uid.split('_')[0]
    for (var i = 0; i < momoList.length; i++) {
        if (momoList[i].id == id) {
            momoList[i].family = !momoList[i].family
            document.getElementById(id + '_familybutton').firstChild.src = momoList[i].family ? '/images/family.png' : '/images/momo_empty.png'
            localStorage.setItem('momoList', JSON.stringify(momoList))
        }
    }
    document.dispatchEvent(new CustomEvent('familyChanged', { detail: id }))
}

function saveImageMomo(id, value) {

    var momoList = JSON.parse(localStorage.getItem('momoList'))
    for (var i = 0; i < momoList.length; i++) {
        if (momoList[i].id == id) {
            momoList[i].pic = value

            if (momoList[i].pic.split('_')[1] == 'epic') {
                momoList[i].rarity = 'epic'
            }
            if (momoList[i].pic.split('_')[1] == 'rare') {
                momoList[i].rarity = 'rare'
            }
            if (momoList[i].pic.split('_')[2] == 'epic.png') {
                momoList[i].type = 'epic'
            }
            if (momoList[i].pic.split('_')[2] == 'beast.png') {
                momoList[i].type = 'beast'
            }
            if (momoList[i].pic.split('_')[2] == 'fish.png') {
                momoList[i].type = 'fish'
            }
            if (momoList[i].pic.split('_')[2] == 'monster.png') {
                momoList[i].type = 'monster'
            }
            if (momoList[i].pic.split('_')[2] == 'bird.png') {
                momoList[i].type = 'bird'
            }
            localStorage.setItem('momoList', JSON.stringify(momoList))
        }
    }



    document.dispatchEvent(new CustomEvent('momoChanged', { detail: id }))
}

function saveImageGem1(id, value) {

    var momoList = JSON.parse(localStorage.getItem('momoList'))
    for (var i = 0; i < momoList.length; i++) {
        if (momoList[i].id == id) {
            momoList[i].gem1 = value
            localStorage.setItem('momoList', JSON.stringify(momoList))
        }
    }
    document.dispatchEvent(new CustomEvent('gem1Changed', { detail: id }))
}

function saveImageGem2(id, value) {

    var momoList = JSON.parse(localStorage.getItem('momoList'))
    for (var i = 0; i < momoList.length; i++) {
        if (momoList[i].id == id) {
            momoList[i].gem2 = value
            localStorage.setItem('momoList', JSON.stringify(momoList))
        }
    }
    document.dispatchEvent(new CustomEvent('gem2Changed', { detail: id }))
}

function saveImageGem3(id, value) {

    var momoList = JSON.parse(localStorage.getItem('momoList'))
    for (var i = 0; i < momoList.length; i++) {
        if (momoList[i].id == id) {
            momoList[i].gem3 = value
            localStorage.setItem('momoList', JSON.stringify(momoList))
        }
    }
    document.dispatchEvent(new CustomEvent('gem3Changed', { detail: id }))
}

function saveImageGem4(id, value) {

    var momoList = JSON.parse(localStorage.getItem('momoList'))
    for (var i = 0; i < momoList.length; i++) {
        if (momoList[i].id == id) {
            momoList[i].gem4 = value
            localStorage.setItem('momoList', JSON.stringify(momoList))

        }
    }

    document.dispatchEvent(new CustomEvent('gem4Changed', { detail: id }))
}

function moveMomoUpDown(id, direction) {
    var momoList = JSON.parse(localStorage.getItem('momoList'))

    let index = momoList.findIndex(e => e.id == id);
    if (direction == 'up') {
        if (index > 0) {
            let el = momoList[index];
            momoList[index] = momoList[index - 1];
            momoList[index - 1] = el;
        }
    } else if (direction == 'down') {
        if (index !== -1 && index < momoList.length - 1) {
            let el = momoList[index];
            momoList[index] = momoList[index + 1];
            momoList[index + 1] = el;
        }
    }
    localStorage.setItem('momoList', JSON.stringify(momoList))
    createMomoList()
}

function createMomoDiv(id) {
    var momoList = JSON.parse(localStorage.getItem('momoList'))
    var td_momo_div = document.createElement('div')


    for (var i = 0; i < momoList.length; i++) {
        if (momoList[i].id == id) {
            td_momo_div.setAttribute('id', id + '_momo_div')
            td_momo_div.style.textAlign = 'center'
            var image = document.createElement('img')

            if (momoList[i].pic != '') {
                image.setAttribute('src', 'images/momo/' + momoList[i].pic)
                if (momoList[i].pic.split('_')[1] == 'empty.png') {
                    image.style.opacity = 0.4
                    image.setAttribute('src', 'images/' + momoList[i].pic)
                }
            } else {
                image.setAttribute('src', 'images/momo_empty.png')
                image.style.opacity = 0.4
            }
            image.style.width = '60%'
            image.onclick = function (e) {
                createMomoPopup(e, this.parentNode.parentNode.parentNode.parentNode.id)
            }
            td_momo_div.appendChild(image)

            if (document.getElementById(id + '_momo_div')) {
                document.getElementById(id + '_momo_div').replaceWith(td_momo_div)
            }
            return td_momo_div
        }
    }
}

function createGem1Div(id) {
    var momoList = JSON.parse(localStorage.getItem('momoList'))
    var td_gem1_div = document.createElement('div')

    for (var i = 0; i < momoList.length; i++) {
        if (momoList[i].id == id) {
            td_gem1_div.setAttribute('id', id + '_gem1_div')
            var image = document.createElement('img')
            if (momoList[i].gem1 != '') {
                image.setAttribute('src', 'images/gems/' + momoList[i].gem1)
                if (momoList[i].gem1.split('_')[1] == 'empty.png') {
                    image.style.opacity = 0.4
                }
            } else {
                image.setAttribute('src', 'images/gems/redgem_empty.png')
                image.style.opacity = 0.4
            }
            image.style.width = '100%'
            image.onclick = function (e) {
                createGemPopup(e, this.parentNode.parentNode.parentNode.parentNode.id, 'red')
            }
            td_gem1_div.appendChild(image)

            if (document.getElementById(id + '_gem1_div')) {
                document.getElementById(id + '_gem1_div').replaceWith(td_gem1_div)
            }
            return td_gem1_div
        }
    }
}

function createGem2Div(id) {
    var momoList = JSON.parse(localStorage.getItem('momoList'))
    var td_gem2_div = document.createElement('div')

    for (var i = 0; i < momoList.length; i++) {
        if (momoList[i].id == id) {
            td_gem2_div.setAttribute('id', id + '_gem2_div')
            var image = document.createElement('img')
            if (momoList[i].gem2 != '') {
                image.setAttribute('src', 'images/gems/' + momoList[i].gem2)
                if (momoList[i].gem2.split('_')[1] == 'empty.png') {
                    image.style.opacity = 0.4
                }
            } else {
                image.setAttribute('src', 'images/gems/greengem_empty.png')
                image.style.opacity = 0.4
            }
            image.style.width = '100%'
            image.onclick = function (e) {
                createGemPopup(e, this.parentNode.parentNode.parentNode.parentNode.id, 'green')
            }
            td_gem2_div.appendChild(image)

            if (document.getElementById(id + '_gem2_div')) {
                document.getElementById(id + '_gem2_div').replaceWith(td_gem2_div)
            }
            return td_gem2_div
        }
    }
}

function createGem3Div(id) {
    var momoList = JSON.parse(localStorage.getItem('momoList'))
    var td_gem3_div = document.createElement('div')

    for (var i = 0; i < momoList.length; i++) {
        if (momoList[i].id == id) {
            td_gem3_div.setAttribute('id', id + '_gem3_div')
            var image = document.createElement('img')
            if (momoList[i].gem3 != '') {
                image.setAttribute('src', 'images/gems/' + momoList[i].gem3)
                if (momoList[i].gem3.split('_')[1] == 'empty.png') {
                    image.style.opacity = 0.4
                }
            } else {
                image.setAttribute('src', 'images/gems/bluegem_empty.png')
                image.style.opacity = 0.4
            }
            image.style.width = '100%'
            image.onclick = function (e) {
                createGemPopup(e, this.parentNode.parentNode.parentNode.parentNode.id, 'blue')
            }
            td_gem3_div.appendChild(image)

            if (document.getElementById(id + '_gem3_div')) {
                document.getElementById(id + '_gem3_div').replaceWith(td_gem3_div)
            }
            return td_gem3_div
        }
    }
}

function createGem4Div(id) {
    var momoList = JSON.parse(localStorage.getItem('momoList'))
    var td_gem4_div = document.createElement('div')

    for (var i = 0; i < momoList.length; i++) {
        if (momoList[i].id == id) {
            td_gem4_div.setAttribute('id', id + '_gem4_div')
            var image = document.createElement('img')
            if (momoList[i].gem4 != '') {
                image.setAttribute('src', 'images/gems/' + momoList[i].gem4)
                if (momoList[i].gem4.split('_')[1] == 'empty.png') {
                    image.style.opacity = 0.4
                }
            } else {
                image.setAttribute('src', 'images/gems/yellowgem_empty.png')
                image.style.opacity = 0.4
            }
            image.style.width = '100%'
            image.onclick = function (e) {
                createGemPopup(e, this.parentNode.parentNode.parentNode.parentNode.id, 'yellow')
            }
            td_gem4_div.appendChild(image)

            if (document.getElementById(id + '_gem4_div')) {
                document.getElementById(id + '_gem4_div').replaceWith(td_gem4_div)
            }
            return td_gem4_div
        }
    }
}

function createTypeDiv(id) {
    var momoList = JSON.parse(localStorage.getItem('momoList'))
    var td_type_div = document.createElement('div')
    td_type_div.style.width = '10%'
    td_type_div.style.display = 'inline-block'

    for (var i = 0; i < momoList.length; i++) {
        if (momoList[i].id == id) {
            td_type_div.setAttribute('id', id + '_type_div')

            if (momoList[i].type && momoList[i].type != '') {
                var image = document.createElement('img')
                image.setAttribute('src', 'images/' + momoList[i].type + '.png')
                td_type_div.appendChild(image)
            }


            if (document.getElementById(id + '_type_div')) {
                document.getElementById(id + '_type_div').replaceWith(td_type_div)
            }
            return td_type_div
        }
    }
}

function createRarityDiv(id) {
    var momoList = JSON.parse(localStorage.getItem('momoList'))
    var td_rarity_div = document.createElement('div')
    td_rarity_div.style.width = '79%'
    td_rarity_div.style.display = 'inline-block'
    td_rarity_div.style.textAlign = 'center'
    td_rarity_div.style.borderRadius = '0.5em'
    td_rarity_div.style.color = 'white'
    td_rarity_div.style.marginRight = '0.5em'

    for (var i = 0; i < momoList.length; i++) {
        if (momoList[i].id == id) {
            td_rarity_div.setAttribute('id', id + '_rarity_div')
            if (momoList[i].rarity == 'rare') {
                td_rarity_div.style.backgroundColor = '#603F8B';
                td_rarity_div.appendChild(document.createTextNode('rare'))
            } else if (momoList[i].rarity == 'epic') {
                td_rarity_div.style.backgroundColor = '#B68D40'
                td_rarity_div.appendChild(document.createTextNode('epic'))
            }

            if (document.getElementById(id + '_rarity_div')) {
                document.getElementById(id + '_rarity_div').replaceWith(td_rarity_div)
            }

            return td_rarity_div
        }
    }
}

function createIHPDiv(id) {
    var td_hp_div = document.createElement('div')
    td_hp_div.setAttribute('id', id + '_ihp_div')
    td_hp_div.appendChild(document.createTextNode('HP: ' + calculateHP(id)))

    if (document.getElementById(id + '_ihp_div')) {
        document.getElementById(id + '_ihp_div').replaceWith(td_hp_div)
    }

    return td_hp_div
}

function createProductivityDiv(id) {
    var td_productivity_div = document.createElement('div')
    td_productivity_div.setAttribute('id', id + '_productivity_div')
    td_productivity_div.appendChild(document.createTextNode('Productivity: ' + calculateProductivity(id)))

    if (document.getElementById(id + '_productivity_div')) {
        document.getElementById(id + '_productivity_div').replaceWith(td_productivity_div)
    }

    return td_productivity_div
}


function createMomoPopup(e, id) {
    if (document.getElementById('momo_popup')) {
        document.getElementById('momo_popup').remove()
    }

    const Http = new XMLHttpRequest()
    Http.open("GET", 'momos/getMomoFileArray')

    Http.onreadystatechange = (stateChange) => {
        if (Http.readyState === XMLHttpRequest.DONE) {
            const status = Http.status;
            if (status === 0 || (status >= 200 && status < 400)) {
                var div = document.createElement('div')
                div.setAttribute('class', 'popup')
                div.setAttribute('id', 'momo_popup')
                div.style.backgroundColor = '#3a3f44'
                div.style.border = 'solid 1px black'
                div.style.position = 'absolute'
                div.style.maxWidth = '25%'
                div.style.maxHeight = '20em'
                div.style.overflowX = 'auto'
                div.style.overflowY = 'auto'
                div.style.left = e.pageX + 'px'
                div.style.top = e.pageY + 'px'
                div.onclick = function () {
                    document.getElementById('momo_popup').remove()
                }
                var img_array = JSON.parse(Http.responseText)

                var image = document.createElement('img')
                image.setAttribute('src', 'images/momo_empty.png')
                image.style.width = '20%'
                image.setAttribute('id', 'momo_empty.png')
                image.style.opacity = 0.4
                image.onclick = function () {
                    saveImageMomo(id, this.id)
                }
                div.appendChild(image)

                img_array.forEach(img_name => {
                    var image = document.createElement('img')
                    image.setAttribute('src', 'images/momo/' + img_name.name)
                    image.style.width = '20%'
                    image.setAttribute('id', img_name.name)
                    image.onclick = function () {
                        saveImageMomo(id, this.id)
                    }
                    div.appendChild(image)
                })
                document.getElementById('content').appendChild(div)
                e.stopPropagation();
            }
        }

    }
    Http.send()
}

function createGemPopup(e, id, color) {
    if (document.getElementById('momo_popup')) {
        document.getElementById('momo_popup').remove()
    }

    var div = document.createElement('div')
    div.setAttribute('class', 'popup')
    div.setAttribute('id', 'momo_popup')
    div.style.backgroundColor = '#3a3f44'
    div.style.border = 'solid 1px black'
    div.style.position = 'absolute'
    div.style.maxWidth = '25%'
    div.style.overflowX = 'auto'
    div.style.left = e.pageX + 'px'
    div.style.top = e.pageY + 'px'
    div.onclick = function () {
        document.getElementById('momo_popup').remove()
    }
    var img_array = []
    if (color == 'red') {
        img_array = img_red_gems
    } else if (color == 'green') {
        img_array = img_green_gems
    } else if (color == 'blue') {
        img_array = img_blue_gems
    } else if (color == 'yellow') {
        img_array = img_yellow_gems
    }
    img_array.forEach(img_name => {
        var image = document.createElement('img')
        image.setAttribute('src', 'images/gems/' + img_name)
        image.style.width = '20%'
        image.setAttribute('id', img_name)
        if (img_name.split('_')[1] == 'empty.png') {
            image.style.opacity = 0.4
        }
        image.onclick = function () {
            if (color == 'red') {
                saveImageGem1(id, this.id)
            } else if (color == 'green') {
                saveImageGem2(id, this.id)
            } else if (color == 'blue') {
                saveImageGem3(id, this.id)
            } else if (color == 'yellow') {
                saveImageGem4(id, this.id)
            }

        }
        div.appendChild(image)
    })
    document.getElementById('content').appendChild(div)
    e.stopPropagation();
}

function calculateDailyRoi(id) {
    var momoList = JSON.parse(localStorage.getItem('momoList'))
    for (var i = 0; i < momoList.length; i++) {
        if (momoList[i].id == id) {
            var productivity = JSON.parse(localStorage.getItem('productivity'))[0]
            var roi = 0.0
            if (momoList[i].momoverse == true) {
                roi = parseFloat(calculateProductivity(momoList[i].id)) / 100.0 * parseFloat(productivity[momoList[i].type]) * parseFloat(productivity[momoList[i].type + '_price'])
            } else {
                roi = parseFloat(calculateHP(momoList[i].id)) / 1000.0 * parseFloat(productivity['mbox'])
            }
            momoList[i].dailyROI = Math.round(roi * 1000) / 1000
            localStorage.setItem('momoList', JSON.stringify(momoList))

        }
    }
}

function calculateHP(id) {

    var momoList = JSON.parse(localStorage.getItem('momoList'))
    for (var i = 0; i < momoList.length; i++) {
        if (momoList[i].id == id) {
            var hp = parseFloat(momoList[i].sihp)
            if (momoList[i].rarity == 'epic') {
                //=B5 + ($B$3 + 50) * (0.5 +WENN(REST(A6;5)=0; 0.15*A6/5;0))                 
                for (var l = 2; l <= momoList[i].level; l++) {
                    hp = hp + (parseFloat(momoList[i].sihp) + 50) * (0.5 + (l % 5 == 0 ? (l / 5.0 * 0.15) : 0.0))
                }
            } else if (momoList[i].rarity == 'rare') {
                //=ABRUNDEN(((A35+1)*(0.5*$B$34+15)-30);0)+ABRUNDEN(((3+$B$34/10))*(ABRUNDEN((A35/5);0))*(ABRUNDEN(((A35/5)+1);0)*0.5);0)
                hp = Math.floor((parseFloat(momoList[i].level) + 1.0) * (0.5 * parseFloat(momoList[i].sihp) + 15.0) - 30.0) + Math.floor(0.5 * (3 + parseFloat(momoList[i].sihp) / 10) * Math.floor(parseFloat(momoList[i].level) / 5.0) * Math.floor(parseFloat(momoList[i].level) / 5.0 + 1))
            }


            return Math.floor(hp)
        }
    }
}


function calculateProductivity(id) {
    var momoList = JSON.parse(localStorage.getItem('momoList'))
    for (var i = 0; i < momoList.length; i++) {
        if (momoList[i].id == id) {
            var productivity = parseFloat(momoList[i].sihp) * 10.0 + parseFloat(calculateHP(id))
            if (momoList[i].gem1 && momoList[i].gem1 != '' && momoList[i].gem1 != 'redgem_empty.png') {
                productivity = productivity + parseFloat(momoList[i].gem1.split('_')[1].replace('.png', ''))
            }
            if (momoList[i].gem2 && momoList[i].gem2 != '' && momoList[i].gem2 != 'greengem_empty.png') {
                productivity = productivity + parseFloat(momoList[i].gem2.split('_')[1].replace('.png', ''))
            }
            if (momoList[i].gem3 && momoList[i].gem3 != '' && momoList[i].gem3 != 'bluegem_empty.png') {
                productivity = productivity + parseFloat(momoList[i].gem3.split('_')[1].replace('.png', ''))
            }
            if (momoList[i].gem4 && momoList[i].gem4 != '' && momoList[i].gem4 != 'yellowgem_empty.png') {
                productivity = productivity + parseFloat(momoList[i].gem4.split('_')[1].replace('.png', ''))
            }
            if (momoList[i].rarity == 'rare' && momoList[i].family == true) {
                productivity = productivity + 666.0
            }
            return productivity
        }
    }
}
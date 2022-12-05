

function readJsonArrayFromFilePushNewData() {
    var content
    try {
        content = JSON.parse(fs.readFileSync(source, 'utf8'));
    } catch (err) {
        console.error(err);
    }
    try {
        if (content) {
            content.push(newData)
            fs.writeFileSync(source, JSON.stringify(content))
        }
    } catch (err) {
        console.error(err);
    }
}

const img_red_gems = ['redgem_empty.png', 'redgem_20.png', 'redgem_40.png', 'redgem_80.png', 'redgem_140.png', 'redgem_200.png', 'redgem_400.png', 'redgem_800.png', 'redgem_1600.png', 'redgem_4000.png']
const img_green_gems = ['greengem_empty.png', 'greengem_20.png', 'greengem_40.png', 'greengem_80.png', 'greengem_140.png', 'greengem_200.png', 'greengem_400.png', 'greengem_800.png', 'greengem_1600.png', 'greengem_4000.png']
const img_blue_gems = ['bluegem_empty.png', 'bluegem_20.png', 'bluegem_40.png', 'bluegem_80.png', 'bluegem_140.png', 'bluegem_200.png', 'bluegem_400.png', 'bluegem_800.png', 'bluegem_1600.png', 'bluegem_4000.png']
const img_yellow_gems = ['yellowgem_empty.png', 'yellowgem_20.png', 'yellowgem_40.png', 'yellowgem_80.png', 'yellowgem_140.png', 'yellowgem_200.png', 'yellowgem_400.png', 'yellowgem_800.png', 'yellowgem_1600.png', 'yellowgem_4000.png']

Date.prototype.addDays = function (days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

function createGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
} 

function random(number) {
    return Math.floor(Math.random() * number);;
}

function randomColors() {
    var random1 = random(255)
    var random2 = random(255)
    var random3 = random(255)
    var colors = new Object()
    colors.bgColor = 'rgb(' + random1 + ',' + random2 + ',' + random3 + ')'
    colors.fontColor = 'rgb(' + (255 - random1) + ',' + (255 - random2) + ',' + (255 - random3) + ')'
    return colors
}

function createUnits(string) {
    var unit = document.createElement('span')
    unit.style.display = 'inline-block'
    unit.style.marginLeft = '0.2em'
    unit.appendChild(document.createTextNode(string))
    return unit
}

function download() {
    var data = new Object()
    if (checkLocalstorage('momoList')) {
        data.momolist = JSON.parse(localStorage.getItem('momoList'))
    }
    if (checkLocalstorage('BB_game')) {
        data.BB_game = JSON.parse(localStorage.getItem('BB_game'))
    }
    if (checkLocalstorage('TM_game')) {
        data.TM_game = JSON.parse(localStorage.getItem('TM_game'))
    }
    if (checkLocalstorage('CM_game')) {
        data.CM_game = JSON.parse(localStorage.getItem('CM_game'))
    }
    if (checkLocalstorage('MD_game')) {
        data.MD_game = JSON.parse(localStorage.getItem('MD_game'))
    }
    if (checkLocalstorage('CZ_game')) {
        data.CZ_game = JSON.parse(localStorage.getItem('CZ_game'))
    }
    if (checkLocalstorage('productivity')) {
        data.productivity = JSON.parse(localStorage.getItem('productivity'))
    }
    if (checkLocalstorage('earnings')) {
        data.earnings = JSON.parse(localStorage.getItem('earnings'))
    }

    const file = new File([JSON.stringify(data, null, 2)], 'mmm_' + new Date().toLocaleDateString() + '.json', {
        type: 'application/json',
    })
    const link = document.createElement('a')
    const url = URL.createObjectURL(file)

    link.href = url
    link.download = file.name
    document.body.appendChild(link)
    link.click()

    document.body.removeChild(link)
    window.URL.revokeObjectURL(url)
}

function upload() {
    try {
        const jsonFile = getJsonUpload()
        jsonFile.then(function (result) {
            var json = JSON.parse(result[0])
            
            if (json.momolist) { localStorage.setItem('momoList', JSON.stringify(json.momolist)) }
            if (json.BB_game) { localStorage.setItem('BB_game', JSON.stringify(json.BB_game)) }
            if (json.TM_game) { localStorage.setItem('TM_game', JSON.stringify(json.TM_game)) }
            if (json.CM_game) { localStorage.setItem('CM_game', JSON.stringify(json.CM_game)) }
            if (json.MD_game) { localStorage.setItem('MD_game', JSON.stringify(json.MD_game)) }
            if (json.CZ_game) { localStorage.setItem('CZ_game', JSON.stringify(json.CZ_game)) }
            if (json.productivity) { localStorage.setItem('productivity', JSON.stringify(json.productivity)) }
            if (json.earnings) { localStorage.setItem('earnings', JSON.stringify(json.earnings)) }
        })
    } catch (err) {
        console.log(err)
    }
    
}

function saveMomoValueinLocalStorage(id, value, item, property) {
    var array = JSON.parse(localStorage.getItem(item))
    for (var i = 0; i < array.length; i++) {
        if (array[i].id == id.split('_')[0]) {
            array[i][property] = value
            localStorage.setItem(item, JSON.stringify(array))

        }
    }
}

const getJsonUpload = () =>
    new Promise(resolve => {
        const inputFileElement = document.createElement('input')
        inputFileElement.setAttribute('type', 'file')
        inputFileElement.setAttribute('multiple', 'true')
        inputFileElement.setAttribute('accept', '.json')

        inputFileElement.addEventListener(
            'change',
            async (event) => {
                const { files } = event.target
                if (!files) {
                    return
                }

                const filePromises = [...files].map(file => file.text())

                resolve(await Promise.all(filePromises))
            },
            false,
        )
        inputFileElement.click()
    })


function savePrices(value) {
    var price = new Object()
    price.mbox = value.mbox.price
    price.mec = value.mec.price
    localStorage.setItem('prices', JSON.stringify(price))
}
function checkPropertyInLocalstorage(item, property) {
    if (localStorage.getItem(item) && localStorage.getItem(item) != 'null' && localStorage.getItem(item) != 'undefined') {
        if (/^[\],:{}\s]*$/.test(localStorage.getItem(item).replace(/\\["\\\/bfnrtu]/g, '@').
            replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
            replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

            if (Object.hasOwn(JSON.parse(localStorage.getItem(item)), property)) {
                return true
            }
        }
    }
    return false
}

function checkLocalstorage(item) {
    if (localStorage.getItem(item) && localStorage.getItem(item) != 'null' && localStorage.getItem(item) != 'undefined') {
        if (/^[\],:{}\s]*$/.test(localStorage.getItem(item).replace(/\\["\\\/bfnrtu]/g, '@').
            replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
            replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
            return true
        }
    }
    return false
}

function createAddPopup(e, item, property, event, id, element) {
    if (document.getElementById('add_popup')) {
        document.getElementById('add_popup').remove()
    }

    var div = document.createElement('div')
    div.setAttribute('class', 'popup')
    div.setAttribute('id', 'add_popup')
    div.style.backgroundColor = '#3a3f44'
    div.style.border = 'solid 1px black'
    div.style.position = 'absolute'
    div.style.width = '6em'
    div.style.overflowX = 'auto'
    div.style.left = e.pageX + 'px'
    div.style.top = e.pageY + 'px'

    var input = document.createElement('input')
    input.setAttribute('type', 'number')
    input.setAttribute('class', 'form-control')
    input.style.width = '4.9em'
    input.style.display = 'inline-block'
    input.style.margin = '0.5em'
    input.onchange = function () {
        if (id != undefined && id != 'undefined' && checkLocalstorage(item)) {
            var val = JSON.parse(localStorage.getItem(item))
            if (Object.hasOwn(val[0], 'id')) {
                val.find(e => e.id == id)[property] = parseFloat(val.find(e => e.id == id)[property]) + parseFloat(this.value)
                if (element != undefined && element != 'undefined') { element.value = val.find(e => e.id == id)[property] }
                
            }
            if (Object.hasOwn(val[0], 'n')) {
                val.find(e => e.n == id)[property] = parseFloat(val.find(e => e.n == id)[property]) + parseFloat(this.value)
                if (element != undefined && element != 'undefined') { element.value = val.find(e => e.n == id)[property] }
            }           
            localStorage.setItem(item, JSON.stringify(val))
        } else {
            if (checkPropertyInLocalstorage(item, property)) {
                var val = JSON.parse(localStorage.getItem(item))
                val[property] = parseFloat(val[property]) + parseFloat(this.value)
                localStorage.setItem(item, JSON.stringify(val))
                if (element != undefined && element != 'undefined') { element.value = val[property] }
            } else {
                var val = new Object()
                val[property] = this.value
                localStorage.setItem(item, JSON.stringify(val))
                if (element != undefined && element != 'undefined') { element.value = val[property] }
            }
        }
        document.dispatchEvent(new CustomEvent(event,{ detail: id }))
        div.remove()
    }
    div.appendChild(input)
    document.body.appendChild(div)
    input.focus()
    e.stopPropagation();
}
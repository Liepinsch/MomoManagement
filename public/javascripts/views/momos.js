function addMomoToLocalStorage() {
    var momoArray = []
    if (checkLocalstorage('momoList')) {
        momoArray = JSON.parse(localStorage.getItem('momoList'))
    }
    momoArray.push(createNewMomo())
    localStorage.setItem('momoList', JSON.stringify(momoArray))
    createMomoList()
}

function deleteMomoFromLocalStorage(id) {
    if (checkLocalstorage('momoList')) {
        var momoList = JSON.parse(localStorage.getItem('momoList'))
        for (var i = 0; i < momoList.length; i++) {
            if (momoList[i].id == id) {
                var index = momoList.indexOf(momoList[i])
                momoList.splice(index, 1)
                localStorage.setItem('momoList', JSON.stringify(momoList))
            }
        }
    }

    createMomoList()
}

function createNewMomo() {
    var momo = new Object()
    momo.id = createGuid()
    momo.pic = ''
    momo.rarity = 'rare'
    momo.dailyROI = 0
    momo.level = 0
    momo.sihp = 0
    momo.type = ''
    momo.family = false
    momo.momoverse = false
    momo.gem1 = ''
    momo.gem2 = ''
    momo.gem3 = ''
    momo.gem4 = ''
    momo.price = ''
    momo.upgradeMec = ''
    momo.upgradeUsd = ''
    momo.enchancement = ''

    return momo
}
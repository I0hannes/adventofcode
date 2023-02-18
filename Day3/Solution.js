readTextFile("input.txt")

// #region First Part
var rows = input.split("\n")
var result = []
var isUpperCase = (character) => {
    if (character === character.toUpperCase()) {
        return true
    }
    if (character === character.toLowerCase()) {
        return false
    }
}

for (var i in rows) {
    var row = rows[i]
    var length = row.length / 2

    var first = row.substr(0, length)
    var second = row.substr(length)

    var reg = new RegExp("[" + second + "]", 'g')
    var match = first.match(reg)
    var character = match[0]

    var isUPC = isUpperCase(character)

    console.log(reg, first, match, isUPC)

    result.push(parseInt(character, 36) - 9 + (isUPC ? 26 : 0))
}


console.log(result.reduce((value, curr) => value + curr))
// #endregion

readTextFile("input.txt")

// #region Second Part
// PARTE 2


var rows = input.split("\n")
var result = []
var isUpperCase = (character) => {
    if (character === character.toUpperCase()) {
        return true
    }
    if (character === character.toLowerCase()) {
        return false
    }
}
var groupBy = (n, data) => {
    let result = [];
    for (let i = 0; i < data.length; i += n) result.push(data.slice(i, i + n));
    return result;
}

var groups = groupBy(3, rows)


for (var i in groups) {
    var group = groups[i]
    var reg = new RegExp(`[${group[0]}]`, 'g')

    var match = group[1].match(reg)
    var reg2 = new RegExp(`[${match}]`, 'g')
    var match2 = group[2].match(reg2)

    console.log(group, reg, match, match2)

    var character = match2[0]

    var isUPC = isUpperCase(character)
    result.push(parseInt(character, 36) - 9 + (isUPC ? 26 : 0))

}


// for(var i in rows){
//   var row = rows[i]
//   var length = row.length/2

//   var first = row.substr(0, length)
//   var second = row.substr(length)

//   var reg = new RegExp("["+ second +"]", 'g')
//   var match = first.match(reg)
//   var character = match[0]

//   var isUPC = isUpperCase(character)

//   console.log(reg, first, match, isUPC)

//   result.push(parseInt(character, 36) - 9 + (isUPC ? 26 : 0))
// }


console.log(result.reduce((value, curr) => value + curr))
// #endregion

// TODO Rearrange it.
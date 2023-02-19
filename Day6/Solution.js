var input = ``
readTextFile("input.txt")

// #region First Part
var firstPart = () => {
    var count = 0
    var value = 4
    for (let index = 0; index < input.length; index++) {
        var nRepetition = input.slice(index, index + value).match(/(.).*\1/)
        if (nRepetition?.length) continue
        if (!nRepetition) {
            count = index + value
            break
        }
    }

    console.log("first part", count)
}
// #endregion

// #region Second Part
var secondPart = () => {
    var count = 0
    var value = 14
    for (let index = 0; index < input.length; index++) {
        var nRepetition = input.slice(index, index + value).match(/(.).*\1/)
        if (nRepetition?.length) continue
        if (!nRepetition) {
            count = index + value
            break
        }
    }

    console.log("second part", count)
}
// #endregion

// #region Resolution
firstPart()
secondPart()
// #endregion
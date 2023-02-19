readTextFile("input.txt")

// #region Parse
var Matrix = []
var Movements = []

// maybe reading column per column? or just parse with the spaces...
var spaces = 4

var containers = input.split("\n\n")[0].split("\n")

var dimensionMatrix = containers[containers.length - 1].split(" ").filter(x => x != "").length
// console.log("dm", dimensionMatrix)

var temp = []
for (var key in containers) {

    var row = containers[key].split("    ")
    if (row == '' || key == containers.length - 1) continue

    // it maybe an idea to use the dimension matrix to concatenate the arary and then divide them by this number and reconstruct the array 

    // console.log("row", row)
    for (var k in row) {
        var data = row[k].split(" ")
        // console.log("data", data)
        data.forEach(x => temp.push(x))
    }
}

var count = 0
var tempMatrix = []
temp.forEach((x, i) => {
    // console.log(i/dimensionMatrix)
    // it's need an internet connection to observe how multi dimensional array works
    // I succedded without internet :)
    tempMatrix.push({ "id": i % dimensionMatrix, "value": x })
    if (count != dimensionMatrix) count++
    if (count == dimensionMatrix) count = 0
})

for (var i = 0; i < dimensionMatrix; i++) {
    // console.log(i)
    Matrix.push(tempMatrix.filter(x => x.id == i && x.value != "").reverse())
}

// Search:  an idea is to use a regx to split between "move from" and "from to"
var moves = input.split("\n\n")[1].split("\n")

for (var key in moves) {
    var objects = moves[key].split(" ")

    var howMany = objects[1]
    var from = objects[3]
    var to = objects[5]

    Movements.push({ howMany: howMany, from: from, to: to })
}

// console.log("Matrix", Matrix)
var tempMatrix = JSON.parse(JSON.stringify(Matrix))
// #endregion

// #region First Part
var firstPart = () => {
    Movements.forEach((x) => {
        // console.log(x)
        howMany = x.howMany
        let from = x.from - 1
        let to = x.to - 1
        do {
            var element = Matrix[from].pop()
            // console.log("element", element)
            // console.log("to",Matrix[to])
            Matrix[to].push(element)
            howMany--
        } while (howMany > 0)
    })

    var result = []
    Matrix.forEach(x => result.push(x.pop().value.replace('[', '').replace(']', '')))
    console.log("First Part: ", result.join(""))
}
// #endregion

// #region Second Part
var secondPart = () => {
    // console.log(Matrix, tempMatrix)
    Matrix = tempMatrix

    Movements.forEach((x) => {
        // console.log(x)
        howMany = x.howMany
        let from = x.from - 1
        let to = x.to - 1

        var elements = Matrix[from].slice(Matrix[from].length - howMany, Matrix[from].length)
        for (let index = 0; index < howMany; index++) {
            Matrix[from].pop()
        }
        // console.log("element",elements)
        // console.log("to",Matrix[to])
        elements.forEach(x => Matrix[to].push(x))

    })

    var result = []
    // TODO: check here it's interrupting here now... but it worked for the test and for the second  part...
    Matrix.forEach(x => {
        result.push(x.pop().value.replace('[', '').replace(']', ''))
    })
    console.log("Second Part: ", result.join(""))
}
// #endregion

// #region Resolution
firstPart()
secondPart()
 // #endregion
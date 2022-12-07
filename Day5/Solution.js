var input = `
    [S] [C]         [Z]            
[F] [J] [P]         [T]     [N]    
[G] [H] [G] [Q]     [G]     [D]    
[V] [V] [D] [G] [F] [D]     [V]    
[R] [B] [F] [N] [N] [Q] [L] [S]    
[J] [M] [M] [P] [H] [V] [B] [B] [D]
[L] [P] [H] [D] [L] [F] [D] [J] [L]
[D] [T] [V] [M] [J] [N] [F] [M] [G]
 1   2   3   4   5   6   7   8   9 

move 3 from 4 to 6
move 1 from 5 to 8
move 3 from 7 to 3
move 4 from 5 to 7
move 1 from 7 to 8
move 3 from 9 to 4
move 2 from 8 to 2
move 4 from 4 to 5
move 2 from 5 to 1
move 2 from 5 to 6
move 7 from 8 to 1
move 9 from 3 to 9
move 11 from 6 to 5
move 2 from 6 to 7
move 12 from 1 to 4
move 10 from 2 to 9
move 2 from 3 to 9
move 1 from 7 to 5
move 4 from 7 to 6
move 2 from 6 to 1
move 5 from 1 to 6
move 10 from 9 to 1
move 9 from 9 to 8
move 13 from 4 to 3
move 7 from 6 to 2
move 2 from 8 to 5
move 9 from 3 to 9
move 8 from 9 to 8
move 4 from 8 to 4
move 1 from 7 to 5
move 3 from 9 to 1
move 7 from 2 to 1
move 1 from 3 to 1
move 1 from 3 to 6
move 1 from 6 to 1
move 2 from 3 to 6
move 5 from 4 to 1
move 1 from 6 to 1
move 3 from 8 to 7
move 8 from 8 to 4
move 3 from 5 to 4
move 1 from 6 to 7
move 1 from 5 to 8
move 4 from 5 to 2
move 7 from 5 to 8
move 3 from 2 to 7
move 7 from 4 to 8
move 11 from 8 to 4
move 15 from 4 to 1
move 25 from 1 to 6
move 4 from 8 to 7
move 1 from 2 to 4
move 11 from 6 to 4
move 12 from 6 to 3
move 1 from 1 to 9
move 1 from 9 to 8
move 16 from 1 to 3
move 1 from 8 to 7
move 12 from 4 to 6
move 9 from 6 to 5
move 3 from 6 to 5
move 6 from 7 to 5
move 3 from 3 to 5
move 2 from 6 to 3
move 11 from 5 to 8
move 2 from 8 to 3
move 2 from 1 to 4
move 7 from 3 to 1
move 2 from 4 to 6
move 2 from 6 to 2
move 5 from 7 to 3
move 1 from 1 to 6
move 1 from 1 to 8
move 2 from 2 to 5
move 1 from 7 to 4
move 1 from 1 to 2
move 10 from 3 to 5
move 11 from 3 to 6
move 1 from 4 to 9
move 1 from 9 to 4
move 1 from 4 to 2
move 2 from 5 to 9
move 2 from 2 to 8
move 2 from 1 to 6
move 2 from 1 to 2
move 2 from 3 to 6
move 3 from 8 to 1
move 3 from 1 to 4
move 7 from 8 to 3
move 2 from 9 to 5
move 2 from 4 to 9
move 7 from 5 to 6
move 2 from 8 to 6
move 1 from 4 to 8
move 2 from 2 to 4
move 21 from 6 to 3
move 10 from 5 to 7
move 7 from 7 to 6
move 1 from 9 to 3
move 1 from 4 to 9
move 1 from 9 to 4
move 1 from 8 to 4
move 8 from 6 to 4
move 1 from 4 to 5
move 1 from 5 to 8
move 4 from 3 to 6
move 1 from 8 to 2
move 1 from 4 to 2
move 2 from 7 to 3
move 2 from 2 to 7
move 22 from 3 to 5
move 4 from 6 to 2
move 2 from 6 to 9
move 7 from 3 to 9
move 6 from 9 to 1
move 18 from 5 to 3
move 2 from 5 to 4
move 20 from 3 to 5
move 3 from 7 to 3
move 5 from 1 to 2
move 11 from 5 to 7
move 1 from 1 to 7
move 3 from 9 to 3
move 16 from 5 to 8
move 7 from 8 to 7
move 1 from 9 to 2
move 8 from 2 to 3
move 2 from 2 to 4
move 3 from 3 to 1
move 9 from 3 to 8
move 1 from 6 to 3
move 9 from 7 to 3
move 3 from 1 to 8
move 1 from 7 to 9
move 1 from 9 to 4
move 1 from 7 to 5
move 10 from 4 to 5
move 2 from 4 to 2
move 19 from 8 to 5
move 1 from 8 to 3
move 4 from 3 to 5
move 2 from 4 to 8
move 4 from 7 to 8
move 4 from 3 to 9
move 4 from 7 to 6
move 2 from 2 to 5
move 2 from 3 to 2
move 6 from 8 to 7
move 1 from 8 to 4
move 2 from 6 to 4
move 3 from 4 to 8
move 3 from 9 to 2
move 4 from 7 to 8
move 28 from 5 to 8
move 16 from 8 to 4
move 11 from 8 to 4
move 3 from 3 to 4
move 7 from 5 to 8
move 13 from 8 to 7
move 1 from 5 to 6
move 1 from 6 to 7
move 1 from 9 to 2
move 2 from 6 to 2
move 12 from 4 to 9
move 4 from 4 to 1
move 2 from 9 to 8
move 4 from 8 to 3
move 3 from 4 to 5
move 4 from 4 to 1
move 4 from 4 to 7
move 3 from 7 to 9
move 5 from 9 to 7
move 7 from 2 to 3
move 1 from 5 to 7
move 8 from 1 to 5
move 1 from 2 to 4
move 11 from 3 to 1
move 10 from 5 to 3
move 3 from 9 to 1
move 3 from 9 to 6
move 5 from 1 to 6
move 7 from 6 to 9
move 8 from 9 to 7
move 9 from 3 to 4
move 1 from 6 to 9
move 8 from 7 to 1
move 9 from 4 to 2
move 2 from 1 to 6
move 3 from 2 to 6
move 4 from 4 to 6
move 2 from 9 to 8
move 2 from 1 to 2
move 1 from 3 to 8
move 2 from 8 to 4
move 1 from 6 to 8
move 11 from 1 to 6
move 1 from 1 to 5
move 3 from 2 to 9
move 2 from 9 to 3
move 1 from 1 to 7
move 2 from 4 to 9
move 4 from 2 to 9
move 2 from 8 to 5
move 10 from 6 to 1
move 2 from 5 to 6
move 5 from 9 to 8
move 5 from 8 to 7
move 1 from 2 to 1
move 7 from 1 to 2
move 2 from 9 to 4
move 1 from 3 to 5
move 15 from 7 to 2
move 8 from 6 to 3
move 2 from 4 to 3
move 2 from 6 to 4
move 4 from 7 to 1
move 4 from 7 to 5
move 1 from 6 to 4
move 3 from 1 to 7
move 5 from 7 to 6
move 4 from 7 to 5
move 18 from 2 to 4
move 5 from 6 to 4
move 4 from 1 to 2
move 8 from 3 to 8
move 2 from 8 to 4
move 2 from 3 to 7
move 1 from 5 to 7
move 3 from 8 to 4
move 2 from 7 to 2
move 1 from 3 to 8
move 9 from 2 to 6
move 2 from 8 to 6
move 1 from 7 to 3
move 1 from 3 to 5
move 3 from 6 to 8
move 1 from 8 to 5
move 1 from 5 to 9
move 1 from 1 to 2
move 5 from 4 to 6
move 10 from 6 to 2
move 5 from 2 to 6
move 5 from 6 to 4
move 1 from 6 to 3
move 6 from 4 to 6
move 3 from 2 to 6
move 2 from 2 to 3
move 11 from 4 to 6
move 1 from 9 to 5
move 4 from 6 to 7
move 1 from 4 to 3
move 12 from 4 to 3
move 1 from 8 to 6
move 9 from 5 to 7
move 1 from 5 to 2
move 1 from 8 to 5
move 1 from 4 to 9
move 9 from 7 to 9
move 1 from 3 to 4
move 2 from 3 to 6
move 2 from 5 to 6
move 2 from 8 to 5
move 11 from 3 to 4
move 2 from 3 to 1
move 1 from 2 to 3
move 1 from 3 to 8
move 3 from 7 to 9
move 5 from 4 to 2
move 2 from 5 to 8
move 6 from 4 to 2
move 1 from 1 to 3
move 12 from 9 to 1
move 6 from 1 to 6
move 1 from 8 to 4
move 1 from 8 to 3
move 5 from 2 to 7
move 2 from 3 to 9
move 5 from 7 to 1
move 1 from 7 to 5
move 2 from 9 to 1
move 14 from 1 to 7
move 2 from 4 to 7
move 7 from 2 to 4
move 1 from 2 to 1
move 1 from 1 to 3
move 1 from 5 to 4
move 1 from 9 to 6
move 16 from 6 to 5
move 2 from 5 to 4
move 12 from 6 to 8
move 10 from 4 to 8
move 9 from 7 to 3
move 4 from 7 to 6
move 11 from 5 to 8
move 2 from 5 to 2
move 14 from 8 to 9
move 1 from 5 to 1
move 3 from 9 to 4
move 2 from 2 to 1
move 7 from 8 to 3
move 6 from 3 to 5
move 8 from 9 to 8
move 1 from 6 to 1
move 1 from 4 to 2
move 4 from 3 to 8
move 1 from 7 to 2
move 3 from 1 to 5
move 2 from 5 to 7
move 3 from 9 to 2
move 1 from 1 to 8
move 5 from 5 to 4
move 2 from 7 to 8
move 4 from 2 to 5
move 1 from 2 to 4
move 2 from 7 to 8
move 4 from 6 to 2
move 6 from 5 to 3
move 1 from 6 to 5
move 1 from 5 to 3
move 1 from 3 to 8
move 8 from 8 to 3
move 9 from 8 to 5
move 9 from 8 to 2
move 2 from 8 to 9
move 2 from 3 to 8
move 5 from 5 to 8
move 1 from 3 to 7
move 2 from 9 to 5
move 7 from 2 to 4
move 14 from 4 to 6
move 2 from 2 to 7
move 1 from 7 to 3
move 1 from 7 to 9
move 3 from 5 to 2
move 1 from 7 to 1
move 3 from 2 to 4
move 7 from 8 to 2
move 3 from 6 to 1
move 17 from 3 to 1
move 2 from 8 to 3
move 6 from 2 to 7
move 2 from 7 to 9
move 3 from 6 to 8
move 2 from 8 to 6
move 4 from 2 to 1
move 3 from 4 to 7
move 1 from 8 to 7
move 1 from 8 to 9
move 1 from 4 to 2
move 3 from 5 to 7
move 2 from 3 to 1
move 2 from 3 to 5
move 5 from 7 to 4
move 5 from 7 to 3
move 1 from 4 to 8
move 3 from 3 to 1
move 6 from 1 to 3
move 1 from 7 to 5
move 2 from 9 to 2
move 3 from 5 to 8
move 1 from 8 to 1
move 8 from 3 to 5
move 1 from 4 to 9
move 3 from 6 to 5
move 3 from 6 to 3
move 2 from 3 to 7
move 1 from 4 to 7
move 3 from 6 to 4
move 2 from 7 to 2
move 1 from 7 to 8
move 2 from 5 to 4
move 1 from 6 to 1
move 7 from 4 to 7
move 7 from 5 to 2
move 10 from 2 to 3
move 3 from 2 to 6
move 3 from 8 to 1
move 1 from 8 to 7
move 2 from 6 to 3
move 1 from 6 to 9
move 4 from 7 to 5
move 16 from 1 to 5
move 1 from 9 to 7
move 3 from 7 to 6
move 11 from 5 to 6
move 2 from 7 to 9
move 12 from 6 to 4
move 2 from 6 to 9
move 6 from 3 to 2
move 1 from 5 to 7
move 5 from 9 to 5
move 1 from 9 to 6
move 4 from 3 to 7
move 1 from 4 to 2
move 7 from 2 to 5
move 3 from 5 to 2
move 6 from 5 to 6
move 3 from 2 to 6
move 9 from 6 to 8
move 5 from 5 to 9
move 5 from 7 to 1
move 4 from 1 to 9
move 2 from 9 to 4
move 1 from 6 to 7
move 9 from 4 to 1
move 7 from 5 to 9
move 18 from 1 to 3
move 9 from 9 to 5
move 8 from 8 to 2
move 1 from 2 to 5
move 4 from 2 to 3
move 4 from 9 to 6
move 1 from 4 to 8
move 2 from 5 to 7
move 2 from 9 to 2
move 10 from 3 to 9
move 5 from 5 to 9
move 1 from 7 to 2
move 2 from 8 to 7
move 2 from 3 to 5
move 2 from 9 to 1
move 2 from 7 to 3
move 1 from 2 to 1
move 5 from 5 to 8
move 1 from 2 to 1
move 15 from 3 to 6
move 1 from 7 to 6
move 10 from 6 to 5
move 1 from 7 to 8
move 4 from 1 to 6
move 1 from 8 to 3
move 2 from 1 to 5
move 3 from 8 to 1
move 1 from 4 to 6
move 1 from 4 to 2
move 4 from 9 to 7
move 6 from 5 to 7
move 3 from 1 to 9
move 10 from 6 to 8
move 2 from 1 to 3
move 8 from 7 to 9
move 1 from 9 to 6
move 2 from 7 to 9
move 3 from 3 to 5
move 1 from 2 to 6
move 2 from 6 to 5
move 5 from 9 to 4
move 4 from 8 to 2
move 1 from 1 to 3
move 4 from 5 to 9
move 3 from 6 to 1
move 2 from 1 to 5
move 3 from 5 to 2
move 8 from 8 to 3
move 11 from 9 to 4
move 13 from 4 to 8
move 2 from 9 to 2
move 2 from 3 to 1
move 1 from 4 to 1
move 1 from 3 to 8
move 2 from 6 to 9
move 7 from 8 to 1
move 3 from 2 to 5
move 7 from 2 to 5
move 3 from 4 to 6
move 4 from 9 to 2
move 2 from 3 to 5
move 9 from 5 to 6
move 5 from 2 to 7
move 2 from 9 to 2
move 2 from 9 to 7
move 12 from 6 to 8
move 5 from 5 to 7
move 1 from 9 to 8
move 3 from 1 to 6
move 5 from 5 to 8
move 6 from 1 to 9
move 2 from 1 to 5
move 1 from 6 to 9
move 5 from 9 to 7
move 2 from 5 to 8
move 11 from 7 to 6
move 20 from 8 to 1
move 2 from 9 to 8
move 4 from 7 to 6
move 6 from 8 to 3
move 13 from 6 to 9
move 4 from 3 to 2
move 4 from 6 to 3
move 2 from 3 to 6
move 5 from 9 to 8
move 2 from 7 to 1
move 2 from 6 to 9
move 6 from 8 to 3
move 6 from 3 to 6
move 5 from 2 to 9
move 22 from 1 to 3
move 3 from 2 to 1
move 5 from 9 to 3
move 1 from 1 to 6
move 3 from 6 to 2
move 1 from 2 to 4
move 33 from 3 to 5
move 1 from 8 to 7`



 // #region Parse
 var Matrix = []
 var Movements = []

 // maybe reading column per column? or just parse with the spaces...
 var spaces = 4

 var containers = input.split("\n\n")[0].split("\n")

 var dimensionMatrix =containers[containers.length-1].split(" ").filter(x => x != "").length
 // console.log("dm", dimensionMatrix)

 var temp = []
 for(var key in containers){

    var row = containers[key].split("    ")
    if(row == '' || key == containers.length-1) continue 

    // it maybe an idea to use the dimension matrix to concatenate the arary and then divide them by this number and reconstruct the array 
   
    // console.log("row", row)
    for(var k in row){
        var data = row[k].split(" ")
        // console.log("data", data)
        data.forEach(x => temp.push(x))
    }
}

var count = 0
var tempMatrix = []
temp.forEach((x, i ) => {
    // console.log(i/dimensionMatrix)
    // it's need an internet connection to observe how multi dimensional array works
    // I succedded without internet :)
    tempMatrix.push({"id": i%dimensionMatrix, "value": x})
    if(count != dimensionMatrix) count++
    if(count == dimensionMatrix) count = 0
})

for(var i = 0; i < dimensionMatrix; i++){
    // console.log(i)
    Matrix.push(tempMatrix.filter(x => x.id == i && x.value != "").reverse())
}

 // Search:  an idea is to use a regx to split between "move from" and "from to"
 var moves = input.split("\n\n")[1].split("\n")
 
 for(var key in moves){
    var objects = moves[key].split(" ")

    var howMany = objects[1]
    var from = objects[3]
    var to = objects[5]

    Movements.push({howMany: howMany, from: from, to: to})
}

console.log("Matrix", Matrix)
var tempMatrix = Matrix
 // #endregion


 // #region First Part
 var firstPart = () => {
    Movements.forEach((x) => {
        console.log(x)
        howMany = x.howMany
        let from = x.from-1
        let to = x.to -1
        do {
            var element = Matrix[from].pop()
            console.log("element",element)
            // console.log("to",Matrix[to])
            Matrix[to].push(element)
            howMany--
        } while (howMany > 0)
    })

    var result = []
    Matrix.forEach(x => result.push(x.pop().value.replace('[','').replace(']','')))
    console.log(result)
}
 // #endregion

 // #region Second Part
 var secondPart = () => {
    Matrix = tempMatrix
    Movements.forEach((x) => {
        console.log(x)
        howMany = x.howMany
        let from = x.from-1
        let to = x.to -1

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
    Matrix.forEach(x => result.push(x.pop().value.replace('[','').replace(']','')))
    console.log(result.join())
}
 // #endregion

 // #region Resolution
 firstPart()
 secondPart()
 // #endregion
readTextFile("inputTest.txt")

// convert into a list of folders and files
// with weight and name of files 
// determine the sizing of each folders
// the subfolders are counted
// and then gave the total as result

// #region Functions
var findNextInstruction = (array, index) => {
    return array.filter((x, i) => {
        return i > index
    }).find(z => z.isInstruction == true)
}

var findParentFolder = (index) => {
    return detailedArray.filter((x, i) => {
        return i < index
    }).findLast(y => y.value.includes("cd")) // .value.split(" ")[2]
}

var findParent = (array, folderName) => {
    return array.find(ele => ele.moveTo == folderName)
}

var positionOf = (element) => {
    return detailedArray.indexOf(element)
}
// #endregion

// #region Parse
var result = []
var rows = input.split("\n")
var detailedArray = []
rows.forEach((x, i) => {
    let isInstruction = /^(\$)/.test(x)
    let isFile = /(^(\d)*)\s(\w)+/.test(x)
    let isFolder = /^(dir\s(\w)+).*/.test(x)
    let isList = /(ls)$/.test(x)
    let isMoveIn = /^(\$ cd )([A-z]|\/)+/.test(x)
    let isMoveOut = /^(\$ cd ..)/.test(x)
    let moveTo = isMoveIn ? x.split(" ")[x.split(" ").length - 1] : false
    let fileName = isFile ? x.split(" ")[1] : false
    let fileSize = isFile ? x.split(" ")[0] : false

    detailedArray.push({
        value: x
        , index: i
        , isInstruction: isInstruction
        , isFile: isFile
        , isFolder: isFolder
        , isList: isList
        , isMoveIn: isMoveIn
        , isMoveOut: isMoveOut
        , moveTo: moveTo
        , fileName: fileName
        , fileSize: fileSize
    })
})

var folders = []
var folder = []
var files = []

for (let i = 0; i < detailedArray.length; i++) {
    const x = detailedArray[i];

    var fol = []
    if(x.isMoveIn && x.moveTo == "/") {
        fol.push({ folderName: x.moveTo })
        folder.push(fol)
    }

    if(x.isMoveIn && x.moveTo != "/"){
        // if exsist move to that position and save the previous namefolder
        // something like detailedArray.filter((x,index) => index < i ).find(x => x.isFolder)
        // if not create the folder
    }

    if(x.isMoveOut){
        // return to the previous move in folder position 
    }

    if(x.isList){
        // take between the next instruction and the current one and then move on in that i
    }

    // console.log(x, i)

    // var next = findNextInstruction(detailedArray, i + 1)
    // console.log("next i: ", next)

    // if (x.isList && next) {
    //     for (let index = i; index < next?.index; index++) {
    //         const element = detailedArray[index];

    //         console.log("middle instruction", element)
    //         var fol = []
    //         var fil = []

    //         if (x.isInstruction && x.isMoveIn) fol.push({ folderName: element.moveTo })
    //         if (x.isFile) fil.push({ fileName: element.fileName, fileSize: element.fileSize })

    //         if (fil) files.push(fil)
    //         if (fol) folder.push(fol)
    //     }

    //     i = next.index

    // }
    // folders.push({ files: files, folder: folder })
}

console.log(folders)


// #region Old 
// for (let index = 0; index < temp.length; index++) {
//     var nextInstrucion = findNextInstruction(index)
//     const element = temp[index]

//     console.log("Next instruction", nextInstrucion)

//     // if(!element.isFile || !element.isFolder) continue

//     let parent = findParentFolder(index)
//     let values = element.value.split(" ")
//     let sizeFile = values[0]
//     let nameFile = values[1]
//     let nameFolder = values[1]


//     let object = {}
//     object.parent = parent
//     object.index = index

//     if (element.isFolder) {
//         object.name = nameFolder
//         object.size = undefined
//         object.isFolder = true
//     }
//     if (element.isFile) {
//         object.name = nameFile
//         object.size = sizeFile
//         object.isFile = true
//     }
//     array.push(object)
//     console.log(values, object)
// }
// #endregion
// #endregion


// #region First Part
var firstPart = () => {

}
// #endregion

// #region Second Part
var secondPart = () => {

}
// #endregion

// #region Resolution
firstPart()
secondPart()
 // #endregion
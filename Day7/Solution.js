readTextFile("inputTest.txt")

// convert into a list of folders and files
// with weight and name of files 
// determine the sizing of each folders
// the subfolders are counted
// and then gave the total as result

 // #region Parse
var result = []
var rows = input.split("\r\n")
var temp = []
rows.forEach((x,i) => {
    let isInstruction = x.startsWith("$")
    let isFile = /(^(\d)*)\s(\w)+/.test(x)
    let isFolder = /^(dir\s(\w)+).*/.test(x)
    let isList = /(ls)$/.test(x)
    temp.push({value: x, index: i, isInstruction: isInstruction, isFile: isFile, isFolder: isFolder, isList: isList})
})

var findNextInstruction = (index) =>{
      return temp.filter((x, i)=>{
            return i > index
        }).find(z => z.isInstruction) 
}

var findParentFolder = (index) => {
    return temp.filter((x, i) => {
        return i < index
    }).findLast(y => y.value.includes("cd")) // .value.split(" ")[2]
}

var positionOf = (element) => {
    return temp.indexOf(element)
}

var array = []

console.log("Next instruction", nextInstrucion)
for (let index = 0; index <  temp.length; index++) {
    var nextInstrucion = findNextInstruction(index)
    const element = temp[index]
    // if(!element.isFile || !element.isFolder) continue

    let parent = findParentFolder(index)
    let values = element.value.split(" ")
    let sizeFile = values[0] 
    let nameFile = values[1]
    let nameFolder = values[1]
    

    let object = {}
    object.parent = parent
    object.index = index 

    if(element.isFolder) {
        object.name = nameFolder
        object.size = undefined
        object.isFolder = true
    }
    if(element.isFile) {
        object.name = nameFile
        object.size = sizeFile
        object.isFile = true
    }
    array.push(object)
    // console.log(values, object)
}
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
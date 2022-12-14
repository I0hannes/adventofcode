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
    temp.push({value: x, index: i, isInstruction: isInstruction, isFile: isFile, isFolder: isFolder})
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
// TODO: using the index of the row get the current instruction and then skip the usewd results
temp.forEach((x,i)=>{
    if(x.isInstruction){
        if(x.value.includes("cd")){
            // x -> go to currFolder
            // .. -> enter parent currFolder
            // / -> go to root

            if(x.value.includes("/")){
                if(result.length === 0)
                {
                    result.push({hasParent: false, parentIndex: 0, index: i, name: "\\", isFile: false})
                    console.log("folder start /")
                }
                if(result.length != 0) 
                    currFolder = result.find((x) => {
                        return x.name === "/"
                })
            }

            if(x.value.includes("..")){
                // TODO: take the current name of currFolder and returnn the parent of it
                // result.find(x => x.name === currFolder.name)
                console.log("change the current folder to the parent folder")
            }

            if (x.value.split(" ")[2]) {
                // TODO: search and find for each nested array
                // result.find()
                console.log(`add new name folder: ${x.value.split(" ")[2]}`)
            }
        }

        if(x.value.includes("ls")){
            // TODO: find the next instrucion to use it as reference to take all the rows

            var arrTemp = []
            console.log("Next instruction", nextInstrucion)
            for (let index = 0; index <  temp.length; index++) {
                var nextInstrucion = findNextInstruction(i)
                const element = temp[index];
                if(!element.isFile) continue

                let parent = findParentFolder(index)
                let values = element.value.split(" ")
                let size =  values[0] 
                let name = values[1]
                
                array.push({parent: parent, index: index, name: name, size: size, isFile: element.isFile, isFolder: element.isFolder })
                console.log(arrTemp)
                // console.log(element, parent)
                if(nextInstrucion?.index === index){
                    break
                }
            }

        }
    } 
})
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
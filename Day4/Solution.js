readTextFile("input.txt")


 // #region Parse Input
 
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



var cleaningGroup = input.split("\n");
var result = []
var isFullyContained = (min,min2,max,max2) => {
  return (min2 >= min && max2 <= max) || (min >= min2 && max <= max2)

}

for(var key in cleaningGroup){
  var groups = cleaningGroup[key].split(",").map(x => x.split("-") )

  let [min, max] = groups[0]
  let [min2, max2] = groups[1]
  


  var isFC = isFullyContained(parseInt(min), parseInt(min2), parseInt(max), parseInt(max2))
  // console.log(groups, min, max, min2, max2, isFC)
  result.push(isFC)
}


console.log(result.filter(x => x === true).length);

// 424 (y)



var cleaningGroup = input.split("\n");
var result = [];

// var isFullyContained = (min, min2, max, max2) => {
//   var sInB = min2 >= min && max2 <= max;
//   var BIns = min >= min2 && max <= max2;

//   return sInB || BIns;
//   // 424
// }

var isFullyContained = (pair, pair2) => {
  var sInB = pair2.min >= pair.min && pair2.max <= pair.max
  var BIns = pair.min >= pair2.min && pair.max <= pair2.max

  return sInB || BIns;
  // 424
}
var isPartiallyContained = (pair, pair2) => {
  var intersection = pair.min <= pair2.max  && pair2.min <= pair.max
  return intersection
  // 804
}

for (var key in cleaningGroup) {
  var groups = cleaningGroup[key].split(",").map((pair) => {
    let [min, max] = pair.split("-").map(Number)
    return { min: min, max: max }
  });
  // console.log(groups);

  var isFC = isFullyContained(groups[0], groups[1]) 
  var isPC =  isPartiallyContained(groups[0], groups[1])
  // console.log(isFC, isPC)
  result.push(isFC || isPC)
}

console.log(result.filter((x) => x === true).length)




// TODO Rearrange it.
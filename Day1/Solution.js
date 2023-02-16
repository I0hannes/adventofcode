readTextFile("Input.txt")

var goblinsCalories = input.split("\n\n")

var goblins = []

goblinsCalories.forEach ((goblin) =>{
  let calories = goblin.split("\n").map (x => parseInt(x,10))

  let eachTot = calories.reduce((acc, curr) => acc + curr, 0)

  goblins.push(eachTot)
})

// console.log(goblins);

var max = Math.max(...goblins);

// console.log(max)

goblins = goblins.filter((x) => { return x !== max});

var max2 = Math.max(...goblins);

goblins = goblins.filter((x) => { return x !== max2});

var max3 = Math.max(...goblins);

var finalResult = max + max2 + max3;

console.log("max", max, "max2", max2, "max3", max3)
console.log("finale", finalResult) 
// ! This is the solution of the second part
// TODO the missing part one.
// #region Functions
var findWinnnerAgainst = (competitor) => {
    switch (competitor) {
        case 1:
            return 2
        case 2:
            return 3
        case 3:
            return 1
        default:
            console.log("1");
            break;
    }
}

var findLoserAgainst = (competitor) => {
    switch (competitor) {
        case 1:
            return 3
        case 2:
            return 1
        case 3:
            return 2
        default:
            console.log("1");
            break;
    }
}
// #endregion

// #region First Part
var firstPart = () => {
    readTextFile("input.txt")
    var legend = [
        { name: "Rock", value: 1, letter: "AX", win: "CZ" },
        { name: "Paper", value: 2, letter: "BY", win: "AX" },
        { name: "Scissors", value: 3, letter: "CZ", win: "BY" }
    ];

    var matrix = input.split("\n");
    var list = [];
    var score = 0;
    matrix.forEach((ele) => {
        var fight = new Array(ele.split(" "));

        if (fight[0].length === 1) {
            return;
        }

        var enemy =
            fight[0][0] === "A"
                ? 1
                : fight[0][0] === "B"
                    ? 2
                    : fight[0][0] === "C"
                        ? 3
                        : 0;
        var mine =
            fight[0][1] === "X"
                ? 1
                : fight[0][1] === "Y"
                    ? 2
                    : fight[0][1] === "Z"
                        ? 3
                        : 0;

        var isDraw = false;
        var isWon = false;
        if (mine === enemy) isDraw = true;
        else {
            switch (mine) {
                case 1:
                    isWon = enemy === 3;
                    break;
                case 2:
                    isWon = enemy === 1;
                    break;
                case 3:
                    isWon = enemy === 2;
                    break;
                default:
                    console.log("1");
                    break;
            }
        }

        var score = mine + (isWon ? 6 : 0) + (isDraw ? 3 : 0);
        list.push(score);

    });

    console.log("First Part:", list.reduce((acc, curr) => acc + curr, 0));
}
// #endregion


// #region Second Part
var secondPart = () => {
    readTextFile("input.txt")

    var legend = [
        { name: "Rock", value: 1, letter: "AX", win: "CZ" },
        { name: "Paper", value: 2, letter: "BY", win: "AX" },
        { name: "Scissors", value: 3, letter: "CZ", win: "BY" }
    ];

    var matrix = input.split("\n");
    var list = [];
    var score = 0;

    matrix.forEach((ele) => {
        var fight = new Array(ele.split(" "));

        if (fight[0].length === 1) {
            return;
        }

        var enemy =
            fight[0][0] === "A"
                ? 1
                : fight[0][0] === "B"
                    ? 2
                    : fight[0][0] === "C"
                        ? 3
                        : 0;

        var mine =
            fight[0][1] === "X"
                ? findLoserAgainst(enemy)
                : fight[0][1] === "Y"
                    ? enemy
                    : fight[0][1] === "Z"
                        ? findWinnnerAgainst(enemy)
                        : 0;

        var isDraw = false;
        var isWon = false;
        if (mine === enemy) isDraw = true;
        else {
            switch (mine) {
                case 1:
                    isWon = enemy === 3;
                    break;
                case 2:
                    isWon = enemy === 1;
                    break;
                case 3:
                    isWon = enemy === 2;
                    break;
                default:
                    console.log("1");
                    break;
            }
        }

        var score = mine + (isWon ? 6 : 0) + (isDraw ? 3 : 0);
        list.push(score);
    });

    console.log("Second Part: ", list.reduce((acc, curr) => acc + curr, 0));
}
// #endregion

// #region Resolution
firstPart()
secondPart()
// #endregion
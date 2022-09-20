// player factory
let createPlayer = () => {
    for (let i = 0; i < 2; i++){
        if (gameBoardModule.peopleArray.length == 0){
        let playerName = prompt("What is your nickname?");
        let playerNum = 1
        let xo = 'x'
        gameBoardModule.peopleArray.push(playerName, playerNum, xo)
        }
        else {
            let playerName = prompt("What is your nickname?");
            let playerNum = 2
            let xo = 'o'
            gameBoardModule.peopleArray.push(playerName, playerNum, xo)
        }

        
        console.log("show me array   ", gameBoardModule.peopleArray)
    }
}

// click events
const cell0 = document.querySelector(".cell0")
//cell0.addEventListener("click", renderArray(cell0))

//gameboard
let gameBoardModule = (function() {
    let peopleArray = [];
    let gameBoard = ['X'];
    let makePlayerMove = (type) => {
        gameBoard.push(type)
    }
    return {peopleArray, gameBoard, makePlayerMove}
}) ();

//display controller module
let displayControllerModule = (function() {
    const move = document.querySelectorAll(".boardButton");

    // we need to loop through buttons
    let index = 0
    move.forEach(moves => {
        moves.dataset.linkedButton = index;
        moves.addEventListener("click", renderArray);

        function renderArray() {
            const cells = document.querySelectorAll(".cell")
            let index = 0;
            cells.forEach(cell => {
                cell.dataset.linkedButton = index;


                // we need it to o
                if (cell.getAttribute("data-linked-button") == moves.getAttribute("data-linked-button")) {
                    cell.textContent = gameBoardModule.gameBoard[gameBoardModule.gameBoard.length - 1]
                }
                index++;
            })
            console.log(gameBoardModule.peopleArray)
            if (gameBoardModule.gameBoard[gameBoardModule.gameBoard.length - 1] == 'X')
            gameBoardModule.makePlayerMove('O');
            else {
                gameBoardModule.makePlayerMove('X')
            }
            function won(player){
                const vertical = [0,1,2].map(i =>{return[i, i+3, i+6]})
                const horizontal = [0,3,6].map(i => {return[i,i+1,i+2]})
                const diagonal = [[0,4,8],[2,4,6]]
        
                let winLines = [].concat(vertical).concat(horizontal).concat(diagonal)
                console.log(winLines)

                let result = winLines.some(i => {
                    return cells[i[0]].textContent == player && cells[i[1]].textContent == player && cells[i[2]].textContent == player
                })
                return result
                console.log(result)
                console.log(gameBoardModule.gameBoard)
            }
        
            if (won('O')){
                alert(`${gameBoardModule.peopleArray[3]} won the game!`)
                move.forEach(moves => {
                    moves.remove()
                })
            } else if (won('X')){
                alert(`${gameBoardModule.peopleArray[0]} won the game!`)
                move.forEach(moves => {
                    moves.remove()
                })
            }
            else if (gameBoardModule.gameBoard.length == 10) {
                alert("Its a tie")
                move.forEach(moves => {
                    moves.remove()
                })
            }
        }
        index++
    })


    const startGame = document.querySelector(".startGame")
    startGame.addEventListener("click", createPlayer)
    
    const restart = document.querySelector(".restart")
    restart.addEventListener("click", clearBoard)
    
    function clearBoard() {
        location.reload();
    }
}) ()








/*const playerName = (name) => {
    const sayName = () => console.log(`my name is ${name}`)
    return {sayName}
}

const player = (name) => {
    //create player object
    const {sayName} = playerName(name)
    const myName = () => console.log(`${name} is the name`)
    return {sayName, myName}

}

const flos = player('flos')
flos.sayName()
flos.myName()
console.log(flos)
*/

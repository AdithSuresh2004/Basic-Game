let boxes = document.querySelectorAll(".box");
let restart = document.getElementById("reset");
let newButton = document.getElementById("new");
let turnO = true;
let win = false;
let count = 0;
let sO = 0;
let sX = 0;
let scoreX = document.getElementById('XButton');
let scoresO = document.querySelector('#OButton .score');
let scoresX = document.querySelector('#XButton .score');
let gameWon= document.getElementById('winner');
let gameOverMsg=document.getElementsByClassName('winlose')[0]
let gameOverContainer=document.getElementsByClassName('popup')[0]
let hide=document.getElementById('hide')

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const newGame = () => {
    turnO = true;
    count = 0;
    win = false; // Reset the win variable
    gameOverContainer.style.display='none'
    hide.style.display='flex'
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
        box.style.backgroundColor = "white";
        box.classList.remove("O");
        box.classList.remove("X");
    });
};

const resetGame = () => {
    turnO = true;
    count = 0;
    win = false; // Reset the win variable
    gameOverContainer.style.display='none'
    hide.style.display='flex'
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
        box.style.backgroundColor = "white";
        box.classList.remove("O");
        box.classList.remove("X");
    });
    scoresX.innerText = '-';
    scoresO.innerText = '-';
};

scoreX.addEventListener("click", () => {
    turnO = false;
});

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            box.style.backgroundColor = "black";
            box.style.color = "white";
            turnO = false;
            box.classList.add("O");
        } else {
            box.innerText = "X";
            box.style.backgroundColor = "white";
            box.style.color = "black";
            turnO = true;
            box.classList.add("X");
        }
        box.disabled = true;
        count += 1;

        // Check for the winner after updating the box content
        checkWinner();
        setTimeout(() => Drawpopup(), 100);
    });
});

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let posval1 = boxes[pattern[0]].innerText;
        let posval2 = boxes[pattern[1]].innerText;
        let posval3 = boxes[pattern[2]].innerText;

        if (posval1 !== "" && posval2 !== "" && posval3 !== "") {
            if (posval1 === posval2 && posval2 === posval3) {
                win = true;
                setTimeout(() => Winpopup(posval1), 100);
                boxes.forEach((box) => {
                    box.disabled = true;
                });
                if (posval1 === 'X') {
                    scoresX.innerText = sO += 1;
                }
                if (posval1 === 'O') {
                    scoresO.innerText = sX += 1;
                }
            }
        }
    }
};

function Winpopup(winner) {
    if (win == true) {
        gameOverContainer.style.display='flex'
        gameWon.innerText=winner;
        gameOverMsg.innerText='Winner!';
        hide.style.display='none'
    }
}

function Drawpopup() {
    if (win == false && count == 9) {
        gameOverContainer.style.display='flex'
        hide.style.display='none'
        gameOverMsg.innerText='Draw';
    }
}

newButton.addEventListener('click', newGame);
restart.addEventListener('click', resetGame);

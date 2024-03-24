let boxes = document.querySelectorAll(".box");
let result = document.querySelector(".result");
let reset = document.querySelector("#reset");

let turnO = true; // playerO,playerX

const winningPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

let count = 0;
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        count++;
        console.log(count);
        if (turnO) {
            box.innerText = "O";
            box.style.color = "red"
            turnO = false;
        } else {
            box.innerText = "X";
            box.style.color = "blue"
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
        
    });
});

let nReset = true;
function checkWinner(){
    for(let pattern of winningPatterns)
    {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3)
            {
                if(nReset)
                {
                    result.innerHTML = `Winner is ${pos1}`;
                    result.style.display = "block";
                    reset.innerText = "New Game";
                    nReset = false;
                } 
                else{
                    nReset = true;
                }
            }
        }
    }
}

const resetGame = () =>{
    turnO = true;
    for(box of boxes)
    {
        box.disabled = false;
        box.innerText = "";
    }
    result.style.display = "none";
    reset.innerText = "Reset Game";
    nReset = true;
}

reset.addEventListener("click",resetGame);




let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetbtn");
let newGamebtn = document.querySelector("#newBtn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");

let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]


boxes.forEach((box) => {
    box.addEventListener("click", ()=>{
        // console.log("box was clicked.");
        if(turnO){
            box.innerText = "X";
            turnO = false;
        }else{
            box.innerText = "O";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    })
})


const resetGame = ()=>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}



const showWinner = (winner)=>{
    msg.innerText = `Congratulations, Winner is '${winner}'`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}


const checkWinner = () =>{
    for(let pattern of winPatterns){
        // console.log(pattern);

        // console.log(pattern[0], pattern[1], pattern[2]);
        
        // console.log(
        //     boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText
        // );
        
        let posi1 = boxes[pattern[0]].innerText;
        let posi2 = boxes[pattern[1]].innerText;
        let posi3 = boxes[pattern[2]].innerText;

        if(posi1 != "" && posi2 != "" && posi3 != ""){
            if(posi1 === posi2 && posi2 === posi3){
                console.log("winner : "+posi1);
                showWinner(posi1);
            }
        }
    }
}

newGamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click", resetGame);
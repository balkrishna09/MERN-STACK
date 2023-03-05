const boxes = document.querySelectorAll(".box");
// console.log(boxes);
const gameInfo = document.querySelector(".header");
const newGameBtn =  document.querySelector(".btn");
let currentPlayer;
let gameGrid;
const winningPositions=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
];

//

function initGame(){
    currentPlayer = 'X';
    gameGrid = ["","","","","","","","",""];
    boxes.forEach((box,index)=>{
        box.innerHTML = "";
        boxes[index].style.pointerEvents="all";
        //removing green color method 2 , method 1 in location.reload() in html
        box.classList = `box box${index+1}`;
    });
    newGameBtn.classList.remove("active");
    gameInfo.innerText = `Current Player - ${currentPlayer}`;
}

function swapTurn(){
    if(currentPlayer == 'X'){
        currentPlayer = 'O';
    }
    else{
        currentPlayer = 'X';
        }
    gameInfo.innerText = `Current Player - ${currentPlayer}`;
}


function handleClick(index){
    if(gameGrid[index]==""){
        boxes[index].innerHTML = currentPlayer;
        gameGrid[index] = currentPlayer;
        boxes[index].style.pointerEvents = "none";

        //swap turn
        swapTurn();

        checkGameOver();

    }
}

boxes.forEach((box,index)=>{
    console.log(index);
    box.addEventListener('click',()=>{
        handleClick(index);
    })
})

function checkGameOver(){
    let answer ="";
    winningPositions.forEach((position)=>{
        //all 3 boxes should not be empty and should be same in value 
        if((gameGrid[position[0]]!==""|| gameGrid[position[1]]!=="" || gameGrid[position[2]]!=="" )
            && (gameGrid[position[0]]== gameGrid[position[1]])&& (gameGrid[position[1]]== gameGrid[position[2]]))
            {
                //check if winner is X
                if(gameGrid[position[0]]=='X'){
                    answer = "X Wins";
                }
                else{
                    answer = "O Wins";
                }

                //diable pointer event
                boxes.forEach((box)=>{box.style.pointerEvents="none";})

                boxes[position[0]].classList.add("win");
                boxes[position[1]].classList.add("win");
                boxes[position[2]].classList.add("win");
            }
    });
    if(answer!==""){
        gameInfo.innerText = `Winner Player - ${answer}`
        newGameBtn.classList.add("active");
        return;
    }

    //lets check TIE
    let fillCount = 0;
    gameGrid.forEach((box)=>{
        if(box!= "")
        fillCount++;
    })

    if(fillCount==9){
        gameInfo.innerText = "TIE";
        newGameBtn.classList.add("active");
    }
    

    

}

// 


initGame();

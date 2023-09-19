console.log("Tic Tac Toe")
let Info=document.querySelector(".info")
let isGameOver=new Audio("gameover.mp3")
let pressAudio=new Audio("click.mp3")
let button=document.getElementById("reset")
let boxes=Array.from(document.getElementsByClassName("box"))
let winIndicator=getComputedStyle(document.body).getPropertyValue("--backCombo")
let gameover=false;



// let click=new Audio("")
// // click.play()
// document.body.addEventListener("click",function(){
//     click.play()
// })
// click.muted=true;

const O_TURN="0";
const X_TURN="x";
let currentPlayer=X_TURN;
let spaces=Array(9).fill(null)


const startGame=()=>{
boxes.forEach(box=> {box.addEventListener("click",boxClicked)})

}

function boxClicked(e){
const id=e.target.id
if(!spaces[id]){
spaces[id]=currentPlayer
e.target.innerText=currentPlayer


currentPlayer=currentPlayer==X_TURN?O_TURN:X_TURN


pressAudio.play();
if(!gameover){
    Info.innerText="Turn For" + currentPlayer;
}
winCombinations();
Draw()
// let winningBlock=winCombinations()
// winningBlock.map(box => boxes[box].style.backgroundColor=winIndicator)
// resetBtn();
}
}






// function changeTurn(){
// return 



// }

const winCombinations=()=>{
    var wins=[
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[2,4,6],
[0,4,8]
    ]

    wins.forEach(e=>{
if(boxes[e[0]].innerText===boxes[e[1]].innerText && boxes[e[2]].innerText===boxes[e[1]].innerText && boxes[e[0]].innerText !== ""){
Info.innerText=boxes[e[0]].innerText + " has Won"
currentPlayer=" "
// Info.innerText="Restart Again To Play"


// resetBtn();
document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width="16rem";
gameover=true;
isGameOver.play();
// resetBtn();



}



    })
 

    }



// function Draw(){

// wins.forEach(e=>{
//     if(boxes[e[0]].innerText!==boxes[e[1]].innerText && boxes[e[2]].innerText!==boxes[e[1]].innerText && boxes[e[0]].innerText !== ""){
//     Info.innerText=boxes[e[0]].innerText + " Match Drawn" }  }) 
//     // currentPlayer=""



// }


button.addEventListener("click",resetBtn)

function resetBtn(){
spaces.fill(null)

boxes.forEach(box=>{
    box.innerText="" })

currentPlayer=X_TURN
gameover=false
document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width="0rem";
if(!gameover){
    currentPlayer=currentPlayer==X_TURN?O_TURN:X_TURN
    Info.innerText="Turn For" + currentPlayer
    

}




}


// function gameOver(){
// if



// }


startGame();

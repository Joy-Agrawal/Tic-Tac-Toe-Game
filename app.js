let currentPlayer = 'X'
let array = Array(9).fill(null)

function handleClick(el){
    const id = Number(el.id)
    if(array[id] !== null){
        alert("Do no overwrite Please !!")
        return;
    }
    array[id] = currentPlayer
    el.innerText = currentPlayer
    array[id] === 'X'? el.style.color = "Blue": el.style.color = "Red"

    if(checkWinner()){
        document.write(`Winner is ${currentPlayer}`)
        return;
    }

    currentPlayer = currentPlayer === 'X'? 'O':'X'
    
    if(!array.some((e) => e === null)){
        document.write("Draw!!")
        return
    }
    // console.log(el)
    // console.log(array)
}

function checkWinner(){
    if(
        (array[0]!== null && array[0] === array[1] && array[1] === array[2]) ||
        (array[3]!== null && array[3] === array[4] && array[4] === array[5]) ||
        (array[6]!== null && array[6] === array[7] && array[6] === array[8]) ||
        (array[0]!== null && array[0] === array[3] && array[3] === array[6]) ||
        (array[1]!== null && array[1] === array[4] && array[4] === array[7]) ||
        (array[2]!== null && array[2] === array[5] && array[5] === array[8]) ||
        (array[0]!== null && array[0] === array[4] && array[4] === array[8]) ||
        (array[6]!== null && array[6] === array[4] && array[4] === array[2]) 
){
    // document.write(`Winner is ${currentPlayer}`)
    return true;
}
else 
    return false;
}
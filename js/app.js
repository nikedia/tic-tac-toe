window.onload = function() {
    var board = document.querySelector('.board-js');

    board.addEventListener('click',addXO)
};

var centinel = true;

function addXO (event){
    if (centinel) 
        event.target.innerHTML = 'X';
        //event.target.innerHTML = '<img src="1.png">';
    else
        event.target.innerHTML = 'O';
        //textContent o innerHTML
    centinel = !centinel;
}

// function reset-button() {
//     document.getElementsByTagName("table").reset();
// }    


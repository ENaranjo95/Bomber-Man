//User clicks on horizontal button
//user clicks on vertical button

//Global variables
var y = 0;
var x = 0;


//Event listener for horizontal button
document.getElementById("up").onclick = moveUp

//Event listener for down button
document.getElementById('down').onclick = moveDown

//Event listener for left button
document.getElementById('left').onclick = moveLeft

//Event listener for right button
document.getElementById("right").onclick = moveRight


//Function for Up movement
function moveDown(){
  y += 10;
  document.getElementsByTagName('img')[0].style.marginTop = y + "px"
  console.log(down)
}

//Function for Down movement
function moveUp(){
  y -= 10;
  document.getElementsByTagName('img')[0].style.marginTop = y + "px"
  console.log(up)
}

//Function for left movement
function moveLeft(){
  x -= 10;
  document.getElementsByTagName('img')[0].style.marginLeft = x + "px"
}

//Function for right movement
function moveRight(){
  x += 10;
  document.getElementsByTagName('img')[0].style.marginLeft = x + "px"
}


document.onkeydown = keyDownHandler;

let keyDownState = {};

function keyDownHandler(e) {

    keyDownState[e.keyCode] = true;

    e = e || window.event;

    if (keyDownState['38'] === true && keyDownState ['37'] === true) {
      moveUp();
      moveLeft();
    }
    else if(keyDownState ['38'] === true && keyDownState['39'] === true){
      moveUp();
      moveRight();
    }
    else if(keyDownState['40'] === true && keyDownState ['37'] === true){
      moveDown();
      moveLeft();
    }
    else if(keyDownState ['40'] === true && keyDownState['39']=== true){
      moveDown();
      moveRight();
    }
    else if(e.keyCode == '38'){
      moveUp();
    }
    else if (e.keyCode == '40') {
      moveDown();
    }
    else if (e.keyCode == '37') {
       moveLeft();
    }
    else if (e.keyCode == '39') {
       moveRight();
    }
}

document.onkeyup = keyUpHandler;

function keyUpHandler(e){
  keyDownState [e.keyCode] = false;
}


// elements
var buttonSelect = document.getElementById("buttons");
var displayView = document.getElementById("display");



// state
var startingNumber = "0"


// views
function renderDisplay() {
  displayView.innerHTML = startingNumber;
}

// listeners (controllers)
buttonSelect.addEventListener("click", buttons);

function buttons(event){
  startingNumber += event.target.id;
  renderDisplay()
  // buttonMath
}

function buttonEquals(){

}

function buttonAC(){
  
}

function buttonMultiply(){

}

function buttonDivide(){

}

function buttonAdd(){

}

function buttonSubtract(){

}


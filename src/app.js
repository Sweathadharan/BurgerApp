// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

//Initial price of the burger
var wholeWheatBun = 10;

//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};

//Current state of the ingredients in the burger
var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true
};

// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  renderButtons();
  renderIngredientsBoard();
  renderPrice();
}

function renderPatty() {
  let patty = document.querySelector("#patty");
  //you can also use getElementById
  if (state.Patty) {
    patty.style.display = "inherit";
  } else {
    patty.style.display = "none";
  }
}

function renderCheese() {
  //Trial 1 - Change the visibility of cheese based on state by manipulating the DOM
  let Cheese = document.getElementById("cheese");
  if (state.Cheese) {
    Cheese.style.display = "block";
  } else {
    Cheese.style.display = "none";
  }


}

function renderTomatoes() {
  //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
  let Tomatoes = document.getElementById("tomato");
  if (state.Tomatoes) {
    Tomatoes.style.display = "block";
  } else {
    Tomatoes.style.display = "none";
  }

}

function renderOnions() {
  //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
  let Onions = document.getElementById("onion");
  if (state.Onions) {
    Onions.style.display = "block";
  } else {
    Onions.style.display = "none";
  }

}

function renderLettuce() {
  //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
  let Lettuce = document.getElementById("lettuce");
  if (state.Lettuce) {
    Lettuce.style.display = "block";
  } else {
    Lettuce.style.display = "none";
  }

}

document.querySelector(".btn-patty").onclick = function () {
  state.Patty = !state.Patty;
  renderAll();
};

// Trial 2 - Setup event listener for the cheese button
document.querySelector(".btn-cheese").onclick = function () {
  state.Cheese = !state.Cheese;
  renderAll();
};


// Trial 2 - Setup event listener for the tomatoes button
document.querySelector(".btn-tomatoes").onclick = function () {
  state.Tomatoes = !state.Tomatoes;
  renderAll();
};


// Trial 2 - Setup event listener for the onion button
document.querySelector(".btn-onions").onclick = function () {
  state.Onions = !state.Onions;
  renderAll();
};


// Trial 2 - Setup event listener for the lettuce button
document.querySelector(".btn-lettuce").onclick = function () {
  state.Lettuce = !state.Lettuce;
  renderAll();
};


//Challenge 1 - Add/Remove the class active to the buttons based on state
function renderButtons() {
  for (let ingredient in state) {
    let button = document.querySelector(".btn-" + ingredient.toLowerCase());
    if (state[ingredient]) {
      button.classList.add('active'); 
    } 
    else {
      button.classList.remove('active'); 
    }
  }
}

function renderButtons(){
  if(state.Patty){
    document.querySelector(".btn-patty").classList.add("active")
  }else{
    document.querySelector(".btn-patty").classList.remove("active")

  }

  if(state.Cheese){
    document.querySelector(".btn-cheese").classList.add("active")
  }else{
    document.querySelector(".btn-cheese").classList.remove("active")

  }

  if(state.Tomatoes){
    document.querySelector(".btn-tomatoes").classList.add("active")
  }else{
    document.querySelector(".btn-tomatoes").classList.remove("active")

  }

  
  if(state.Onions){
    document.querySelector(".btn-onions").classList.add("active")
  }else{
    document.querySelector(".btn-onions").classList.remove("active")

  }

  if(state.Lettuce){
    document.querySelector(".btn-lettuce").classList.add("active")
  }else{
    document.querySelector(".btn-lettuce").classList.remove("active")

  }


}



//Challenge 2 - Render only the items selected in the ingredients board based on the state


function renderIngredientsBoard(){
  let item1=document.querySelector('.items1');
  let item2=document.querySelector('.items2');
  let item3=document.querySelector('.items3');
  let item4=document.querySelector('.items4');
  let item5=document.querySelector('.items5');

  state.Patty ? item1.style.visibility="visible":item1.style.visibility="hidden"
  state.Cheese ? item2.style.visibility="visible":item2.style.visibility="hidden"
  state.Tomatoes ? item3.style.visibility="visible":item3.style.visibility="hidden"
  state.Onions ? item4.style.visibility="visible":item4.style.visibility="hidden"
  state.Lettuce? item5.style.visibility="visible":item5.style.visibility="hidden"
}



//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients


function renderPrice() {
  
  let priceElement = document.querySelector(".price-details");
  let total = 10;
  for (let ingredient in state) {
    if (state[ingredient]) {
      total += ingredients[ingredient];
    }
  }
    priceElement.textContent = "Total Price: INR " + total;
}


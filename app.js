const cardArray = [
  {
    name: "apple",
    img: "assets/apple.png",
  },
  {
    name: "bananas",
    img: "assets/bananas.png",
  },
  {
    name: "fruits",
    img: "assets/fruits.png",
  },
  {
    name: "orange",
    img: "assets/orange.png",
  },
  {
    name: "pear",
    img: "assets/pear.png",
  },
  {
    name: "strawberry",
    img: "assets/strawberry.png",
  },
  {
    name: "apple",
    img: "assets/apple.png",
  },
  {
    name: "bananas",
    img: "assets/bananas.png",
  },
  {
    name: "fruits",
    img: "assets/fruits.png",
  },
  {
    name: "orange",
    img: "assets/orange.png",
  },
  {
    name: "pear",
    img: "assets/pear.png",
  },
  {
    name: "strawberry",
    img: "assets/strawberry.png",
  },
];

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector("#grid");
const resultDisplay = document.querySelector("#result");

let caardschosen = [];

let cardChoosenId = [];

const cardsWon = [];

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "assets/hidden.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    gridDisplay.appendChild(card);
  }
}
createBoard();

function checkForMatch() {
  const cards = document.querySelectorAll("img");
  const optionOneId = cardChoosenId[0];
  const optionTwoId = cardChoosenId[1];
  console.log(cards);
  console.log("checking for match");

  if (optionOneId == optionTwoId) {
    alert("You have clicked the same image!");
    cards[optionOneId].setAttribute("src", "assets/hidden.png");
    cards[optionTwoId].setAttribute("src", "assets/hidden.png");
  }

  if (caardschosen[0] === caardschosen[1]) {
    alert("You found a match");
    cards[optionOneId].setAttribute("src", "assets/white.png");
    cards[optionTwoId].setAttribute("src", "assets/white.png");
    cards[optionOneId].removeEventListener("click", flipCard);
    cards[optionTwoId].removeEventListener("click", flipCard);
    cardsWon.push(caardschosen);
  } else {
    cards[optionOneId].setAttribute("src", "assets/hidden.png");
    cards[optionTwoId].setAttribute("src", "assets/hidden.png");
    alert("Sorry, try again");
  }
  resultDisplay.innerHTML = cardsWon.length;
  caardschosen = [];
  cardChoosenId = [];
  if (cardsWon.length === cardArray.length / 2) {
    resultDisplay.innerHTML = "Congratulations! You found them all!";
  }
}

function flipCard() {
  const cardId = this.getAttribute("data-id");
  caardschosen.push(cardArray[cardId].name);
  cardChoosenId.push(cardId);

  console.log(caardschosen);
  console.log(cardChoosenId);

  this.setAttribute("src", cardArray[cardId].img);
  if (caardschosen.length === 2) {
    setTimeout(checkForMatch, 500);
  }
}

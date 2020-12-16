var cards = [
  {
    id: 1,
    front: "img/front.jpg",
  },
  {
    id: 2,
    front: "img/front.jpg",
  },
  {
    id: 3,
    front: "img/front.jpg",
  },
  {
    id: 4,
    front: "img/front.jpg",
  },
  {
    id: 5,
    front: "img/front.jpg",
  },
  {
    id: 6,
    front: "img/front.jpg",
  },
  {
    id: 7,
    front: "img/front.jpg",
  },
  {
    id: 8,
    front: "img/front.jpg",
  },
  {
    id: 9,
    front: "img/front.jpg",
  },
];

var board = document.getElementById("board");

function createBoard() {
  for (let i = 0; i < cards.length; i++) {
    var img = document.createElement("img");
    img.src = "img/front.jpg";
    img.id = "imgStyle";
    img.addEventListener("click", flipCard);
    board.appendChild(img);
  }
}
function flipCard(event) {
  event.target.src = "img/pieza.jpg";
}
createBoard();

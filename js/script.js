var cards = [
  { front: "img/front.jpg" },
  { front: "img/front.jpg" },
  { front: "img/front.jpg" },
  { front: "img/front.jpg" },
  { front: "img/front.jpg" },
  { front: "img/front.jpg" },
  { front: "img/front.jpg" },
  { front: "img/front.jpg" },
  { front: "img/front.jpg" },
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

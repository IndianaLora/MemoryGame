var cards = [
  { front: "img/front.jpg" },
  { front: "img/front.jpg" },
  { front: "img/front.jpg" },
  { front: "img/front.jpg" },
  { front: "img/front.jpg" },
  { front: "img/front.jpg" },
  { front: "img/front.jpg" },
];

var board = document.getElementById("board");

function boardx() {
  for (let i = 0; i < cards.length; i++) {
    var img = document.createElement("img");
    img.src = cards.front;
    img.id = "imgStyle";
    board.appendChild(img);
  }
}
boardx();
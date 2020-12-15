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

function boardx() {
  for (let i = 0; i < cards.length; i++) {
    var img = document.createElement("img");
    img.src = "img/front.jpg";
    img.id = "imgStyle";
    img.addEventListener("click", function (event) {
      this.src = "img/pieza.jpg";
    });
    board.appendChild(img);
  }
}
boardx();

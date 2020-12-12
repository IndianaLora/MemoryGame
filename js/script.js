var cards = {
  front: "img/front.jpg",
};

var img = document.createElement("img");
img.src = cards.front;
img.id = "imgStyle";

var board = document.getElementById("board");
board.appendChild(img);


for (let i = 0; i < cards.length; i++) {
    const element = cards[i];
    console.log(element);
  }
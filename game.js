createCanvas(700, 500);
noStroke();

let x = 350;
let y = 250;
let s = 1.0;
let gameState = true;
let state = "Start";
let characterX = 350;
let characterY = 250;
let velocity = 0.6;
let velocityY = 0.2;
let gravity = 0.15;
let acceleration = 0.001;

function madicken(x, y) {
  //umbrella
  push();
  translate(x - 50 * s, y - 180 * s);
  rotate(PI);
  fill(0, 0, 0);
  arc(0 * s, -50 * s, 150 * s, 90 * s, 0, PI);
  pop();

  push();
  strokeWeight(4 * s);
  stroke(0, 0, 0);
  line(x - 10 * s, y - 70 * s, x - 50 * s, y - 150 * s);
  pop();

  //hair
  fill(153, 76, 0);
  rect(x - 75 * s, y - 85 * s, 50 * s, 60 * s, 20 * s);

  //head
  fill(255, 205, 153);
  ellipse(x - 50 * s, y - 75 * s, 50 * s, 55 * s);

  //hair
  push();
  translate(x - 36 * s, y - 95 * s);
  rotate(2.4);
  fill(153, 76, 0);
  ellipse(0, 0, 17 * s, 40 * s);
  pop();

  push();
  translate(x - 65 * s, y - 95 * s);
  rotate(-2.4);
  fill(153, 76, 0);
  ellipse(0, 0, 17 * s, 40 * s);
  pop();

  //eyes
  fill(255, 255, 255);
  ellipse(x - 40 * s, y - 80 * s, 10 * s);
  fill(76, 153, 0);
  ellipse(x - 40 * s, y - 79 * s, 7 * s);
  fill(0, 0, 0);
  ellipse(x - 40 * s, y - 78 * s, 5 * s);

  fill(255, 255, 255);
  ellipse(x - 60 * s, y - 80 * s, 10 * s);
  fill(76, 153, 0);
  ellipse(x - 60 * s, y - 79 * s, 7 * s);
  fill(0, 0, 0);
  ellipse(x - 60 * s, y - 78 * s, 5 * s);

  //mouth
  push();
  strokeWeight(2 * s);
  stroke(255, 51, 153);
  fill(255, 255, 255);
  ellipse(x - 50 * s, y - 60 * s, 10 * s);
  pop();

  //neck
  fill(255, 205, 153);
  rect(x - 57 * s, y - 50 * s, 15 * s, 10 * s);

  //legs & feet
  rect(x - 65 * s, y + 25 * s, 10 * s, 50 * s, 80 * s);
  rect(x - 45 * s, y + 25 * s, 10 * s, 50 * s, 80 * s);
  rect(x - 75 * s, y + 65 * s, 20 * s, 10 * s, 80 * s);
  rect(x - 45 * s, y + 65 * s, 20 * s, 10 * s, 80 * s);

  //arms
  push();
  strokeWeight(10 * s);
  stroke(255, 205, 153);
  line(x - 30 * s, y - 10 * s, x - 10 * s, y - 40 * s);
  line(x - 10 * s, y - 40 * s, x - 10 * s, y - 70 * s);
  pop();

  //dress
  fill(255, 255, 255);
  rect(x - 74 * s, y - 45 * s, 50 * s, 80 * s, 80 * s);

  push();
  translate(x - 50 * s, y + 45 * s);
  rotate(PI);
  arc(0, 0, 80 * s, 90 * s, 0, PI);
  pop();

  fill(255, 0, 0);
  rect(x - 75 * s, y + 2 * s, 51 * s, 5 * s);
}

function house() {
  //house
  fill(255, 51, 51);
  rect(x + 50 * s + y - 150 * s, 200, 200);

  //roof
  fill(0, 0, 0);
  triangle(
    x + 150 * s,
    y - 50 * s,
    x + 250 * s,
    y - 160 * s,
    x + 350 * s,
    y - 50 * s
  );

  //windows
  fill(255, 255, 255);
  rect(x + 182 * s, y - 5 * s, 50, 50);
  fill(0, 0, 0);
  rect(x + 205 * s, y - 5 * s, 3, 50);
  rect(x + 182 * s, y + 18 * s, 50, 3);

  fill(255, 255, 255);
  rect(x + 275 * s, y - 5 * s, 50, 50);
  fill(0, 0, 0);
  rect(x + 298 * s, y - 5 * s, 3, 50);
  rect(x + 275 * s, y + 18 * s, 50, 3);

  //door
  fill(255, 255, 255);
  rect(x + 230 * s, y + 85 * s, 50, 65);

  fill(0, 0, 0);
  rect(x + 235 * s, y + 120 * s, 10, 3);
}

function startScreen() {
  background(204, 255, 255);
  house();

  //grass
  fill(153, 255, 153);
  rect(x - 600 + y, 400, 700);

  push();
  strokeWeight(2);
  stroke(0, 0, 0);
  fill(0, 200, 0);
  rect(x - 100, y - 25, 200, 50, 20);
  pop();

  fill(0, 0, 0);
  textSize(20);
  textFont("Arial");
  let course = "Play";
  let attribute = "game";
  let sentence = course + " " + attribute;

  text(sentence, 300, 255);

  madicken(180, characterY - 300);
  if (gameState === true) {
    characterY = characterY + 1;

    if (characterY < -300) {
      characterY = height;
    }
  }
}

function gameScreen(x, y) {
  //sky
  fill(204, 255, 255);
  rect(x + y - 600, 0, 700);

  //sun
  fill(255, 255, 204);
  ellipse(x - 285, y - 200, 70, 70);

  //house
  fill(255, 51, 51);
  rect(x + 50 + y - 150, 200, 200);

  //roof
  fill(0, 0, 0);
  triangle(x + 150, y - 50, x + 250, y - 160, x + 350, y - 50);

  //windows
  fill(255, 255, 255);
  rect(x + 182, y - 5, 50, 50);
  fill(0, 0, 0);
  rect(x + 205, y - 5, 3, 50);
  rect(x + 182, y + 18, 50, 3);

  fill(255, 255, 255);
  rect(x + 275, y - 5, 50, 50);
  fill(0, 0, 0);
  rect(x + 298, y - 5, 3, 50);
  rect(x + 275, y + 18, 50, 3);

  //door
  fill(255, 255, 255);
  rect(x + 230, y + 85, 50, 70);

  fill(0, 0, 0);
  rect(x + 235, y + 120, 10, 3);

  //grass
  fill(153, 255, 153);
  rect(x - 600 + y, 400, 700);

  //stems
  push();
  stroke(0, 204, 0);
  strokeWeight(3);
  line(x - 310, y + 115, x - 310, y + 150);
  line(x - 210, y + 115, x - 210, y + 150);
  line(x - 260, y + 115, x - 260, y + 150);
  pop();

  //flower 1
  fill(255, 153, 204);
  ellipse(x - 310, y + 105, 15, 15);
  ellipse(x - 320, y + 115, 15, 15);
  ellipse(x - 310, y + 125, 15, 15);
  ellipse(x - 300, y + 115, 15, 15);

  fill(255, 255, 0);
  ellipse(x - 310, y + 115, 10, 10);

  //flower 2
  fill(204, 153, 255);
  ellipse(x - 260, y + 105, 15, 15);
  ellipse(x - 270, y + 115, 15, 15);
  ellipse(x - 260, y + 125, 15, 15);
  ellipse(x - 250, y + 115, 15, 15);

  fill(255, 255, 0);
  ellipse(x - 260, y + 115, 10, 10);

  //flower 3
  fill(255, 153, 204);
  ellipse(x - 210, y + 105, 15, 15);
  ellipse(x - 220, y + 115, 15, 15);
  ellipse(x - 210, y + 125, 15, 15);
  ellipse(x - 200, y + 115, 15, 15);

  fill(255, 255, 0);
  ellipse(x - 210, y + 115, 10, 10);

  //shadow
  fill(0, 110, 0);
  ellipse(300, 420, 100, 10);

  madicken(350, characterY);
  if (gameState === true) {
    if (keyIsDown(32)) {
      gravity = -0.3;
    } else {
      gravity = 0.1;
    }
    velocity = velocityY + gravity;
    y = y + velocity;
  }
  if (y > 400) {
    gameState = false;
  }

  if (characterY <= 345) {
    characterY = characterY + 2;
  }

  if (characterY > 345 && velocity > 4) {
    state = "ResultYourDead";
  }
  if (characterY > 345 && velocity < 4) {
    state = "ResultYouWin";
  }
}

function deadScreen() {
  //sky
  fill(200);
  rect(x + y - 600, 0, 700);

  //sun
  fill(255, 255, 255);
  ellipse(x - 285, y - 200, 70, 70);

  //house
  fill(255, 51, 51);
  rect(x + 50 + y - 150, 200, 200);

  //roof
  fill(0, 0, 0);
  triangle(x + 150, y - 50, x + 250, y - 160, x + 350, y - 50);

  //windows
  fill(255, 255, 255);
  rect(x + 182, y - 5, 50, 50);
  fill(0, 0, 0);
  rect(x + 205, y - 5, 5, 50);
  rect(x + 182, y + 18, 50, 5);

  fill(255, 255, 255);
  rect(x + 275, y - 5, 50, 50);
  fill(0, 0, 0);
  rect(x + 298, y - 5, 5, 50);
  rect(x + 275, y + 18, 50, 5);

  //door
  fill(255, 255, 255);
  rect(x + 230, y + 85, 50, 70);

  fill(0, 0, 0);
  rect(x + 235, y + 120, 10, 5);

  //grass
  fill(15, 155, 15);
  rect(x - 600 + y, 400, 700);

  //stems
  push();
  stroke(0, 204, 0);
  strokeWeight(3);
  line(x - 310, y + 115, x - 310, y + 150);
  line(x - 210, y + 115, x - 210, y + 150);
  line(x - 260, y + 115, x - 260, y + 150);
  pop();

  //flower 1
  fill(255, 153, 20);
  ellipse(x - 310, y + 105, 15, 15);
  ellipse(x - 320, y + 115, 15, 15);
  ellipse(x - 310, y + 125, 15, 15);
  ellipse(x - 300, y + 115, 15, 15);

  fill(255, 255, 0);
  ellipse(x - 310, y + 115, 10, 10);

  //flower 2
  fill(20, 153, 255);
  ellipse(x - 260, y + 105, 15, 15);
  ellipse(x - 270, y + 115, 15, 15);
  ellipse(x - 260, y + 125, 15, 15);
  ellipse(x - 250, y + 115, 15, 15);

  fill(255, 255, 0);
  ellipse(x - 260, y + 115, 10, 10);

  //flower 3
  fill(255, 15, 204);
  ellipse(x - 210, y + 105, 15, 15);
  ellipse(x - 220, y + 115, 15, 15);
  ellipse(x - 210, y + 125, 15, 15);
  ellipse(x - 200, y + 115, 15, 15);

  fill(255, 255, 0);
  ellipse(x - 210, y + 115, 10, 10);

  fill(255, 0, 0);
  ellipse(300, 400, 120, 20);

  push();
  translate(x - 50 * s, y + 100 * s);
  rotate(PI);
  fill(0, 0, 0);
  arc(0 * s, -50 * s, 150 * s, 90 * s, 0, PI);
  pop();

  push();
  strokeWeight(2);
  stroke(0, 0, 0);
  fill(0, 200, 0);
  rect(x - 100, y - 25, 200, 50, 20);
  pop();

  fill(0, 0, 0);
  textSize(20);
  textFont("Arial");
  let course = "Play";
  let attribute = "again";
  let sentence = course + " " + attribute;

  text(sentence, 300, 255);

  fill(255, 0, 0);
  textSize(75);
  textFont("Arial");
  let play = "You";
  let definite = "crashed";
  let title = play + " " + definite;

  text(title, 100, 150);
}

function wonScreen() {
  //sky
  fill(204, 255, 255);
  rect(x + y - 600, 0, 700);

  //sun
  fill(255, 255, 204);
  ellipse(x - 285, y - 200, 70, 70);

  //house
  fill(255, 51, 51);
  rect(x + 50 + y - 150, 200, 200);

  //roof
  fill(0, 0, 0);
  triangle(x + 150, y - 50, x + 250, y - 160, x + 350, y - 50);

  //windows
  fill(255, 255, 255);
  rect(x + 182, y - 5, 50, 50);
  fill(0, 0, 0);
  rect(x + 205, y - 5, 3, 50);
  rect(x + 182, y + 18, 50, 3);

  fill(255, 255, 255);
  rect(x + 275, y - 5, 50, 50);
  fill(0, 0, 0);
  rect(x + 298, y - 5, 3, 50);
  rect(x + 275, y + 18, 50, 3);

  //door
  fill(255, 255, 255);
  rect(x + 230, y + 85, 50, 70);

  fill(0, 0, 0);
  rect(x + 235, y + 120, 10, 3);

  //grass
  fill(153, 255, 153);
  rect(x - 600 + y, 400, 700);

  //stems
  push();
  stroke(0, 204, 0);
  strokeWeight(3);
  line(x - 310, y + 115, x - 310, y + 150);
  line(x - 210, y + 115, x - 210, y + 150);
  line(x - 260, y + 115, x - 260, y + 150);
  pop();

  //flower 1
  fill(255, 153, 204);
  ellipse(x - 310, y + 105, 15, 15);
  ellipse(x - 320, y + 115, 15, 15);
  ellipse(x - 310, y + 125, 15, 15);
  ellipse(x - 300, y + 115, 15, 15);

  fill(255, 255, 0);
  ellipse(x - 310, y + 115, 10, 10);

  //flower 2
  fill(204, 153, 255);
  ellipse(x - 260, y + 105, 15, 15);
  ellipse(x - 270, y + 115, 15, 15);
  ellipse(x - 260, y + 125, 15, 15);
  ellipse(x - 250, y + 115, 15, 15);

  fill(255, 255, 0);
  ellipse(x - 260, y + 115, 10, 10);

  //flower 3
  fill(255, 153, 204);
  ellipse(x - 210, y + 105, 15, 15);
  ellipse(x - 220, y + 115, 15, 15);
  ellipse(x - 210, y + 125, 15, 15);
  ellipse(x - 200, y + 115, 15, 15);

  fill(255, 255, 0);
  ellipse(x - 210, y + 115, 10, 10);

  fill(0, 255, 0);
  textSize(80);
  textFont("Arial");
  let play = "You";
  let definite = "won!";
  let title = play + " " + definite;

  text(title, 170, 120);

  //play again

  push();
  strokeWeight(2);
  stroke(0, 0, 0);
  fill(0, 200, 0);
  rect(x - 75, y - 25, 140, 50, 20);
  pop();

  fill(0, 0, 0);
  textSize(20);
  textFont("Arial");
  let redo = "Play";
  let attribute = "again";
  let sent = redo + " " + attribute;

  text(sent, 300, 255);

  madicken(characterX, characterY + 75);

  if (characterX >= 200) characterX = characterX - 3;
}

function draw() {
  if (state === "Start") {
    startScreen();
  } else if (state === "Game") {
    gameScreen();
  } else if (state === "ResultYourDead") {
    deadScreen();
  } else if (state === "ResultYouWin") {
    wonScreen();
  }
  if (characterY > 345 && velocity > 4) {
    state = "ResultYourDead";
  }
  if (characterY < 345 && velocity < 4) {
    state = "ResultYouWin";
  }
}

function mouseClicked() {
  if (
    state === "Start" &&
    mouseX >= x - 100 &&
    mouseX <= x + 100 &&
    mouseY >= y - 15 &&
    mouseY <= y + 30
  ) {
    state = "Game";
  } else if (
    state === "ResultYourDead" &&
    mouseX >= x - 100 &&
    mouseX <= x + 100 &&
    mouseY >= y - 15 &&
    mouseY <= y + 30
  ) {
    state = "Game";
  }
  if (
    state === "ResultYouWin" &&
    mouseX >= x - 75 &&
    mouseX <= x + 60 &&
    mouseY >= y - 80 &&
    mouseY <= y + 20
  ) {
    start = "Game";
  }
}

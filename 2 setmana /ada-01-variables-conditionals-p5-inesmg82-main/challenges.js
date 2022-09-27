// Completa cadascun dels exercisis descrits a l'arxiu README.md
// Quan hagis completat un exercici, comenta'n la funció draw() i fes el següent exercici

// Aquesta funció és comuna per a tots els exercicis. No la comentis
function setup() {
    createCanvas(400, 400);
}

// Exercici 1

function draw() {
    if (mouseX > 300) {
        background (255, 0, 0);
      } else if (mouseX <= 200) {
        background (0, 0, 255);
        }
    }
    
/*

// Exercici 2
function draw() {
    if (mouseX > 300) {
        background(255, 0, 0);
    } else if (mouseX <= 200) {
        background(0, 0, 255);
    }

    if (mouseY > 300) {
        background(255, 204, 0);
    } else if (mouseY <= 200) {
        background(100, 204, 0);
    }
}



// Exercici 3

function draw() {
    background(255, 0, 0);
    rectMode(CENTER);
    ellipse(200, 200, 100);

    if (mouseIsPressed) {
        ellipse(200, 200, 400);
    } else {
        ellipse(200, 200, 100);
    }
}



// Exercici 4
// function draw() {}

// Exercici 5
// function draw() {}

// Exercici 6
// function draw() {}

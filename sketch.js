// Isabelle Simek, is9880@bard.edu, 2/12/17, i worked on this assignment alone.
// i feel i was successful in this assignment, while my avatar does not resemble me physically very much i think in spirit we are matched.  also i feel that a lot of hte fun in designing an avatar is where it deviates from how you look.  the translation from text to image was a tough thing to figure out, and part of why i avoided shapes that required more precision with placement. the trial and error process for me was very frustrating. 
function setup() {
    createCanvas(500, 500); 
}

function draw() {
    background(255, 236, 236);   
      //head
    fill(249, 230, 206)
   ellipse(250, 100, 72, 90);
    stroke(255);
    //glasses left
    fill(245);
    rect(225, 96, 15, 12);
    //eye left
    noStroke();
    fill(0);
    ellipse(230, 100, 4, 3);
    //nose
    fill(238, 217, 197);
    ellipse(245, 105, 13, 25);
    //glasses right
     fill(245);
    rect(255, 96, 15, 12);
    //eye right
    fill(0);
    ellipse(265, 100, 4, 3);
    //mouth
    fill(10);
    ellipse(250, 125, 15, 4);
    //eyebrow1
    fill(195, 166, 149);
    rect(225, 90, 10, 2);
    //eyebrow2
    rect(255, 90, 10, 2);
    //ear
    fill(249, 230, 206);
    ellipse(290, 100, 15, 20);
    fill(249, 230, 206);
    ellipse(210, 100, 15, 20);
    //shirt
    fill(86);
    rect(220, 150, 75, 100);
    //legs
    fill(190);
    rect(265, 250, 23, 160);
    rect(230, 250, 23, 160);
    //arms
    fill(167);
    rect(220, 170, 17, 120);
    rect(278, 170, 17, 120);
    //feet
    fill(20);
    rect(220, 410, 32, 5);
    rect(265, 410, 32, 5);
    //hat lol
    fill(195, 166, 149);
    rect(220, 50, 60, 30);
    rect(220, 70, 75, 10)
    
}
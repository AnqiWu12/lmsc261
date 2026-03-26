let clickCount = 0;

const drawing = p5 => {

  p5.setup = () => {
    p5.createCanvas(600, 600);
  };

  p5.mousePressed = () => {
    clickCount++;
  };

  p5.draw = () => {

    p5.background(50);

    let centerX = p5.width * 0.5;
    let centerY = p5.height * 0.5;

//eye size
    let eyeWidth = p5.width * 0.6;
    let eyeHeight = p5.height * 0.35;

// pupil size
let pupilSize = p5.width * 0.05 + clickCount * 20;

// keep the pupil inside the eye shape
let maxPupilSize = eyeHeight * 0.94;
if (pupilSize > maxPupilSize) {
  pupilSize = maxPupilSize;
}
    let colors = [
      [102,12,9],
      [140,27,17],
      [162,32,21],
      [188,39,26],
      [197,42,28],
      [216,47,32],
      [233,51,35],
    ];

    //color switch (modulo)
    let colorIndex = clickCount % colors.length;
    let pupilColor = colors[colorIndex];

    p5.stroke(255);
    p5.noFill();

    // The upper eyelid
    p5.arc(centerX, centerY, eyeWidth, eyeHeight, Math.PI, 0);

    // The lower eyelid
    p5.arc(centerX, centerY, eyeWidth, eyeHeight, 0, Math.PI);


    // pupil movement
    let pupilMoveAmount = (eyeWidth - pupilSize) * 0.12;
    if (pupilMoveAmount > 25) {
    pupilMoveAmount = 25;
    }

    let pupilOffsetX = Math.sin(p5.frameCount * 0.03) * pupilMoveAmount;
    let pupilOffsetY = Math.cos(p5.frameCount * 0.02) * 6;

    // the big colored pupil
    p5.fill(pupilColor[0], pupilColor[1], pupilColor[2]);
    p5.circle(centerX + pupilOffsetX, centerY + pupilOffsetY, pupilSize);

    // inner pupil group
    p5.noStroke();
    let innerPupilSize = pupilSize * 0.32;
    let highlightSize = pupilSize * 0.13;

    // black layer
    p5.fill(20);
    p5.circle(
    centerX + pupilOffsetX,
    centerY + pupilOffsetY,
    innerPupilSize
    );

    // white layer on top
    p5.fill(255);
    p5.circle(
    centerX + pupilOffsetX,
    centerY + pupilOffsetY - innerPupilSize * 0.08,
    highlightSize
    );




    
//The eyelashes

    // upper with waggle
    p5.noFill();
    p5.stroke(255);

    let speed = 0.06;
    let amount = 4;

    let w1 = Math.sin(p5.frameCount * speed + 0.0) * amount;
    let w2 = Math.sin(p5.frameCount * speed + 0.4) * amount;
    let w3 = Math.sin(p5.frameCount * speed + 0.8) * amount;
    let w4 = Math.sin(p5.frameCount * speed + 1.2) * amount;
    let w5 = Math.sin(p5.frameCount * speed + 1.6) * amount;
    let w6 = Math.sin(p5.frameCount * speed + 2.0) * amount;
    let w7 = Math.sin(p5.frameCount * speed + 2.4) * amount;
    let w8 = Math.sin(p5.frameCount * speed + 2.8) * amount;
    let w9 = Math.sin(p5.frameCount * speed + 3.2) * amount;
    let w10 = Math.sin(p5.frameCount * speed + 3.6) * amount;
    let w11 = Math.sin(p5.frameCount * speed + 4.0) * amount;

    p5.arc(centerX - 160 + w1, centerY - 80, 25, 55, Math.PI/2, Math.PI/2*3);
    p5.arc(centerX - 130 + w2, centerY - 100, 35, 55, Math.PI/2, Math.PI/2*3);
    p5.arc(centerX - 95 + w3, centerY - 118, 35, 55, Math.PI/2, Math.PI/2*3);
    p5.arc(centerX - 65 + w4, centerY - 125, 28, 55, Math.PI/2, Math.PI/2*3);
    p5.arc(centerX - 30 + w5, centerY - 130, 28, 55, Math.PI/2, Math.PI/2*3);
    p5.arc(centerX + w6, centerY - 135, 22, 60, Math.PI/2, Math.PI/2*3);
    p5.arc(centerX + 30 + w7, centerY - 135, 30, 60, Math.PI/2, Math.PI/2*3);
    p5.arc(centerX + 65 + w8, centerY - 125, 28, 55, Math.PI/2, Math.PI/2*3);
    p5.arc(centerX + 90 + w9, centerY - 118, 28, 55, Math.PI/2, Math.PI/2*3);
    p5.arc(centerX + 130 + w10, centerY - 100, 25, 55, Math.PI/2, Math.PI/2*3);
    p5.arc(centerX + 160 + w11, centerY - 77, 12, 50, Math.PI/2, Math.PI/2*3);

    /* upper eyelash  with no waggle
    p5.noFill();
    p5.stroke(350);
    p5.arc(centerX - 160, centerY - 80, 25, 55, Math.PI/2, Math.PI/2*3);
    p5.arc(centerX - 130, centerY - 100, 35, 55, Math.PI/2, Math.PI/2*3);
    p5.arc(centerX - 95, centerY - 118, 35, 55, Math.PI/2, Math.PI/2*3);
    p5.arc(centerX - 65, centerY - 125, 28, 55, Math.PI/2, Math.PI/2*3);
    p5.arc(centerX - 30, centerY - 130, 28, 55, Math.PI/2, Math.PI/2*3);
    p5.arc(centerX, centerY - 135, 22, 60, Math.PI/2, Math.PI/2*3);
    p5.arc(centerX + 30, centerY - 135, 30, 60, Math.PI/2, Math.PI/2*3);
    p5.arc(centerX + 65, centerY - 125, 28, 55, Math.PI/2, Math.PI/2*3);
    p5.arc(centerX + 90, centerY - 118, 28, 55, Math.PI/2, Math.PI/2*3);
    p5.arc(centerX + 130, centerY - 100, 25, 55, Math.PI/2, Math.PI/2*3);
    p5.arc(centerX + 160, centerY - 77, 12, 50, Math.PI/2, Math.PI/2*3);
    */

    //lower Eyelashes
    p5.arc(centerX - 150, centerY + 80, 10, 35, Math.PI/2*3, Math.PI/2);
    p5.arc(centerX - 120, centerY + 100, 15, 35, Math.PI/2*3, Math.PI/2);
    p5.arc(centerX - 65, centerY + 118, 15, 35, Math.PI/2*3, Math.PI/2);
    p5.arc(centerX, centerY + 125, 10, 40, Math.PI/2*3, Math.PI/2);
    p5.arc(centerX + 65, centerY + 118, 15, 35, Math.PI/2*3, Math.PI/2);
    p5.arc(centerX + 120, centerY + 100, 15, 35, Math.PI/2*3, Math.PI/2);
    p5.arc(centerX + 150, centerY + 80, 15, 35, Math.PI/2*3, Math.PI/2);
    p5.arc(centerX + 170, centerY + 50, 10, 35, Math.PI/2*3, Math.PI/2);
    
};
};

new p5(drawing);
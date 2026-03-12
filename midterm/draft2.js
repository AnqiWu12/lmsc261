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

//pupil size limited to 210
    let pupilSize = p5.width * 0.05 + clickCount * 20;
    if (pupilSize > 210) {
    pupilSize = 210;
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


    // The pupil
    p5.fill(pupilColor[0], pupilColor[1], pupilColor[2]);
    p5.circle(centerX, centerY, pupilSize);

    //The eyelashes
    //upper
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
    //lower
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
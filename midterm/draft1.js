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

    let eyeWidth = p5.width * 0.6;
    let eyeHeight = p5.height * 0.35;

    let pupilSize = p5.width * 0.05 + clickCount * 20;
    if (pupilSize > 210) {
    pupilSize = 210;
}
    let colors = [
      [255,100,100],
      [100,200,255],
      [200,255,120],
      [255,200,120]
    ];

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
    p5.line(centerX - 120, centerY - 60, centerX - 140, centerY - 100);
    p5.line(centerX - 60, centerY - 80, centerX - 70, centerY - 120);
    p5.line(centerX, centerY - 90, centerX, centerY - 130);
    p5.line(centerX + 60, centerY - 80, centerX + 70, centerY - 120);
    p5.line(centerX + 120, centerY - 60, centerX + 140, centerY - 100);

    p5.line(centerX - 120, centerY + 60, centerX - 140, centerY + 100);
    p5.line(centerX - 60, centerY + 80, centerX - 70, centerY + 120);
    p5.line(centerX, centerY + 90, centerX, centerY + 130);
    p5.line(centerX + 60, centerY + 80, centerX + 70, centerY + 120);
    p5.line(centerX + 120, centerY + 60, centerX + 140, centerY + 100);
  };
};

new p5(drawing);
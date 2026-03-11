const drawing = p5 => {
  p5.setup = () => {
    p5.createCanvas(600, 600);
  };
 
  p5.draw = () => {
    p5.background(10, 15, 25);

    let centerX = 300;
    let centerY = 300;

    for (let circle = 0; circle < 20; circle++) {
      let radius = 5 + circle *15;

      // brighter
      if (circle % 4 === 0) p5.fill(200, 220, 255, 80);
      else p5.fill(140, 180, 220, 35);

      // size change
      let wobble = 0;
      if (circle % 7 === 0) wobble = 8;

      p5.noStroke();
      p5.circle(p5.mouseX, p5.mouseY, radius + wobble);
    }
  };
};

new p5(drawing);

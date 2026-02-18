const drawing = p5 => {

    p5.setup = () => {
        p5.createCanvas(600, 600);
    }

    p5.draw = () => {
        p5.background(236, 190, 205)
        let numCircles = 12;
        let minColor = 50
        let maxColor = 200
        
        let colorIncr = (maxColor - minColor) / numCircles;
        //let colorRange = maxColor - minColor
        //let colorValue = minColor + (colorRange * p5.mouseX / p5.width);
        //p5.fill(colorValue, 100, 200);


        for(let i = 0; i < numCircles; i++)
        {
            let color = minColor + i * colorIncr;
            p5.circle(20, 550/numCircles * i, 30, 20);
            p5.noStroke();
            p5.fill(color);
        }
    }
}

new p5(drawing);
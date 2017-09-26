var mic;
var amp;

var scale = 1.0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0, 0, 255);
    // Create an audio input and start it
    mic = new p5.AudioIn();
    mic.start();
    // Create a new amplitude analyzer and patch into input
    amp = new p5.Amplitude();
    amp.setInput(mic);
}


function draw() {
    // Draw a background that fades to black
    noStroke();
    fill(0, 0, 0, 10);
    rect(0, 0, width, height);
    // The getLevel() method returns values between 0 and 1,
    // so map() is used to convert the values to larger numbers
	
	
	
	scale = map(amp.getLevel(), 0, 0.2, 10, width);
    // Draw the circle based on the volume
    fill(255, 0, 124, 40);
    ellipse(width / 2, height / 2, scale, scale);
    // ellipse(width / 2, height / 2, width, width);
	
	
    scale = map(amp.getLevel(), 0, 0.3, 10, width);
    // Draw the circle based on the volume
    fill(0, 255, 216, 80);
    ellipse(width / 2, height / 2, scale, scale);
    // ellipse(width / 2, height / 2, width, width);
	
	
	scale = map(amp.getLevel(), 0, 0.7, 10, width);
    // Draw the circle based on the volume
    fill(255, 0, 205, 180);
    ellipse(width / 2, height / 2, scale, scale);
    // ellipse(width / 2, height / 2, width, width);
	
	scale = map(amp.getLevel(), 0, 1.0, 10, width);
    // Draw the circle based on the volume
    fill(85, 0, 255, 200);
    ellipse(width / 2, height / 2, scale, scale);
    // ellipse(width / 2, height / 2, width, width);
	
	
	
	
	
	
	
}

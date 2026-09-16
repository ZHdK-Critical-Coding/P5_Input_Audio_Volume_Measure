let mic;
let fft;

function setup() {
  createCanvas(448, 256);

  // Microphone input -> FFT analysis
  mic = new p5.AudioIn();
  mic.start();

  fft = new p5.FFT();
  fft.setInput(mic);

  textAlign(CENTER, CENTER);
  textSize(64);
  noStroke();
  fill(255);
}

function draw() {
  background(0);

  // Average the FFT spectrum (each bin is 0-255)
  let spectrum = fft.analyze();
  let sum = 0;
  for (let i = 0; i < spectrum.length; i++) {
    sum += spectrum[i];
  }
  let avg = sum / spectrum.length;

  // Map the average energy to a value between 0 and 100
  let value = map(avg, 0, 255, 0, 100);
  value = constrain(value, 0, 100);

  fill(255);
  text(round(value), width / 2, height / 2);
}

// Browsers require a user gesture before audio can start
function mousePressed() {
  userStartAudio();
}

# P5.js: Audio Volume

[Deutsch](README_DE.md)

Measures the loudness of the microphone and shows it as a number from 0 to
100 in the middle of the canvas. A simple starting point for sketches that
react to sound, clapping or voice level.

## Installation

Requirements: a microphone and a current browser (Chrome, Edge, Firefox or
Safari).

Libraries (loaded from a CDN in `index.html`): p5.js 1.9.4, p5.sound 1.9.4.

## How to Run

1. Open the folder in Visual Studio Code and start Live Server (click
   **Go Live** in the status bar).
2. Allow microphone access in the browser.
3. Click into the canvas once – browsers only start audio after a user
   gesture.

## Coding Help

- **`sketch.js` → `setup()`**: creates a 448 × 256 canvas, starts the
  microphone with `p5.AudioIn` and connects it to a `p5.FFT` analyser.
- **`draw()`**: calls `fft.analyze()`, which returns an array of frequency
  bins with values from 0 to 255. Their average is mapped to 0–100 and
  printed in the centre. Change the mapping range (e.g. `map(avg, 0, 100,
  0, 100)`) to make the display more sensitive.
- **`mousePressed()`**: calls `userStartAudio()` so the audio context can
  start after the first click.
- Instead of the FFT average you can also use `mic.getLevel()` (0.0–1.0)
  for a plain volume value.

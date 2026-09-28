# P5.js: Audio Volume

[English](readme.md)

Misst die Lautstärke des Mikrofons und zeigt sie als Zahl von 0 bis 100 in
der Mitte der Zeichenfläche an. Ein einfacher Ausgangspunkt für Sketches,
die auf Geräusche, Klatschen oder Stimmen reagieren.

## Installation

Voraussetzungen: ein Mikrofon und ein aktueller Browser (Chrome, Edge,
Firefox oder Safari).

1. Den Ordner in Visual Studio Code öffnen und Live Server starten (in der
   Statusleiste auf **Go Live** klicken).
2. Im Browser den Zugriff auf das Mikrofon erlauben.
3. Einmal in die Zeichenfläche klicken – Browser starten Audio erst nach
   einer Benutzeraktion.

Bibliotheken (über ein CDN in `index.html` geladen): p5.js 1.9.4,
p5.sound 1.9.4.

## Coding-Hilfe

- **`sketch.js` → `setup()`**: erstellt eine Zeichenfläche von 448 × 256
  Pixeln, startet das Mikrofon mit `p5.AudioIn` und verbindet es mit einem
  `p5.FFT`-Analyser.
- **`draw()`**: ruft `fft.analyze()` auf. Das liefert ein Array von
  Frequenzbändern mit Werten von 0 bis 255. Ihr Durchschnitt wird auf 0–100
  umgerechnet und in der Mitte angezeigt. Den Bereich in `map()` ändern
  (z. B. `map(avg, 0, 100, 0, 100)`), um die Anzeige empfindlicher zu
  machen.
- **`mousePressed()`**: ruft `userStartAudio()` auf, damit der Audio-Kontext
  nach dem ersten Klick starten kann.
- Statt des FFT-Durchschnitts kann man auch `mic.getLevel()` (0.0–1.0) als
  einfachen Lautstärkewert verwenden.

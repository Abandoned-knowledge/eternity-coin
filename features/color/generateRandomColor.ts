function getRandomNum(end: number): number {
  return Math.floor(Math.random() * (end - 1));
}

export default function generateRandomColor() {
  const symbols = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "F"];
  let HEXColor = "#";

  for (let i = 0; i < 6; i++) {
    HEXColor += symbols[getRandomNum(symbols.length)];
  }

  return HEXColor;
}

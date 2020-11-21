import { Color, Num } from "./enum";
import { Deck } from "./types";

export function createDeck(): Deck {
  const deck: Deck = [];
  const colors = Object.values(Color);
  const nums = Object.values(Num);

  for (const num of nums) {
    for (const color of colors) {
      deck.push({
        color: color,
        num: num
      })
    }
  }

  return deck;
}

export function printDeck(deck: Deck): void {
  let str: string = '';
  deck.forEach((it, ix) => {
    const {color, num} = it;
    str += color + num + '\t';
    if ((ix + 1) % 4 === 0) {
      str += '\n';
    }
  })
  console.log(str);
}
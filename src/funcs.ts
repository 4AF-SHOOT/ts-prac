import { Color, Joker, Num } from "./enum";
import { ADCard, Card } from "./interface";
import { Deck } from "./type";

export function createDeck(): Deck {
  const deck: Deck = [];
  const colors = Object.values(Color);
  const Nums = Object.values(Num);
  const Jokers = Object.values(Joker);

  for (let n of Nums) {
    for (let c of colors) {
      deck.push({
        color: c,
        mark: n,
        getString: function() {
          return this.color + this.mark + '\t';
        }
      } as Card)
    }
  }

  for (let j of Jokers) {
    deck.push({
      type: j,
      getString() {
        return this.type + '\t';
      }
    } as Card)
  }

  const Ad: ADCard = {
    mark: 'ADCard',
    getString: function () {
      return this.mark;
    }
  }
  deck.push(Ad);

  return deck;
}

export function printDeck(deck: Deck): void {
  let str: string = '';
  deck.forEach((it, ix) => {
    str += it.getString();
    if ((ix+1)%4 === 0) str += '\n';
  })
  console.log(str);
}
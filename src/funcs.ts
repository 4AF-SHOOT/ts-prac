import { Color, Joker, Num } from "./enum";
import { ADCard, Card } from "./interface";
import { Deck } from "./type";

export function createDeck(): Deck {
  const deck: Deck = [];
  const colors = Object.values(Color);
  const nums = Object.values(Num);
  const jockers = Object.values(Joker);

  nums.forEach(num => {
    colors.forEach(color => {
      deck.push({
        color: color,
        mark: num,
        getString() {
          return this.color + this.mark + '\t';
        }
      } as Card);
    })
  })

  jockers.forEach(jocker => {
    deck.push({
      type: jocker,
      getString() {
        return this.type + '\t';
      }
    } as Card);
  })

  const Adcard: ADCard = {
    mark: 'ADCard',
    getString() {
      return this.mark;
    }
  }

  deck.push(Adcard);

  return deck;
}

export function printDeck(deck: Deck): void {
  let str: string = '';
  deck.forEach((card, ix) => {
    str += card.getString();
    if ((ix+1) % 4 === 0) str += '\n';
  })
  console.log(str);
}
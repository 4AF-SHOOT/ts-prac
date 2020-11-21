type Deck = NormalCard[];
type Color = "♥️" | "♠️" | "♦️" | "♣️";
type NormalCard = {
  color: Color,
  num: number
};

function createDeck(): Deck {
  const deck: Deck = [];
  for (let i = 1; i < 14; i ++) {
    deck.push({
      color: "♥️",
      num: i
    }, {
      color: "♠️",
      num: i
    }, {
      color: "♦️",
      num: i
    }, {
      color: "♣️",
      num: i
    });
  }
  return deck;
}

function printDeck(deck: Deck): void {
  let str: string = '';
  deck.forEach((it, ix) => {
    const {color, num} = it;
    switch (num) {
      case 11:
        str += color + 'J' + '\t';
        break;
      case 12:
        str += color + 'Q' + '\t';
        break;
      case 13:
        str += color + 'K' + '\t';
        break;
      default:
        str += color + num + '\t';
        break;
    }
    if ((ix + 1) % 4 === 0) {
      str += '\n';
    }
  })
  console.log(str);
}

printDeck(createDeck());
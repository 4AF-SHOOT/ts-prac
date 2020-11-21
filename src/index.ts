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
  let res: string = '';
  deck.forEach((it, ix) => {
    let str = it.color;
    const {num} = it;
    switch (num) {
      case 11:
        str += 'J';
        break;
      case 12:
        str += 'Q';
        break;
      case 13:
        str += 'K';
        break;
      default:
        str += num;
        break;
    }
    res += str + '\t'
    if ((ix + 1) % 4 === 0) {
      res += '\n';
    }
  })
  console.log(res);
}
const deck = createDeck();
printDeck(deck);
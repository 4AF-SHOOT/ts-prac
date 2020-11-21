import { Color, Num } from "./enum";

export type Deck = NormalCard[];

export type NormalCard = {
  color: Color,
  num: Num
}
import { Color, Joker, Num } from "./enum";

export interface Card { // 放所有类共有的东西
  getString(): string
}

export interface NormalCard extends Card {
  color: Color,
  mark: Num
}

export interface JokerCard extends Card {
  type: Joker
}

export interface ADCard extends Card {
  mark: 'ADCard'
}
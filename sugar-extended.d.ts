// Extended type definitions for Sugar v2.0.3
// Project: https://sugarjs.com/
// Definitions by: Andrew Plummer <plummer.andrew@gmail.com>

// <reference path="sugar.d.ts" />

interface String {
  hankaku(mode?: string): string;
  hasArabic(): boolean;
  hasCyrillic(): boolean;
  hasDevanagari(): boolean;
  hasGreek(): boolean;
  hasHan(): boolean;
  hasHangul(): boolean;
  hasHebrew(): boolean;
  hasHiragana(): boolean;
  hasKana(): boolean;
  hasKanji(): boolean;
  hasKatakana(): boolean;
  hasLatin(): boolean;
  hasThai(): boolean;
  hiragana(all?: boolean): string;
  isArabic(): boolean;
  isCyrillic(): boolean;
  isDevanagari(): boolean;
  isGreek(): boolean;
  isHan(): boolean;
  isHangul(): boolean;
  isHebrew(): boolean;
  isHiragana(): boolean;
  isKana(): boolean;
  isKanji(): boolean;
  isKatakana(): boolean;
  isLatin(): boolean;
  isThai(): boolean;
  katakana(): string;
  zenkaku(mode?: string): string;
}
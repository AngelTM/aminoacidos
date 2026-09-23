import { Component, DOCUMENT, OnDestroy, computed, effect, inject, signal } from '@angular/core';
import { AMINO_ACIDS, AminoAcid } from './amino-acids';
import { LANGUAGES, Lang, TRANSLATIONS, initialLang, saveLang } from './i18n';

export interface Card {
  uid: number;
  kind: 'name' | 'image';
  acid: AminoAcid;
  flipped: boolean;
  matched: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnDestroy {
  readonly levels = [
    { key: 'easy', pairs: 6 },
    { key: 'medium', pairs: 10 },
    { key: 'hard', pairs: 20 },
  ] as const;
  readonly languages = LANGUAGES;

  readonly lang = signal<Lang>(initialLang());
  readonly t = computed(() => TRANSLATIONS[this.lang()]);

  readonly pairs = signal(6);
  readonly cards = signal<Card[]>([]);
  readonly moves = signal(0);
  readonly seconds = signal(0);
  readonly showCodes = signal(true);

  readonly matchedPairs = computed(() => this.cards().filter((c) => c.matched).length / 2);
  readonly won = computed(() => this.cards().length > 0 && this.matchedPairs() === this.pairs());
  readonly time = computed(() => {
    const s = this.seconds();
    return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
  });

  private selected: Card[] = [];
  private locked = false;
  private timer?: ReturnType<typeof setInterval>;

  constructor() {
    const document = inject(DOCUMENT);
    effect(() => {
      document.documentElement.lang = this.lang();
      document.title = this.t().title;
    });
    this.newGame();
  }

  setLang(lang: Lang): void {
    this.lang.set(lang);
    saveLang(lang);
  }

  acidName(acid: AminoAcid): string {
    return acid.name[this.lang()];
  }

  ngOnDestroy(): void {
    this.stopTimer();
  }

  setLevel(pairs: number): void {
    this.pairs.set(pairs);
    this.newGame();
  }

  newGame(): void {
    this.stopTimer();
    this.selected = [];
    this.locked = false;
    this.moves.set(0);
    this.seconds.set(0);

    const acids = shuffle([...AMINO_ACIDS]).slice(0, this.pairs());
    let uid = 0;
    const deck: Card[] = acids.flatMap((acid) => [
      { uid: uid++, kind: 'name' as const, acid, flipped: false, matched: false },
      { uid: uid++, kind: 'image' as const, acid, flipped: false, matched: false },
    ]);
    this.cards.set(shuffle(deck));
  }

  flip(card: Card): void {
    if (this.locked || card.flipped || card.matched) return;
    if (!this.timer) this.startTimer();

    this.update(card, { flipped: true });
    this.selected.push(card);
    if (this.selected.length < 2) return;

    this.moves.update((m) => m + 1);
    const [a, b] = this.selected;
    this.selected = [];

    if (a.acid.id === b.acid.id) {
      this.update(a, { matched: true });
      this.update(b, { matched: true });
      if (this.won()) this.stopTimer();
    } else {
      this.locked = true;
      setTimeout(() => {
        this.update(a, { flipped: false });
        this.update(b, { flipped: false });
        this.locked = false;
      }, 1000);
    }
  }

  imageSrc(acid: AminoAcid): string {
    return `aminoacids/${acid.id}.png`;
  }

  private update(card: Card, patch: Partial<Card>): void {
    Object.assign(card, patch);
    this.cards.update((cards) => cards.map((c) => (c.uid === card.uid ? { ...card } : c)));
  }

  private startTimer(): void {
    this.timer = setInterval(() => this.seconds.update((s) => s + 1), 1000);
  }

  private stopTimer(): void {
    clearInterval(this.timer);
    this.timer = undefined;
  }
}

function shuffle<T>(items: T[]): T[] {
  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }
  return items;
}

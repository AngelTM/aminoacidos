export type Lang = 'en' | 'es';

export const LANGUAGES: { code: Lang; label: string }[] = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
];

export interface Translations {
  title: string;
  subtitle: string;
  difficulty: string;
  levels: { easy: string; medium: string; hard: string };
  showCodes: string;
  newGame: string;
  moves: string;
  pairs: string;
  time: string;
  hiddenCard: string;
  structureOf: (name: string) => string;
  wonTitle: string;
  wonSummary: (pairs: number, moves: number, time: string) => string;
  playAgain: string;
  language: string;
  footer: string;
}

export const TRANSLATIONS: Record<Lang, Translations> = {
  en: {
    title: 'Amino Acid Memorama',
    subtitle: 'Match each amino acid name with its molecular structure.',
    difficulty: 'Difficulty',
    levels: { easy: 'Easy', medium: 'Medium', hard: 'Hard' },
    showCodes: 'Show 3/1-letter codes',
    newGame: 'New game',
    moves: 'Moves',
    pairs: 'Pairs',
    time: 'Time',
    hiddenCard: 'Hidden card',
    structureOf: (name) => `${name} structure`,
    wonTitle: 'You found all pairs!',
    wonSummary: (pairs, moves, time) => `${pairs} pairs in ${moves} moves and ${time}.`,
    playAgain: 'Play again',
    language: 'Language',
    footer: 'Structures from PubChem (NCBI).',
  },
  es: {
    title: 'Memorama de Aminoácidos',
    subtitle: 'Relaciona el nombre de cada aminoácido con su estructura molecular.',
    difficulty: 'Dificultad',
    levels: { easy: 'Fácil', medium: 'Medio', hard: 'Difícil' },
    showCodes: 'Mostrar códigos de 3/1 letras',
    newGame: 'Nuevo juego',
    moves: 'Movimientos',
    pairs: 'Pares',
    time: 'Tiempo',
    hiddenCard: 'Carta oculta',
    structureOf: (name) => `Estructura de ${name.toLowerCase()}`,
    wonTitle: '¡Encontraste todos los pares!',
    wonSummary: (pairs, moves, time) => `${pairs} pares en ${moves} movimientos y ${time}.`,
    playAgain: 'Jugar de nuevo',
    language: 'Idioma',
    footer: 'Estructuras de PubChem (NCBI).',
  },
};

const STORAGE_KEY = 'memorama-lang';

/** Saved choice first, then the browser language, then English. */
export function initialLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'en' || saved === 'es') return saved;
  } catch {}
  return typeof navigator !== 'undefined' && navigator.language?.startsWith('es') ? 'es' : 'en';
}

export function saveLang(lang: Lang): void {
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {}
}

export interface AminoAcid {
  id: string;
  name: { en: string; es: string };
  threeLetter: string;
  oneLetter: string;
}

/** The 20 standard proteinogenic amino acids. Images live in public/aminoacids/<id>.png */
export const AMINO_ACIDS: AminoAcid[] = [
  { id: 'alanine', name: { en: 'Alanine', es: 'Alanina' }, threeLetter: 'Ala', oneLetter: 'A' },
  { id: 'arginine', name: { en: 'Arginine', es: 'Arginina' }, threeLetter: 'Arg', oneLetter: 'R' },
  { id: 'asparagine', name: { en: 'Asparagine', es: 'Asparagina' }, threeLetter: 'Asn', oneLetter: 'N' },
  { id: 'aspartic-acid', name: { en: 'Aspartic acid', es: 'Ácido aspártico' }, threeLetter: 'Asp', oneLetter: 'D' },
  { id: 'cysteine', name: { en: 'Cysteine', es: 'Cisteína' }, threeLetter: 'Cys', oneLetter: 'C' },
  { id: 'glutamine', name: { en: 'Glutamine', es: 'Glutamina' }, threeLetter: 'Gln', oneLetter: 'Q' },
  { id: 'glutamic-acid', name: { en: 'Glutamic acid', es: 'Ácido glutámico' }, threeLetter: 'Glu', oneLetter: 'E' },
  { id: 'glycine', name: { en: 'Glycine', es: 'Glicina' }, threeLetter: 'Gly', oneLetter: 'G' },
  { id: 'histidine', name: { en: 'Histidine', es: 'Histidina' }, threeLetter: 'His', oneLetter: 'H' },
  { id: 'isoleucine', name: { en: 'Isoleucine', es: 'Isoleucina' }, threeLetter: 'Ile', oneLetter: 'I' },
  { id: 'leucine', name: { en: 'Leucine', es: 'Leucina' }, threeLetter: 'Leu', oneLetter: 'L' },
  { id: 'lysine', name: { en: 'Lysine', es: 'Lisina' }, threeLetter: 'Lys', oneLetter: 'K' },
  { id: 'methionine', name: { en: 'Methionine', es: 'Metionina' }, threeLetter: 'Met', oneLetter: 'M' },
  { id: 'phenylalanine', name: { en: 'Phenylalanine', es: 'Fenilalanina' }, threeLetter: 'Phe', oneLetter: 'F' },
  { id: 'proline', name: { en: 'Proline', es: 'Prolina' }, threeLetter: 'Pro', oneLetter: 'P' },
  { id: 'serine', name: { en: 'Serine', es: 'Serina' }, threeLetter: 'Ser', oneLetter: 'S' },
  { id: 'threonine', name: { en: 'Threonine', es: 'Treonina' }, threeLetter: 'Thr', oneLetter: 'T' },
  { id: 'tryptophan', name: { en: 'Tryptophan', es: 'Triptófano' }, threeLetter: 'Trp', oneLetter: 'W' },
  { id: 'tyrosine', name: { en: 'Tyrosine', es: 'Tirosina' }, threeLetter: 'Tyr', oneLetter: 'Y' },
  { id: 'valine', name: { en: 'Valine', es: 'Valina' }, threeLetter: 'Val', oneLetter: 'V' },
];

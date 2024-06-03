export type Equipment = {
  status: string;
  id: number;
  Spesifikasjoner: string;
  Beskrivelse: string;
  Produsent: string;
  Innkjøpsdato: string;
  Innkjøpspris: number;
  Forventet_levetid: number;
  Kategori: string;
  borrower?: string;
};
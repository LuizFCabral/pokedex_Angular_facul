export interface Pokedex {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: [
    {
      slot: 1,
      type: {
        name: string,
      }
    }
    ],
}

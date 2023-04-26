export interface Pokedex {
  id: number;
  name: string;
  height: number;
  weight: number;
  abilities: [
    {
      ability: {
        name: string;
      };
      slot: number;
    }
  ];
  types: [
    {
      slot: 1;
      type: {
        name: string;
      };
    }
  ];
}

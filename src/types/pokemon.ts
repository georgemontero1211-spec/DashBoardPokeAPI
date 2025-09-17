export type Pokemon = {
  id: number;
  name: string;
  sprites: {
    front_default: string | null;
    back_default: string | null;
    back_shiny: string | null;
    front_shiny: string | null;
  };
  height: number;
  weight: number;
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
  moves: {
    move: {
      name: string;
      url: string;
    };
  }[];
  stats: {
    base_stat: number;
    stat: {
      name: string;
      url: string;
    };
  }[];
};

export type PokemonBasic = {
  name: string;
  url: string;
};

export type PokemonSimplified = {
  id: number;
  name: string;
  sprites: {
    front_default: string | null;
    back_default: string | null;
    back_shiny: string | null;
    front_shiny: string | null;
  };
  height: number;
  weight: number;
  types: { name: string; slot: number }[];
  moves: { name: string }[];
  stats: { base_stat: number; name: string }[];
};

export type PokemonListResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonBasic[];
};

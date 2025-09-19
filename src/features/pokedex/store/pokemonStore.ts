import { create } from "zustand";
import type { Pokemon, PokemonSimplified } from "../../../types/pokemon";
import { devtools } from "zustand/middleware";
import { pokemonDefault } from "../data/PokemonDefault";

type PokemonState = {
  pokemon: Pokemon | PokemonSimplified;
  seeDataOfPokemon: (data: Pokemon | PokemonSimplified) => void;
};

export const usePokemonStore = create<PokemonState>()(
  devtools((set) => ({
    pokemon: pokemonDefault,
    seeDataOfPokemon: (data) => {
      set(() => ({
        pokemon: data,
      }));
    },
  }))
);

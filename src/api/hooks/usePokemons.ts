import { useQuery } from "@tanstack/react-query";
import { getPokemons, getPokemonById } from "../services/pokemonService";
import type {
  Pokemon,
  PokemonBasic,
  PokemonSimplified,
} from "../../types/pokemon";

// Lista básica
export const usePokemons = () =>
  useQuery<PokemonBasic[]>({
    queryKey: ["pokemons"],
    queryFn: getPokemons,
  });

// Pokémon individual
export const usePokemon = (id: number) =>
  useQuery<Pokemon, Error, PokemonSimplified>({
    queryKey: ["pokemon", id],
    queryFn: () => getPokemonById(id),
    select: (pokemon) => ({
      id: pokemon.id,
      name: pokemon.name,
      sprites: {
        front_default: pokemon.sprites.front_default,
        back_default: pokemon.sprites.back_default,
        back_shiny: pokemon.sprites.back_shiny,
        front_shiny: pokemon.sprites.front_shiny,
      },
      height: pokemon.height,
      weight: pokemon.weight,
      types: pokemon.types.map(
        (t: { slot: number; type: { name: string } }) => ({
          name: t.type.name,
          slot: t.slot,
        })
      ),
      moves: pokemon.moves.map(
        (m: { move: { name: string; url: string } }) => ({
          name: m.move.name,
        })
      ),
      stats: pokemon.stats.map(
        (s: { base_stat: number; stat: { name: string } }) => ({
          base_stat: s.base_stat,
          name: s.stat.name,
        })
      ),
    }),
  });

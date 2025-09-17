import type { PokemonBasic } from "../../types/pokemon";
import { pokeClient } from "../clients/pokeClient";

/**Esto me va a devolver el nombre y la URL y solo va a aceptar eso por el promise esta tipado con el type
 * asignado
 * @returns Retornara el nombre del pokemon con la URL
 **/
export const getPokemons = async (): Promise<PokemonBasic[]> => {
  const data = await pokeClient("pokemon?limit=151");
  return data.results;
};

/**
 *
 * @param id pide el id del pokemon que quieras buscar
 * @returns Esto va a retornar un objeto de type: Pokemon {@link ../types/pokemon.ts}
 */
export const getPokemonById = async (id: number) => {
  return await pokeClient(`pokemon/${id}`);
};

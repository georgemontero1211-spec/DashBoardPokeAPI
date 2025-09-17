import type { PokemonListResponse } from "../../../types/pokemon";
import { pokeClient } from "../../../api/clients/pokeClient";

/**Esto me va a devolver el nombre y la URL y solo va a aceptar eso por el promise esta tipado con el type
 * asignado
 * @returns Retornara el nombre del pokemon con la URL
 **/
export const getPokemons = async (
  page: number = 1,
  limit: number = 20
): Promise<PokemonListResponse> => {
  const offset = (page - 1) * limit;
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
  );
  if (!res.ok) throw new Error("Error fetching pokemons");
  return res.json();
};

/**
 *
 * @param id pide el id del pokemon que quieras buscar
 * @returns Esto va a retornar un objeto de type: Pokemon {@link ../types/pokemon.ts}
 */
export const getPokemonById = async (id: number) => {
  return await pokeClient(`pokemon/${id}`);
};

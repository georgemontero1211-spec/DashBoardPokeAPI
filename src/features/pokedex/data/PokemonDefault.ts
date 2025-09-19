import type { PokemonSimplified } from "../../../types/pokemon";
export const pokemonDefault: PokemonSimplified = {
  id: 25,
  name: "pikachu",
  sprites: {
    front_default:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    back_default:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png",
    front_shiny:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/25.png",
    back_shiny:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/25.png",
  },
  height: 0.4, // en metros
  weight: 6.0, // en kilogramos
  types: [{ name: "electric", slot: 1 }],
  moves: [
    { name: "thunder-shock" },
    { name: "quick-attack" },
    { name: "electro-ball" },
    { name: "thunderbolt" },
    { name: "wild-charge" },
    { name: "discharge" },
    { name: "thunder" },
    // Agrega más movimientos según sea necesario
  ],
  stats: [
    { base_stat: 35, name: "hp" },
    { base_stat: 55, name: "attack" },
    { base_stat: 40, name: "defense" },
    { base_stat: 50, name: "special-attack" },
    { base_stat: 50, name: "special-defense" },
    { base_stat: 90, name: "speed" },
  ],
};

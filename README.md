# Pokédex – Dashboard PokeAPI

Pokédex web construida con React y TypeScript que consume la [PokeAPI](https://pokeapi.co/). Muestra el listado de Pokémon en tarjetas paginadas y, al seleccionar uno, abre una vista a pantalla completa con sus sprites, sus tipos y un gráfico de sus estadísticas base.

## Funcionalidades

- Listado de Pokémon en una cuadrícula, 20 por página, con paginación.
- Vista de detalle en un modal a pantalla completa:
  - Visor de sprites del Pokémon.
  - Insignias de tipo con el color de cada tipo.
  - Gráfico de estadísticas base (HP, ataque, defensa, etc.).
- Caché de las peticiones con TanStack Query.
- Estado global del Pokémon seleccionado con Zustand.

## Tecnologías

- React + TypeScript + Vite
- [Mantine](https://mantine.dev/) (core, charts, carousel)
- TanStack Query
- Zustand
- Tailwind CSS

## Estructura

```
src/
├── api/clients/        # Cliente base para la PokeAPI
├── features/pokedex/
│   ├── components/     # PokemonCard, TypeBadge, SpriteViewer, PokemonStatsChart…
│   ├── hooks/          # usePokemons (TanStack Query)
│   ├── pages/          # PokedexPage
│   ├── services/       # Peticiones a la PokeAPI
│   └── store/          # Store de Zustand
├── helpers/            # Normalización de estadísticas
├── theme/              # Colores por tipo de Pokémon
└── types/              # Tipos de la PokeAPI
```

## Cómo ejecutarlo

```bash
npm install
npm run dev
```

No necesita variables de entorno: la PokeAPI es pública.

| Script            | Descripción                       |
| ----------------- | --------------------------------- |
| `npm run dev`     | Servidor de desarrollo            |
| `npm run build`   | Compila TypeScript y genera build |
| `npm run preview` | Sirve el build de producción      |
| `npm run lint`    | Ejecuta ESLint                    |

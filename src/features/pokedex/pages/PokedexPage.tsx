import { useState } from "react";
import { Pagination } from "@mantine/core";
import { usePokemons } from "../hooks/usePokemons";
import PokemonCard from "../components/PokemonCard";

export default function PokedexPage() {
  const [page, setPage] = useState(1);
  const { data, isLoading, error } = usePokemons(page);

  if (isLoading) return <p>Cargando...</p>;
  if (error) return <p>Error cargando datos</p>;

  return (
    <div>
      {/* Lista de Pokémon */}
      <div className="grid grid-cols-4 gap-5">
        {data?.results.map((p) => (
          <PokemonCard key={p.name} url={p.url} />
        ))}
      </div>

      {/* Paginación */}
      <div className="flex justify-center mt-6">
        <Pagination
          total={Math.ceil(data!.count / 20)} // total de páginas
          value={page}
          onChange={setPage}
        />
      </div>
    </div>
  );
}

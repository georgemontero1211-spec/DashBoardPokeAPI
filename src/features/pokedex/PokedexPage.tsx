import { usePokemons } from "../../api/hooks/usePokemons";
import PokemonCard from "./PokemonCard";

export default function PokedexPage() {
  const { data, isLoading, error } = usePokemons();

  if (isLoading) return <p>Cargando...</p>;
  if (error) return <p>Error cargando datos</p>;

  return (
    <div className="grid grid-cols-4 gap-5">
      {data?.map((p) => (
        <PokemonCard key={p.name} url={p.url} />
      ))}
    </div>
  );
}
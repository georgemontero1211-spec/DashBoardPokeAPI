import { useState } from "react";
import { Modal, Pagination } from "@mantine/core";
import { usePokemons } from "../hooks/usePokemons";
import PokemonCard from "../components/PokemonCard";
import { useDisclosure } from "@mantine/hooks";
import SpriteViwer from "../components/SpriteViwer";
import { usePokemonStore } from "../store/pokemonStore";
import TypeBadge from "../components/TypeBadge";
// import { BarChart } from "@mantine/charts";
import PokemonStatsChart from "../components/PokemonStatsChart";
import { normalizeStats } from "../../../helpers/normalizeStats";

export default function PokedexPage() {
  const {pokemon} = usePokemonStore();
  const [page, setPage] = useState(1);
  const { data, isLoading, error } = usePokemons(page);
  const [opened, { open, close }] = useDisclosure(false);
  
  
  if (isLoading) return <p>Cargando...</p>;
  if (error) return <p>Error cargando datos</p>;

  return (
    <div>
      {/* Lista de Pokémon */}
      <div className="grid grid-cols-4 gap-5">
        {data?.results.map((p) => (
          <PokemonCard key={p.name} url={p.url} open={open} />
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
      <Modal
      opened={opened}
      onClose={close}
      fullScreen
      radius={0}
      transitionProps={{ transition: 'fade', duration: 200 }}
      >
        <div className="flex flex-row">
          <div>
            <h1 className="text-3xl font-bold mb-2">{pokemon.name}</h1>
            <div className="w-72 h-auto p-4 flex justify-center border rounded shadow-lg">
              <SpriteViwer sprites={pokemon.sprites }/>
            </div>
            <div className="flex flex-row justify-center gap-1 mt-1 w-72">
              {pokemon.types.map((type) => (
                <TypeBadge key={type.slot} typeName={"name" in type ? type.name : type.type.name}/>
              ))}
            </div>
          </div>
            {/* <BarChart
              h={200}
              data={pokemon.stats}
              dataKey="base_stat"
              orientation="vertical"
              yAxisProps={{ width: 80 }}
              barProps={{ radius: 10 }}
              series={pokemon.stats.map(stat => ({
                name: "stat" in stat ? stat.stat.name : stat.name,
                color: 'blue.6',
              }))}            
              /> */}
              <PokemonStatsChart stats={normalizeStats(pokemon.stats)} />
        </div>
      </Modal>
    </div>
  );
}

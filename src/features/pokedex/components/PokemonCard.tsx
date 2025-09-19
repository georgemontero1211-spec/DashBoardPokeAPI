import { usePokemon } from "../hooks/usePokemons";
import { usePokemonStore } from "../store/pokemonStore";
import TypeBadge from "./TypeBadge";

type PokemonCardProps = {
  url: string;
  open: () => void
};

export default function PokemonCard({ url , open }: PokemonCardProps) {
  const {seeDataOfPokemon} = usePokemonStore()
  const id = Number(url.match(/\/pokemon\/(\d+)\//)?.[1]); // sacar el id de la url
  const { data } = usePokemon(id);
  
  if (!data) return null;


  const handClick = () => {
    open()
    seeDataOfPokemon(data)
  }


  return (
    <button className="relative w-72 h-auto p-4 border rounded shadow-lg flex flex-col items-center hover:cursor-pointer 
     hover:-translate-y-2 hover:-translate-x-1 transition duration-150"
    onClick={handClick}>
      <span className="absolute top-10 text-7xl font-extrabold text-gray-300 opacity-50 z-0">
        #{data.id}
      </span>
      <img
        className="relative z-10 w-full h-auto object-contain"
        src={data.sprites.front_default ?? ''}
        alt={data.name}
      />
      <h2 className="relative z-10 text-2xl font-bold capitalize mb-5">{data.name}</h2>
      <div className="flex flex-row gap-1">
        {data.types.map((type) => (
          <TypeBadge key={type.slot} typeName={type.name}/>
        ))}
      </div>

    </button>

  );
}

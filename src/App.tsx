import '@mantine/core/styles.css';
import { MantineProvider} from '@mantine/core';
import Searching from './components/Searching';
import GroupOfButttons from './components/GroupOfButttons';
import { useQuery } from '@tanstack/react-query';



export default function App() {
  const {data} = useQuery({
    queryKey: ['pokemons'],
    queryFn: async () => {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=5').then(res => res.json())
      return res.results;
    }
  })

  const pokemons = data?.map((pokemon: { name: string }) => pokemon.name).join(', ');

  console.log(data, pokemons)
  return (
    <MantineProvider>
      <div className="flex justify-between items-center p-4 mt-4">
        <Searching/>
        <GroupOfButttons/>
      </div>
    </MantineProvider>
  )
}

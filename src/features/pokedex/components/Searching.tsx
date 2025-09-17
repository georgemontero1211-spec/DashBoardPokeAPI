import { Autocomplete } from '@mantine/core';



export default function Searching() {
  return (
   <>
        <div className=' flex flex-col gap-4 m-4 w-80'>
            <Autocomplete
            placeholder=" Search Pokemon"
            label=""
            data={['Pikachu', 'Charmander', 'Bulbasaur', 'Squirtle']}
            />
        </div>
   </>
  )
}

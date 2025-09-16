
import { typesOfPokemon} from '../data/TypeOfPokemon'
import { Button } from '@mantine/core';

export default function GroupOfButttons() {


    return (
        <div className=' grid grid-cols-8 gap-2'>
            {typesOfPokemon.map((type) => (
                <Button variant="filled" color={type.color} size="xs" key={type.name}>{type.name}</Button>
            ))}
        </div>
    )
}

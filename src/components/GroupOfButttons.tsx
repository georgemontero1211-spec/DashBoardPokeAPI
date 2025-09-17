
import { typesOfPokemon} from '../data/TypeOfPokemon'
import TypeButton from './TypeButton';

export default function GroupOfButttons() {


    return (
        <div className=' grid grid-cols-8 gap-2'>
            {typesOfPokemon.map((type) => (
                <TypeButton key={type.name} typeName={type.name}/>
            ))}
        </div>
    )
}

import GroupOfButttons from "./pokedex/components/GroupOfButttons";
import Searching from "./pokedex/components/Searching";
import PokedexPage from "./pokedex/pages/PokedexPage";


export default function Home() {
  return (
  
  <>
  
      <div className="flex justify-between items-center p-4 mt-4">
        <Searching/>
        <GroupOfButttons/>
      </div>
      <div className="flex justify-center">
        <PokedexPage/>
      </div>
  </>
  )
}

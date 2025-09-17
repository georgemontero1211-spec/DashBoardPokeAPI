import GroupOfButttons from "../components/GroupOfButttons";
import Searching from "../components/Searching";
import PokedexPage from "./pokedex/PokedexPage";


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

import PokedexPage from "./pokedex/pages/PokedexPage";

export default function Home() {
  return (
    <>
      {/* Logo centrado */}
      <div className="flex justify-center mt-10">
        <img 
          width="600px" height="200px"
          src="https://raw.githubusercontent.com/sleduardo20/pokedex/0671af442dff1d8f7141e49eb83b438885bbc9e9/public/img/logo.svg" 
          alt="Pokedex Logo" 
          className="w-72 h-auto" // Ajusta el tamaño como quieras
        />
      </div>

      {/* Página de la Pokedex */}
      <div className="flex justify-center mt-10">
        <PokedexPage />
      </div>
    </>
  )
}

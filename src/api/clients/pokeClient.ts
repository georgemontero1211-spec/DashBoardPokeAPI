export const pokeClient = async (endpoint: string) => {
  const res = await fetch(`https://pokeapi.co/api/v2/${endpoint}`);
  if (!res.ok) throw new Error(`Error en fetch: ${res.status}`);
  return res.json();
};

import { useQuery } from "@tanstack/react-query";

async function fetchData() {
  const result = await fetch(`https://smashbros-unofficial-api.vercel.app/api/v1/ultimate/characters`);
  const json = await result.json();
  return json;
}

export function useCharacters() {
  return useQuery({ queryKey: ["characters"], queryFn: fetchData });
}

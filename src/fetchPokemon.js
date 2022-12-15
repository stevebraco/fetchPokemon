import fetchAxios from "./api";
import { GET_POKEMON_QUERY } from "./query";

export const fetchPokemon = async (name) => {
  return fetchAxios(GET_POKEMON_QUERY, { name: name }).then(({ pokemon }) => {
    if (pokemon) {
      return pokemon;
    } else {
      return Promise.reject(new Error(`No pokemon with the name "${name}"`));
    }
  });
};

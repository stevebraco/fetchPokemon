export const GET_POKEMON_QUERY = `
    query PokemonInfo($name: String) {
      pokemon(name: $name) {
        id
        number
        name
        image
        
      }
    }
  `;

export const GET_POKEMONS_QUERY = `
  query Pokemons($first: Int!){
    pokemons(first: $first){
      id
      name
    }
  }
  `;

import { useEffect } from "react";
import { fetchPokemon } from "./fetchPokemon";
import usePokemon from "./usePokemon";

const PokemonInfo = ({ inputName }) => {
  const {
    pokemon,
    error,
    updateState,
    isPending,
    isRejected,
    isInitial
  } = usePokemon();

  useEffect(() => {
    if (!inputName) {
      return;
    }
    updateState({ status: "pending" });

    fetchPokemon(inputName).then(
      (pokemon) => {
        updateState({ status: "resolved", pokemon });
      },
      (error) => {
        updateState({ status: "rejected", error: error.message });
      }
    );
  }, [inputName]);

  if (isInitial) return "submit a pokemon";
  if (isPending) return "Loading...";
  if (isRejected) return error;

  return (
    <div>
      <p>{pokemon?.name} </p>
      <img src={pokemon?.image} alt={pokemon?.name} />
    </div>
  );
};

export default PokemonInfo;

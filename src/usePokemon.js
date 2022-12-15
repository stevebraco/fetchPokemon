import { useState } from "react";

const usePokemon = () => {
  const [state, setState] = useState({
    pokemon: null,
    status: "initial",
    error: null
  });

  const updateState = (value) => {
    setState(value);
  };

  const isPending = state.status === "pending";
  const isInitial = state.status === "initial";
  const isRejected = state.status === "rejected";

  return {
    ...state,
    isPending,
    isInitial,
    isRejected,
    updateState
  };
};

export default usePokemon;

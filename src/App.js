import { useState } from "react";
import PokemonForm from "./PokemonForm";
import PokemonInfo from "./PokemonInfo";
import "./styles.css";

export default function App() {
  const [inputName, setInputName] = useState(null);

  const onSubmit = (newPokemon) => {
    setInputName(newPokemon);
  };
  return (
    <div className="App">
      <PokemonForm onSubmit={onSubmit} />
      <PokemonInfo inputName={inputName} />
    </div>
  );
}

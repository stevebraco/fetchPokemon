const PokemonForm = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { pokemonName } = e.target.elements;
    onSubmit(pokemonName.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input id="pokemonName" />
    </form>
  );
};

export default PokemonForm;

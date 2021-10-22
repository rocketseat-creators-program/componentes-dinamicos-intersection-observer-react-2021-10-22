import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import LazyComponent, { LAZY_ELEMENTS_TYPES } from "./components/LazyComponent";

function App() {
  const [allPokemons, setAllPokemons] = useState([]);
  useEffect(() => {
    async function getPokemons() {
      const { data } = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=799&offset=100"
      );
      if (data.results) {
        const pokemons = data.results.map((pokemon, index) => ({
          name: pokemon.name,
          id: index + 100,
        }));
        setAllPokemons(pokemons);
      }
    }
    getPokemons();
  }, []);
  return (
    <div className="App">
      {allPokemons.map(({ name, id }, index) => {
        if (index === 25) {
          return (
            <LazyComponent
              type={LAZY_ELEMENTS_TYPES.IFRAME}
              key="rocket"
              src="https://www.rocketseat.com.br/"
              title="Rocket"
              width="100%"
              height="500px"
            />
          );
        }
        return (
          <div key={name}>
            <h2>{name}</h2>
            <LazyComponent
              type={LAZY_ELEMENTS_TYPES.IMAGE}
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
              alt={name}
            />
          </div>
        );
      })}
    </div>
  );
}

export default App;

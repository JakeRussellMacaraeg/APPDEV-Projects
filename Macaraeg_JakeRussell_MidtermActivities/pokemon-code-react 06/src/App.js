import { useEffect, useState } from "react";
import PokemonThumbnail from "./components/PokemonThumbnail";
import Navbar from './components/Navbar/Navbar';
import Background from './background.jpg';

const App = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const regionEndpoints = {
    kanto: 'https://pokeapi.co/api/v2/pokedex/2/',
    johto: 'https://pokeapi.co/api/v2/pokedex/3/',
    hoenn: 'https://pokeapi.co/api/v2/pokedex/4/',
    sinnoh: 'https://pokeapi.co/api/v2/pokedex/6/',
    unova: 'https://pokeapi.co/api/v2/pokedex/8/',
    kalos: 'https://pokeapi.co/api/v2/pokedex/12/',
    alola: 'https://pokeapi.co/api/v2/pokedex/21/',
    galar: 'https://pokeapi.co/api/v2/pokedex/27/',
    hisui: 'https://pokeapi.co/api/v2/pokedex/30/',
    paldea: 'https://pokeapi.co/api/v2/pokedex/31/'
  };

  const fetchRegionPokemons = async (region) => {
    const regionUrl = regionEndpoints[region];
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(regionUrl);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      const pokemonSpeciesUrls = data.pokemon_entries.map(entry => entry.pokemon_species.url);

      const regionPokemons = await Promise.all(
        pokemonSpeciesUrls.map(async (url) => {
          try {
            const speciesRes = await fetch(url);
            if (!speciesRes.ok) {
              throw new Error(`HTTP error for species URL! status: ${speciesRes.status}`);
            }
            const speciesData = await speciesRes.json();
            const pokemonRes = await fetch(`https://pokeapi.co/api/v2/pokemon/${speciesData.name}`);
            if (!pokemonRes.ok) {
              console.warn(`Pokémon data not found for: ${speciesData.name} (status: ${pokemonRes.status})`);
              return null;
            }
            return pokemonRes.json();
          } catch (fetchError) {
            console.error(`Error fetching Pokémon details for URL ${url}:`, fetchError);
            return null;
          }
        })
      );

      const validPokemons = regionPokemons.filter(pokemon => pokemon !== null);
      setAllPokemons(validPokemons);
      setFilteredPokemons(validPokemons);
      setSearchTerm('');
    } catch (error) {
      console.error("Error fetching Pokémon data for region: ", error);
      setError(`Failed to load Pokémon data: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchButtonClick = () => {
    const filtered = allPokemons.filter(pokemon =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPokemons(filtered);
  };

  const filterByType = (type) => {
    const typeResults = allPokemons.filter(pokemon =>
      pokemon.types && pokemon.types.some(p => p.type.name === type)
    );
    setFilteredPokemons(typeResults);
  };

  useEffect(() => {
    fetchRegionPokemons('kanto'); // Default to Kanto region on load
  }, []);

  return (
    <div className="app-container">
      <div className="navbar-container">
        <Navbar 
          filterByRegion={fetchRegionPokemons}
          filterByType={filterByType} 
          handleSearch={handleSearch}
          searchTerm={searchTerm}
          onSearchButtonClick={handleSearchButtonClick} 
        />
      </div>

      <div className="pokemon-container">
        <div className="all-container">
          {loading ? (
            <p>Loading Pokémon...</p>
          ) : error ? (
            <p>{error}</p>
          ) : filteredPokemons.length > 0 ? (
            filteredPokemons.map((pokemon, index) => (
              <PokemonThumbnail
  id={pokemon.id}
  name={pokemon.name}
  stats={pokemon.stats?.[0]?.base_stat || 'N/A'}
  image={pokemon.sprites?.other?.home?.front_default || pokemon.sprites?.front_default || 'default-image-url'}
  type={pokemon.types.map(typeInfo => typeInfo.type.name).join(', ')}  // Combine all types
  firstType={pokemon.types?.[0]?.type?.name || 'Unknown'}  // First type for background color
  key={index}
  ability={pokemon.abilities?.[0]?.ability?.name || 'Unknown'}
/>
            ))
          ) : (
            <p>No Pokémon found. Try another region or search term.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
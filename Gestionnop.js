import React , {useState, useEffect} from 'react';
import API from './API';
import '../Styles/Accueil.css';
import Pokemon from './API';

export default function Gestionn() {
    const [pokemonList, setPokemonList] = useState([]);
    const [pokemon, setPokemon] = useState(null);

    {pokemonList.map(pokemon => (pokemon.name
    ))};
    const [value, setValue] = useState("");

    function handleChange(e){
        setValue(e.target.value)
    }  
    useEffect(() => {
      fetch("https://pokeapi.co/api/v2/pokemon").then(reponse => reponse.json()).then(data => setPokemon(data)).catch(error => console.error(error));}, []);
  //Si pas de pokemon affichage du chargement
  console.log(pokemon);
    if (!pokemon) {
      return <div>Chargement en cours...</div>;
    }
  
  //Requête au niveau de l'API Pokémon
  return (
    <div>Gestion
        <div>
            <input type='text' value={value} onChange={handleChange}></input>
            <button><span>Rechercher</span></button>
            
            <ul>
                {
                    value && (pokemonList.filter((pokemons) => pokemons.includes(value)).map((pokemons, index) => <p key={index}> {pokemons}</p>))
                }
                <h1>{pokemon.name}</h1>

                <div>
            {/* <p>Numéro: {pokemon.id}</p> */}
            {/* <p>Type(s): {pokemon.types.map(type => type.type.name).join(', ')}</p> */}
            {/* <img src={pokemon.sprites.front_default} alt={pokemon.name} /> */}
          </div>
            </ul>
        </div>


    </div>
  )
}

  
import React, { useEffect, useState } from 'react';
import Ajouter from './Ajouter';


export default function PokemonDetail({url}) {
    const [pokemon, setPokemon] = useState(null);
    const ls = localStorage; {/*mise en place du localStorage*/}
    
  
    useEffect(() => {
      fetch(url).then(response => response.json()).then(data => setPokemon(data)).catch(error => console.error(error));
    }, [url]);
  //Evite les erreurs 
    if (!pokemon) {
      return <div>Chargement en cours...</div>;
    }

    return (
      <div className='case'>
        {/* affichage des informations des pokemons */}
        <h1>{pokemon.name}</h1>
        <p>Numéro: {pokemon.id}</p>
        <p>Type(s): {pokemon.types.map(type => type.type.name).join(', ')}</p>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <br />
        <Ajouter url={url}/> {/*appelation du fichier Ajouter.js*/}
        
        <br />
        
      </div>
    );
}
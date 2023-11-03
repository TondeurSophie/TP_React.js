import React, { useEffect, useState } from 'react';


export default function PokemonDetail({url}) {
    const [pokemon, setPokemon] = useState(null);
    const ls = localStorage;
  
    useEffect(() => {
      fetch(url).then(response => response.json()).then(data => setPokemon(data)).catch(error => console.error(error));
    }, [url]);
  //Evite les erreurs 
    if (!pokemon) {
      return <div>Chargement en cours...</div>;
    }
  //Ajout au localstorage
    const ajouter = () => {
      ls.setItem(pokemon.name, JSON.stringify(pokemon));
      window.location.reload();
    };
  
    return (
      <div className='case'>
        <h1>{pokemon.name}</h1>
        <p>Numéro: {pokemon.id}</p>
        <p>Type(s): {pokemon.types.map(type => type.type.name).join(', ')}</p>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <br />
        <button className="bouton_add" onClick={ajouter}>
          Ajouter au Pokédex
        </button>
        <br />
        
      </div>
    );
}
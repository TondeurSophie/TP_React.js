import React, { useEffect, useState } from 'react';

export default function Pokemon() {
  //Pour stocker la liste de pokemon
  const [pokemonList, setPokemonList] = useState([]);
  //Requête au niveau de l'API Pokémon
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10").then(reponse => reponse.json()).then(data => {
      //Met à jour la liste des pokemon
    setPokemonList(data.results);
      })  }, []);

  return (
    <div>
      {/* Parcours dans le tableau de Pokemon pour afficher l'image et le nom de chaque */}
      {pokemonList.map(pokemon => (
        <PokemonDetail key={pokemon.name} url={pokemon.url} />
      ))}
    </div>
  );
}
//Stockage des pokemon
function PokemonDetail({ url }) {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(reponse => reponse.json())
      .then(data => setPokemon(data))
  }, [url]);
//Si pas de pokemon affichage 
  if (!pokemon) {
    return <div>Chargement en cours...</div>;
  }

  return (
    <div>
      <h1>{pokemon.name}</h1>
      <p>Numéro: {pokemon.id}</p>
      {/* Si plusieurs type affiche tous les types du pokemon à partir du tableau */}
      <p>Type(s): {pokemon.types.map(type => type.type.name).join(', ')}</p>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
    </div>
  );
}
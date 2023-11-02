import React, { useEffect, useState } from 'react';
import '../Styles/API.css';

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
function PokemonDetail({ url }, pokemonList) {
  const [pokemon, setPokemon] = useState(null);
  const ls = localStorage;

  useEffect(() => {
    fetch(url).then(reponse => reponse.json()).then(data => setPokemon(data)).catch(error => console.error(error));}, [url]);
//Si pas de pokemon affichage 
  if (!pokemon) {
    return <div>Chargement en cours...</div>;
  }

  //permet d'ajouter des tâches dans la liste de l'utilisateur
  const ajouter = () => {
        
    const ls = localStorage; //sauvegarde les valeurs du Local Storage
    ls.setItem(pokemonList, "value")//ajouter dans la localStorage de l'api
    window.location.reload()
 }

  return (
    <div className='page'>
        <br/>
        <span><b>Liste des Pokémons</b></span>

        {Object.keys(ls).slice(0,1).map(pokemonList => (
            <center>
            <p className='case' pokemonList={pokemonList}>
            <h1 >{pokemon.name}</h1>
            <p>Numéro: {pokemon.id}</p>
            {/* Si plusieurs type affiche tous les types du pokemon à partir du tableau */}
            <p>Type(s): {pokemon.types.map(type => type.type.name).join(', ')}</p>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <br/>
            <button className="bouton_add" onClick={ajouter} >Ajouter au Pokédex</button>
            <br/>
            </p>
            </center>
        ))}
    </div>
  );
}
  

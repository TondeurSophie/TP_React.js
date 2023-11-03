import React, { useState, useEffect } from "react";
import '../Styles/Gestion.css';

export default function Gestion() {
  const [Recherche, setRecherche] = useState('');
  const [Resultat, setResultat] = useState([]);
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    chargementPokemonList();
  }, []);

  const chargementPokemonList = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=12").then((res) => res.json()).then((data) => {
        setPokemonList(data.results);
      })
      .catch((e) => {
        console.log("error:", e);
      });
  };

  const handleChange = (event) => {
    const valeur = event.target.value;
    setRecherche(valeur);

    const filteredPokemonList = pokemonList.filter((pokemon) =>
      pokemon.name.includes(valeur)
    );

    setResultat(filteredPokemonList);
  };

  return (
    <div>
      <input type="search" onChange={handleChange} placeholder="Rechercher"/>
      {Resultat.length > 0 ? (
        <ul>
          {Resultat.map((pokemon, index) => (
            <p key={index}>{pokemon.name} </p>
            
          ))}
        </ul>
        
      ) : (
        <h5> Aucun résultat </h5>
      )}
    </div>
  );
}

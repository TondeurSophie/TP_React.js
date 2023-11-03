/*appelation de useState et useEffect de react*/
import React, { useState, useEffect } from "react"; 
//applique le code css de ce fichier
import '../Styles/Gestion.css';
import Ajouter from './Ajouter';

export default function Gestion() {
    //définitions des termes
  const [Recherche, setRecherche] = useState('');
  const [Resultat, setResultat] = useState([]);
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    chargementPokemonList();
  }, []);

  const chargementPokemonList = () => {
    /*permet d'appeler l'API Pokemon*/
    fetch("https://pokeapi.co/api/v2/pokemon?limit=12").then((res) => res.json()).then((data) => {
        setPokemonList(data.results);
      })
      .catch((e) => {
        console.log("error:", e);
      });
  };

  {/*valeur que l'utilisateur rentre*/}
  const handleChange = (event) => {
    const valeur = event.target.value;
    //fonction de recherche qui récupère la valeur de l'utilisateur
    setRecherche(valeur);

    //recherche au fur et à mesure. (sans tout le nom, on trouve des résultats)
    const filteredPokemonList = pokemonList.filter((pokemon) =>
      pokemon.name.includes(valeur)
    );

    setResultat(filteredPokemonList);
  };

  return (
    <div>
        {/*input est l'espace pour écrire. en fonction de la valeur de l'input, on affiche un résultat différent*/}
      <input type="search" onChange={handleChange} placeholder="Rechercher"/>
      {Resultat.length > 0 ? (
        <ul>
            {/*affichage du nom du pokemon*/}
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

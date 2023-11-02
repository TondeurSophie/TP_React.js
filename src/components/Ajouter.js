import React, { useEffect, useState } from 'react';
import '../Styles/App.css'; //permet de lier le fichier css avec le js
import API from './API.js';

export default function LocalStorage({data}) {

    const [pokemonList, setPokemonList] = useState([]);
    const ls = localStorage;

    
    //permet d'ajouter des tâches dans la liste de l'utilisateur
    const ajouter = () => {
        
       const ls = localStorage; //sauvegarde les valeurs du Local Storage

        ls.setItem(pokemonList, "value")//reprend la valeur inscrit dans l'input pour l'ajouter dans la localStorage

        window.location.reload()
    }


  return (
    <div>
        <API data={pokemonList}/>
        <br/>
        <span><b>Liste des Pokémons</b></span>
        <br/><br/>
        {/* si on clique sur ajouter, ça execute la variable ci-dessus */}
        {Object.keys(ls).map(pokemonList => (
            <li pokemonList={pokemonList}>
                <br/><br/>
                <button className="bouton_add" onClick={ajouter}>Ajouter au Pokédex</button>
                <br/><br/>
                {/* affiche les valeurs / les tâches */}
                {pokemonList}

            </li>
        ))}
        <br/>
        <br/>

    </div>
  )
}
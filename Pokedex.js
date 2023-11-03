import React, { useEffect, useState } from 'react';

export default function Pokedex() {
  const [pokemon, setPokemon] = useState(null);
  const [localStorageKeys, setLocalStorageKeys] = useState(Object.keys(localStorage));

  const ls = localStorage;
    //Suppression en récupérant la clé
  const supprimer = (key) => {
    ls.removeItem(key);
    //Récupère la clé et la filtre en recherchant la bonne clé pour la récupérer
    setLocalStorageKeys((Keys) => Keys.filter((cle) => cle !== key));
  };

  const toutSup = () => {
    ls.clear();
    //Mise a 0 du tableau
    setLocalStorageKeys([]);
  };

  return (
    <div className='case'>
      {localStorageKeys.map((key) => (
        <div key={key}>
          {key}
          {/* Bouton pour supprimer en récupérant la clé associée */}
          <button onClick={() => supprimer(key)}>Supprimer du Pokédex</button>
        </div>
      ))}
      <br />
      {/* Bouton pour tout supprimer */}
      <button onClick={toutSup}>Supprimer tout le Pokédex</button>
    </div>
  );
}
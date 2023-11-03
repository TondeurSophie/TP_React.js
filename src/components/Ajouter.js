import React, { useEffect, useState } from 'react';


export default function Ajouter({url}) {
  const [pokemon, setPokemon] = useState(null);
  const ls = localStorage;
  
 
  useEffect(() => {
    fetch(url).then(response => response.json()).then(data => setPokemon(data)).catch(error => console.error(error));
  }, [url]);

// console.log(url)

  //Ajout au localstorage
    const ajouter = () => {
      ls.setItem(pokemon.name, JSON.stringify(pokemon));
      console.log(ls);
    //   ls.clear();
      //window.location.reload();
    };

  return (
    <div className='case'>
      
      <button className="bouton_add" onClick={ajouter}>
        Ajouter au Pokédex
      </button>
      
      <br />
      
    </div>
  );
}
import React, { useEffect, useState } from 'react';


export default function Pokedex() {
  const [pokemon, setPokemon] = useState(null);
  const ls = localStorage;
  
  console.log(ls)

//   useEffect(() => {
//     fetch(url).then(response => response.json()).then(data => setPokemon(data)).catch(error => console.error(error));
//   }, [url]);

//   //Ajout au localstorage
//     const ajouter = () => {
//       ls.setItem(pokemon.name, JSON.stringify(pokemon));
//       console.log(ls);
//     //   ls.clear();
//       //window.location.reload();
//     };

const supprimer = (key) => {
    ls.removeItem(key)
    window.location.reload();
}

const toutSup = () =>{
    ls.clear();
    window.location.reload();
}


  return (
    <div className='case'>
      
      {Object.keys(ls).map(key =>(
        key
        
        ))}
        <button onClick={supprimer} >Supprimer du Pokédex</button>
        
      {/* {Object.keys(ls).map(key =>(
        <p key={key}>
        <br/><br/>
        {/* affiche les valeurs / les tâches */}
        {/* {key}
        <button onClick={supprimer(key)} >Supprimer du Pokédex</button> */}
        <br/> 
        {/* {pokemon.map((task, index) => (
            <u key={index}>
                {task}
            </u> */}
        {/* ))}  */}
        {/* </p>
      ))} */}
      <br /> 
      <button onClick={toutSup}>Supprimer tout le Pokédex</button>
    </div>
  );
}
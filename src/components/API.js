import React, { useEffect, useState } from 'react'

export default function Pokemon() {
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/", {
      method: "GET",
    }).then(response => response.json())
      .then(data => setPokemon(data))
      .catch(error => console.error(error));

  }, [])
  console.log(pokemon);
  return (
    <div>
      <h1>{pokemon.data.name}</h1>
      <img src={pokemon.data.imageUrl} alt="" />
    </div>
  )
}
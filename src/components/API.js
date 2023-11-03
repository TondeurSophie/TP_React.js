import React, { useEffect, useState } from 'react';
import '../Styles/Accueil.css';
import PokemonDetail from './PokemonDetail';

export default function Pokemon() {
  // Pour stocker la liste de Pokémon
  const [Liste, setListe] = useState([]); 
  // Pour gérer la pagination
  const [page, setPage] = useState(1); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //Chargement des pokemon par page avec limite de 5 pokemon par page
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=5&offset=${(page - 1) * 5}`).then(reponse => reponse.json()).then(data => {
        setListe(data.results);
        setLoading(false);
      })
      .catch(error => console.error(error));
  }, [page]);
  //augmente page de 1
  const PageSuivante = () => {
    setPage(page + 1);
  };
  //Diminue page de 1 si page est supèrieur à 1
  const PagePrecedente = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <div>
      {loading ? (
        <div>Chargement en cours...</div>
      ) : (
        <div >
          {Liste.map(pokemon => (
            <PokemonDetail key={pokemon.name} url={pokemon.url} />
          ))}
          <div className='footer'>
            <button type="button" onClick={PagePrecedente} className='bnt_move'>Précédent</button>
            <button type="button" onClick={PageSuivante} className='bnt_move'>Suivant</button>
          </div>
        </div>

      )}
    </div>
  );
}


        
    

  

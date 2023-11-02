import React , {useState} from 'react';
import API from './API';
import '../Styles/Gestion.css';

export default function Gestion() {

    const recherche=["au revoir", "bonjour", "hello", "good", "adieu"];
    // const test = pokemon.name;
    const [value, setValue] = useState("");

    
    
    function handleChange(e){
        setValue(e.target.value)
    }
    
    return (
        <div>Gestion
        <div>

            {/* <API test={pokemon.name}/> */}
            <input type='text' value={value} onChange={handleChange}></input>
            <button><span>Rechercher</span></button>
            <ul>
                {
                    value && (recherche.filter((element) => element.includes(value))
                    .map((element, index) => <p key={index}> {element}</p>))
                }

            </ul>
            <button type='button'>Supprimer le Pokédex</button>
        </div>


    </div>
  )
}

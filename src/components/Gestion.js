import React , {useState} from 'react';
import API from './API';

export default function Gestion() {

    const recherche=["au revoir", "bonjour", "hello", "good", "adieu"];
    const [value, setValue] = useState("");

    function handleChange(e){
        setValue(e.target.value)
    }

  return (
    <div>Gestion
        <div>
            {/* <API data={pokemon.name}/> */}

            <input type='text' value={value} onChange={handleChange}></input>
            <button><span>Rechercher</span></button>
            <ul>
                {
                    value && (recherche.filter((element) => element.includes(value))
                    .map((element, index) => <p key={index}> {element}</p>))
                }

            </ul>
        </div>


    </div>
  )
}

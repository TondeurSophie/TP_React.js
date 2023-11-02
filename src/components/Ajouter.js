import {useState} from 'react'
import '../Styles/App.css'; //permet de lier le fichier css avec le js

export default function LocalStorage() {

    //pour le fonctionnement de l'input : création de useState pour le relier à l'input avec onChange. Problème, je n'arrive pas a récupérer les valeurs et à les afficher
    const [key , setKey] = useState();
    const ls = localStorage;

    //valeur du LocalStorage initial
    //  ls.setItem("1", "value1");
    // ls.setItem("2", "value2");
    // ls.setItem("3", "value3");
    
    //permet d'ajouter des tâches dans la liste de l'utilisateur
    const ajouter = () => {
        
       const ls = localStorage; //sauvegarde les valeurs du Local Storage

        ls.setItem(key, "value")//reprend la valeur inscrit dans l'input pour l'ajouter dans la localStorage

        window.location.reload()
    }


  return (
    <div>
        <br/>
        <span><b>Liste des Pokémons</b></span>
        <br/><br/>
        {/* permet d'entrer du texte et de récupérer la valeur */}
        {/* <input value={key} className="input" type="text" placeholder="Entrez votre tâche" onChange={e => setKey(e.target.value)} /> */}
        {/* si on clique sur ajouter, ça execute la variable ci-dessus */}
        {Object.keys(ls).map(key => (
            <li key={key}>
                <br/><br/>
                
                <button className="bouton_add" onClick={ajouter}>Ajouter au Pokédex</button>
                <br/><br/>
                {/* affiche les valeurs / les tâches */}
                {key}

            </li>
        ))}
        <br/>
        <br/>

    </div>
  )
}
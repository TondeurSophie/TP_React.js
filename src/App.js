import './Styles/App.css'; 
import {Link, Routes, Route} from 'react-router-dom';

// appelation des fichiers js dans le components pour dans ce cas, y accéder avec les liens
import Accueil from './components/Accueil'
import Gestion from './components/Gestion'


function App() {
  
  return (
    <div className="App">
      
      <div className="header">
        <img src={`${process.env.PUBLIC_URL}/logo-Pokemon.png`} alt='Pokémon_logo' className='image'/> {/*affichage de l'image*/}
        {/* bouton sous forme de lien */}
        <Link className="bouton" type="submit" to="/">Liste Pokemon (Accueil)</Link> 
        <Link className="bouton" type="submit" to="/gestion">Mon Pokédex</Link>
        <br/>
      </div>

        <Routes> {/*Redirection boutons -> pages */}
          <Route path="/"                element={<Accueil/>}/>
          <Route path="/gestion"         element={<Gestion/>}/>
        </Routes>

        
    </div>
  );
}

export default App;

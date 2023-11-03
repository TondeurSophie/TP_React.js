import './Styles/App.css';
import {Link, Routes, Route} from 'react-router-dom';

import Accueil from './components/Accueil'
import Gestion from './components/Gestion'


function App() {
  // const image = [{logo:"Pokémon_logo.svg"}];
  return (
    <div className="App">
      
      <div className="header">
      <img src={`${process.env.PUBLIC_URL}/logo-Pokemon.png`} alt='Pokémon_logo' className='image'/>
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

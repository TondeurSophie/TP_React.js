import React from 'react'
import API from './API'
import '../Styles/Accueil.css';

export default function Accueil() {
  return (
    <div className='page'>
        <API/>
        {/* <div className='footer'>
            <button type="button" className='bnt_move'>Précédent</button>
            <button type="button" className='bnt_move'>Suivant</button>
        </div> */}
        <br/>
    </div>
  )
}
import React from 'react'
import API from './API'
import '../Styles/Accueil.css';

export default function Accueil() {
  return (
    <div className='page'>
        <API/> {/*permet d'éxecuter le code du fichier API.js à cette endroit*/}
        <br/>
    </div>
  )
}

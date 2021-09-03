import React from 'react'
import './App.scss'

import logo from '../assets/logo.svg'

function App() {
    return (
    <div className="App">
      <header className="header">
        <img className="header--logo" src={logo} alt="BataBit Logo" />
        <div className="header--title-container">
          <h1>La próxima revolución en el intercambio de criptomonedas</h1>
          <p>BataBit te ayuda navegar entre los diferentes precios y tendendcias.</p>
          <a href="" className="header--button">Conoce nuestros planes <span></span></a>
        </div>
      </header>
      <main>
        <section></section>
      </main>
    </div>
  )
}

export default App

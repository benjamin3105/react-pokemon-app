import './App.css'
import Header from './components/Header'
import Pokemons from './components/Pokemons'
import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'


function App() {

  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon`)
    .then(function (response) {
    // handle success
    console.log(response.data)
    setPokemon(response.data.results)
    })
    .catch(function (error) {
    // handle error
    console.log(error)
    })
    .then(function () {
    // always executed
    })
  }, [])

  if (!pokemon) return ( 
    <div className="App">
        <h2>No Pokemon!</h2>
    </div>
  )

  return (
    <div className="App">
      <Router>
        <Header />
        <Pokemons pokemon={pokemon}/>
      </Router>
    </div>
  )
}

export default App

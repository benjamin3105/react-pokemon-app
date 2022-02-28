import './App.css'
import Home from './components/Home'
import Header from './components/Header'
import Pokemons from './components/Pokemons'
import Pokemon from './components/Pokemon'
import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";

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
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pokemons" element={<Pokemons pokemon={pokemon}/>} />
        <Route path="pokemons/:pokemon" element={<Pokemon />} />
      </Routes>
      <button>Previoud</button>
      <button>Next</button>
    </div>
  )
}

export default App

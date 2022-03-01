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
  const [currentPageUrl, setcurrentPageUrl] = useState('https://pokeapi.co/api/v2/pokemon')
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()

  useEffect(() => {
    axios.get(currentPageUrl)
    .then(function (response) {
    // handle success
    console.log(response.data)
    setNextPageUrl(response.data.next)
    setPrevPageUrl(response.data.previous)
    setPokemon(response.data.results)
    })
    .catch(function (error) {
    // handle error
    console.log(error)
    })
    .then(function () {
    // always executed
    })
  }, [currentPageUrl])

  function handleNext() {
    if(nextPageUrl === null) return
    setcurrentPageUrl(nextPageUrl)
    console.log(nextPageUrl)
  }

  function handlePrev() {
    if(prevPageUrl === null) return
    setcurrentPageUrl(prevPageUrl)
  }

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
        <Route path="pokemons" element={<Pokemons pokemon={pokemon} handlePrev={handlePrev} handleNext={handleNext} />} />
        <Route path="pokemons/:pokemon" element={<Pokemon />} />
      </Routes>
      
      
    </div>
  )
}

export default App

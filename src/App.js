import './App.css'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Header from './components/Header'
import Pokemons from './components/Pokemons'
import Pokemon from './components/Pokemon'
import Move from './components/Move'
import Ability from './components/Ability'
import Loading from './components/Loading'
import Types from './components/Types'
import Type from './components/Type';

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

  if (!pokemon) return ( <Loading /> )

  return (
    <div className="App">
      <Header />
      
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="pokemons" element={<Pokemons pokemon={pokemon} handlePrev={handlePrev} handleNext={handleNext} />} />
            <Route path="pokemons/:pokemon" element={<Pokemon />} />
            <Route path="types" element={<Types />} />
            <Route path="types/:type" element={<Type />} />
            <Route path="moves/:move" element={<Move />} />
            <Route path="abilities/:ability" element={<Ability />} />
          </Routes>
      
    </div>
  )
}

export default App

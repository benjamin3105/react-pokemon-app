import React from 'react'
import { Link } from 'react-router-dom'
import PokemonCard from './PokemonCard'

export default function Pokemons({pokemon, handlePrev, handleNext}) {

  return (
    <div>      
        {pokemon.map((p, index) => (
            <Link to={`${p.name}`} key={index}>
              <PokemonCard name={p.name} />
            </Link>
        )
        )}
        <button onClick={handlePrev}>Previoud</button>
        <button onClick={handleNext}>Next</button>
      
    </div>
  )
}

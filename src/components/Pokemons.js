import React from 'react'
import { Link } from 'react-router-dom'

export default function Pokemons({pokemon}) {
  return (
    <div>      
        {pokemon.map((p, index) => (
            <Link to={`${p.name}`} key={index}><div>{p.name}</div></Link>
        )
        )}
    </div>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'

export default function Pokemons({pokemon}) {
  return (
    <div>      
        {pokemon.map((p, index) => (
            <Link to={p.url} key={index}><div>{p.name}</div></Link>
        )
        )}
    </div>
  )
}

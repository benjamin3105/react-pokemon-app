import React from 'react'

export default function Pokemons({pokemon}) {
  return (
    <div>
      {pokemon.map((p, index) => (
          <p key={index}>{p.name}</p>
      )
      )}
    </div>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <h1>Pokemon App</h1>
      <Link to="/">Home</Link>
      <Link to="pokemons">Pokemons</Link>
    </header>
  )
}
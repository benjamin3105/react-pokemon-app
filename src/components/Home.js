import React, {useState} from 'react'
import Search from './Search'
import { Link } from 'react-router-dom'
import axios from 'axios'
import PokemonCard from './PokemonCard'
import { Col, Container, Row } from 'react-bootstrap'

export default function Home() {

    const [pokemon, setPokemon] = useState()
    const [pokemonType, setPokemonType] = useState()
    const [loading, setLoading] = useState(false)

    const getPokemonType = (query) => {
        setLoading(true)
        console.log(query)
        axios.get(`https://pokeapi.co/api/v2/type/${query}`)
        .then(res => {
            const pokemonType = res.data.pokemon

            setPokemonType(pokemonType)
            console.log(pokemonType)
            setLoading(false)
        })

    }

    const getPokemon = (query) => {
      setLoading(true)
      console.log(query)
      axios.get(`https://pokeapi.co/api/v2/pokemon/${query}`)
      .then(res => {
          const pokemon = res.data

          setPokemon(pokemon)
          console.log(pokemon)
          setLoading(false)
      })

  }

  return (
    <Container>
      {/* <Row>
        <Search getPokemon={getPokemon} />
      </Row> */}
      <Row>
        <Search getPokemonType={getPokemonType} />
      </Row>
      {!loading && pokemonType ? 
        <Row>
          {pokemonType.map((p, i) => (
            <Col xl={2} lg={3} md={4} key={i}>
              <Link to={`/pokemons/${p.pokemon.name}`}>
                  <PokemonCard name={p.pokemon.name} />
              </Link>
            </Col>
          ))}
        </Row>
      : null }
    </Container>
  )
}

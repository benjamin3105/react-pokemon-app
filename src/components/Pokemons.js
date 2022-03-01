import React from 'react'
import { Link } from 'react-router-dom'
import PokemonCard from './PokemonCard'
import { Container, Row, Col, Button } from 'react-bootstrap'

export default function Pokemons({pokemon, handlePrev, handleNext}) {

  return (
    <Row>    
        {pokemon.map((p, index) => (
            <Col xl={3} lg={3} md={4} key={index}>
              <Link to={`${p.name}`} >
                <PokemonCard name={p.name} />
              </Link>
            </Col>
        )
        )}
        <Col xl={12} className="mb-4">
        <Button onClick={handlePrev} variant="dark">Previous</Button>{' '}
        <Button onClick={handleNext} variant="dark">Next</Button>{' '}
        </Col>
    </Row>
  )
}

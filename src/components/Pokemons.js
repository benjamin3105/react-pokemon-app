import React from 'react'
import { Link } from 'react-router-dom'
import PokemonCard from './PokemonCard'
import { Container, Row, Col, Button } from 'react-bootstrap'

export default function Pokemons({pokemon, handlePrev, handleNext}) {

  return (
    <Container>
      <Row>    
          {pokemon.map((p, i) => (
              <Col xl={2} lg={3} md={4} key={i}>
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
    </Container>
  )
}

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import PokemonCard from './PokemonCard'
import { Badge, Button, Card, Col, Container, ListGroup, ListGroupItem, Row, Spinner } from 'react-bootstrap'


export default function Move() {
    const [data, setData] = useState([])
    const [loadPokemons, setLoadPokemons] = useState(false)
    const [isLoading, setLoading] = useState(true)

    const { move } = useParams()

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/move/${move}`)
        .then(function (response) {
            console.log(response.data)
            setData(response.data)
            setLoading(false)
        })
        .catch(function (error) {
            // handle error
            console.log(error)
        })
        .then(function () {
            // always executed
        })
    }, [])

    function handlePokemons() {
        setLoadPokemons(true)
    }
    
    if (isLoading) {
        return (
            <Container>
                <Row className="justify-content-center">
                    <Col xl={4} className="text-center"><Spinner animation="border" /></Col>
                </Row>
            </Container>
        )
    }

    return (
        <Container fluid className={`pt-4 h-100`}>
            <Container>
                <Row>
                    <Col xl={12}>
                        <h1>{data.name.split('-').join(' ')}</h1>

                        <ListGroup className="mb-3">
                            <ListGroupItem>
                            {data.names.map((name, i) => [
                                i > 0 && ", ",
                                <span key={i}>{name.name}</span>
                            ])}
                            </ListGroupItem>
                        </ListGroup>


                        <ListGroup className="mb-3">
                           
                            {(data.accuracy) ? <ListGroupItem>Accuracy {data.accuracy}</ListGroupItem> : null }
                            {(data.power) ? <ListGroupItem>Power {data.power}</ListGroupItem> : null }
                            {(data.pp) ? <ListGroupItem>PP {data.pp}</ListGroupItem> : null }
                            {(data.effect_chance) ? <ListGroupItem>Effect Chance {data.effect_chance}</ListGroupItem> : null }
                               
                            <ListGroupItem>
                                Effect Entries {data.effect_entries.effect}
                                {data.effect_entries.map((effect, index) => (
                                    <ListGroupItem className="ability-name" key={index}>
                                        {effect.effect}
                                    </ListGroupItem>
                                ))}
                            </ListGroupItem>   
                            <ListGroupItem>
                                Damage Class {data.damage_class.name}
                            </ListGroupItem> 
                        </ListGroup>
                        
                    </Col>

                    <Col xl={12}>
                        <Button variant="dark" onClick={handlePokemons}>Load all Pokemons that uses {data.name.split('-').join(' ')}</Button>
                    </Col>
                    
                    {(loadPokemons === true) ? 
                    <>
                    {data.learned_by_pokemon.map((p, index) => (
                        <Col xl={2} lg={3} md={4} key={index}>
                            <Link to={`/pokemons/${p.name}`} >
                            <PokemonCard name={p.name} />
                            </Link>
                        </Col>
                    )
                    )}
                    </>
                    : null }
                    
                    
                </Row>
            </Container>
        </Container>
    )
}

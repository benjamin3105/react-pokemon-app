import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';
import { Badge, Button, Card, Col, Container, ListGroup, ListGroupItem, Row, Spinner } from 'react-bootstrap';

export default function Pokemon() {
    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(true)
    const [attakAmount, setAttackAmount] = useState('5')
    const { pokemon } = useParams()

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then(function (response){
            // handle succes
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
    }, [pokemon])

    useEffect(() => {
        setAttackAmount('5')
    }, [])
    
    function showMoreMoves() {
        setAttackAmount('999')
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
                    <Col xl={4} lg={4} md={5} xs={12}>
                        <Card className={`ratio ratio-1x1 mb-4 p-3 ${data.types[0].type.name}`}>
                        <img className="pokemon-image big-image" alt={data.name} src={data.sprites.other.dream_world.front_default} />
                        </Card>
                        <ListGroup horizontal className="mb-3">
                        {data.types.map((type, index) => (
                        <ListGroupItem className="type-name" key={index}>
                            <span className={`icon icon-${type.type.name}`}></span>{type.type.name}
                        </ListGroupItem>
                        ))} 
                        </ListGroup>
                    </Col>
                    <Col xl={4} lg={4} md={5} xs={12}>
                        <h1>#{data.id} {data.name}</h1>                        
                        
                        <h4>Stats</h4>
                        <ListGroup className="mb-3">
                            <ListGroupItem>
                                Weight <Badge bg="dark">{data.weight}</Badge>
                            </ListGroupItem>
                            <ListGroupItem>
                                Height <Badge bg="dark">{data.height}</Badge>
                            </ListGroupItem>
                        {data.stats.map((stat, index) => (
                            <ListGroupItem className="stat-name" key={index}>
                                {stat.stat.name.split('-').join(' ')} <Badge bg="dark">{stat.base_stat}</Badge>
                            </ListGroupItem>
                        ))} 
                        </ListGroup>
                    </Col>
                    <Col xl={4} lg={8} md={7} xs={12}>                                                
                        <h4>Abilities</h4>
                        <ListGroup className="mb-3">
                        {data.abilities.map((ability, index) => (
                            <ListGroupItem className="ability-name" key={index}>
                                {ability.ability.name.split('-').join(' ')}
                            </ListGroupItem>
                        ))} 
                        </ListGroup>
                        <h4>Attacks ({(data.moves).length})</h4>
                        
                        <ListGroup className="mb-3">
                        {data.moves.map((move, i) => (
                            (i < attakAmount) ? <ListGroupItem key={i}><Link to={`/moves/${move.move.name}`}>{move.move.name.split('-').join(' ')}</Link></ListGroupItem> : null
                        ))}
                        </ListGroup>
                        
                        { (5 < (data.moves).length) ? <Button onClick={showMoreMoves} variant="dark">Show more moves</Button> : null }

                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { Card, Col, Container, Row, Spinner } from 'react-bootstrap';

export default function Pokemon({name}) {
    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(true)
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
        <Row>
            <Col xl={4}>
                <Card className={`ratio ratio-1x1 mb-4 p-3 ${data.types[0].type.name}`}>
                <img className="pokemon-image big-image" alt={data.name} src={data.sprites.other.dream_world.front_default} />
                </Card>
            </Col>
            <Col xl={8}>
                <h1>{data.name}</h1>
                {data.types.map((type, index) => (
                <p className="type-name" key={index}>
                    <span className={`icon icon-${type.type.name}`}></span>{type.type.name}
                </p>
                ))} 
                {data.stats.map((stat, index) => (
                <p className="stat-name" key={index}>
                    {stat.stat.name.split('-').join(' ')} {stat.base_stat}
                </p>
                ))} 
                {data.abilities.map((ability, index) => (
                <p className="ability-name" key={index}>
                    {ability.ability.name.split('-').join(' ')}
                </p>
                ))} 
            </Col>
        </Row>
    )
}

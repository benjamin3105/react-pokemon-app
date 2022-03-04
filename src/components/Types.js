import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Loading from './Loading'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Types() {
    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/type')
        .then(function (response){
            console.log(response.data)
            setData(response.data)
            setLoading(false)
        })
    },[])
    
    
    if (isLoading === true) return <Loading />
    
    return (
        <Container>
            <Row>
                {data.results.map((type, i) => (
                    <Col xl={2} lg={3} md={4} key={i}>
                        <Card className={`ratio ratio-1x1 mb-4 p-3 type-card text-center ${type.name} icon-${type.name}`} >
                            <Link to={`/types/${type.name}`} >
                                <span className={`type-title ${type.name}`}>{type.name}</span>
                            </Link>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

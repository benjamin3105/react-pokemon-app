import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom' 
import { Badge, Button, Card, Col, Container, ListGroup, ListGroupItem, Row, Spinner } from 'react-bootstrap'
import Loading from './Loading'
import PokemonCard from './PokemonCard'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function Ability() {
    const [data, setData] = useState([])
    const [loadPokemons, setLoadPokemons] = useState(false)
    const [isLoading, setLoading] = useState(true)
    const { ability } = useParams()

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/ability/${ability}`)
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
    },[])

    function handlePokemons() {
        setLoadPokemons(true)
    }
    
    if (isLoading) return ( <Loading /> )

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
                            <ListGroupItem>
                                <strong>Effect Entries</strong> {data.effect_entries.effect}
                                {data.effect_entries.map((effect, i) => (
                                    (effect.language.name === 'en') ? <p className="ability-name mb-0" key={i}>{effect.effect}</p> : null
                                ))}
                            </ListGroupItem> 
                        </ListGroup>
                        
                        


                    </Col>

                    {(loadPokemons === true) ? null : 
                    <Col xl={12} className="mb-3">
                        <Button variant="dark" onClick={handlePokemons}>Load all Pokemons that uses {data.name.split('-').join(' ')}</Button>
                    </Col>
                    }
                    
                    {(loadPokemons === true) ?
                    <Col xl={12}>
                        <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={30}
                        slidesPerView={3}
                        slidesPerGroup={3}
                        navigation
                        pagination={{ clickable: true }}
                        breakpoints={{
                            768: {
                                slidesPerView: 4,
                                slidesPerGroup: 4,
                            },
                            991: {
                                slidesPerView: 6,
                                slidesPerGroup: 6,
                            },
                        }}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)} >
                            {data.pokemon.map((p, i) => (
                                <SwiperSlide key={i}>
                                    <Link to={`/pokemons/${p.pokemon.name}`} >
                                    <PokemonCard name={p.pokemon.name} />
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Col> 
                    : null }

                </Row>
            </Container>
        </Container>
    )
}

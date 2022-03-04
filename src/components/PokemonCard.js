import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Badge, Card } from 'react-bootstrap'
import Loading from './Loading'

export default function PokemonCard({name}) {

    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
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
    }, [name])
    
    if (isLoading) return ( <Loading /> )

    return (
    <Card className={`ratio ratio-1x1 mb-4 p-3 ${data.types[0].type.name} ${data.sprites.other.dream_world.front_default}`}>
        <div className='badges-position'>
            {data.types.map((type, index) => (
                <Badge className="mx-1" bg="light" text="dark" key={index}>
                {type.type.name}
                </Badge>
            ))}        
        </div>
        {(data.sprites.other.dream_world.front_default === null) ? <img className="pokemon-image" alt={name} src={data.sprites.other['official-artwork'].front_default} /> : <img className="pokemon-image" alt={name} src={data.sprites.other.dream_world.front_default} />}
        
    </Card>
    )
}

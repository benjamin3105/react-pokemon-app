import React, { useEffect, useState } from 'react'
import axios from 'axios'

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
    
    if (isLoading) {
        return <p>...</p>
    }
    return (
    <main>
        <img className="card" src={data.sprites.other.dream_world.front_default} />
    </main>
    )
}

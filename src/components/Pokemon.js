import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';

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
    }, [])
    
    if (isLoading) {
        return (
            <main className='loader'>
                <svg version="1.1" id="L4" x="0px" y="0px"
                viewBox="0 0 100 100" enableBackground="new 0 0 0 0">
                <circle fill="#000" stroke="none" cx="6" cy="50" r="6">
                    <animate
                    attributeName="opacity"
                    dur="1s"
                    values="0;1;0"
                    repeatCount="indefinite"
                    begin="0.1"/>    
                </circle>
                <circle fill="#000" stroke="none" cx="26" cy="50" r="6">
                    <animate
                    attributeName="opacity"
                    dur="1s"
                    values="0;1;0"
                    repeatCount="indefinite" 
                    begin="0.2"/>       
                </circle>
                <circle fill="#000" stroke="none" cx="46" cy="50" r="6">
                    <animate
                    attributeName="opacity"
                    dur="1s"
                    values="0;1;0"
                    repeatCount="indefinite" 
                    begin="0.3"/>     
                </circle>
                </svg>
            </main>
        )
    }
    return (
    <main>
        {data.name}
        <img src={data.sprites.other.dream_world.front_default} />
    </main>
    )
}

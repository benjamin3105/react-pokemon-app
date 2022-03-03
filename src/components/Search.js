import React, { useEffect, useState } from 'react'

export default function Search(props) {

    const [search, setSearch] = useState('')

    return (
        <main>
            <input 
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for Pokemon" />
            <button
            onClick={(e) => props.getPokemonType(search)}>Search Pokemon</button>
        </main>
    )
}

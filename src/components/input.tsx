import React, { useState, useEffect } from 'react'
import { Pokemon } from './types'

export const Input = () => {
    
    const [filter, setFilter] = useState('')
    const [allPokemon, setAllPokemon] = useState< Pokemon[]>([])


    useEffect(() =>{
        fetch('./pokemon.json')
            .then((res) => res.json())
            .then((pokemon: Pokemon[]) => setAllPokemon(pokemon));
    }, [])

    const lowerCase = filter.toLowerCase()
    const pokemon = allPokemon.filter(({ name: { english } }) =>
        english.toLowerCase().includes(lowerCase))
        .slice(0,10);

    return (
    <div>
            <input className='
        mx-auto 
        flex 
        justify-center 
        m-4 
        text-lg
        border-solid border-2 
        bg-gray-100
        drop-shadow-xs
        shadow-inner
        hover:scale-110
        hover:bg-purple-200
        rounded-md w-80
        transition duration-150'
        value={filter}
        onChange={(event)=> setFilter(event.target.value)}
        />
            <div className='m-4'>{pokemon.map((pokemon) => (
                <div key={pokemon.id}>{ pokemon.name.english}</div>
            ))}
            </div>
    </div>
)
}


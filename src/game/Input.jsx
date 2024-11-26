import React, { useEffect, useState } from "react";
import Select from 'react-select'
import ALLPOKEMON from "./ALLPOKEMON";
import PokeCard from "./PokeCard";

function Input() {

    const [selectedOption, setSelectedOption] = useState(null)
    const [pokemon, setPokemon] = useState(null)

    const options = ALLPOKEMON.map((pokemon) => ({
        value: pokemon,
        label: pokemon
    }))

    function fetchPokemon(name) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(resp => resp.json())
        .then(data => {
            setPokemon(data)
        })
    }

    function handleSelect(e) {
        fetchPokemon(e.value)
    }
    
    return (
        <div>
            <Select 
                value={selectedOption}
                onChange={(e) => handleSelect(e)}
                options={options}
                isSearchable
            />
            {pokemon ? (
                <PokeCard pokemon={pokemon} />
            ) : (
                <p>Select a pokemon</p>
            )}
        </div>
    )
}

export default Input
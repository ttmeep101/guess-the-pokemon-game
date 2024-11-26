import React from "react";

function PokeCard({pokemon}) {
    console.log(pokemon)

    return (
        <div>
            <p>{pokemon.name}</p>
            <img src={pokemon.sprites.front_default}/>
        </div>
    )
}

export default PokeCard
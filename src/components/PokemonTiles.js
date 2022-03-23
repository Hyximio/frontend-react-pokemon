import React from 'react';
import './PokemonTiles.css';
import PokeTile from './PokeTile';

function PokemonTiles( {results, data} ) {

    const pokeTiles = results.map((pokemon) =>
         <PokeTile key={pokemon.name} pokemon={pokemon} data={data}/>
    )

    return (
        <>
            <div className="pokemon-list">
                {pokeTiles}
            </div>
        </>
    )
}

export default PokemonTiles;
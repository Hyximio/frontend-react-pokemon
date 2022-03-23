import React, {useEffect, useState} from 'react';
import './PokeTile.css';
import apiRequest from "../RestApiRequest";

function PokeTile( {pokemon, data} ) {

    const [pokeData, setPokeData] = useState([]);

    useEffect( () => {
        const source = apiRequest( pokemon.url, setPokeData );

        return function cleanup() {
            source.cancel();
        }
    }, [data]);

    // ?? Het lijkt altijd eerst 20 lege arrays te loggen en dan pas de gevulde ??
    console.log( pokeData );

    // Vandaar dat ik deze check er nog in heb gemaakt
    return pokeData.length === 0 ? (
        <></>
    ) : (
        <>
            <ul className="pokemon-tile">
                <section >
                    <h1>{pokeData.name}</h1>
                    <img src={pokeData.sprites.front_default} alt={pokeData.name}/>
                    <h2>Moves: {pokeData.moves.length}</h2>
                    <h2>Weight: {pokeData.weight}</h2>
                </section>
            </ul>
        </>
    );
}

export default PokeTile;
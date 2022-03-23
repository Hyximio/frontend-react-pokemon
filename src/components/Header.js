import React from 'react';
import './Header.css';
import apiRequest from "../RestApiRequest";

function Header( {data, setData} ) {

    function load( _direction ) {
        const source = apiRequest( data[_direction], setData );

        return function cleanup() {
            source.cancel();
        }
    }

    return (
        <>
            <button
                type="button"
                disabled={!data["previous"]}
                onClick={ () => load("previous") }>Vorige</button>
            <button
                type="button"
                disabled={!data["next"]}
                onClick={() => load("next") }>Volgende</button>
        </>
    )
}

export default Header;
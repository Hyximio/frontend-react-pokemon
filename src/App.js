import React, {useEffect, useState} from 'react';
import './App.css';
import Header from './components/Header';
import PokemonTiles from './components/PokemonTiles';
import apiRequest from "./RestApiRequest";

function App() {

    const [data, setData] = useState( [] );

    useEffect( ()=> {
        const source = apiRequest( "https://pokeapi.co/api/v2/pokemon", setData );

        return function cleanup() {
            source.cancel();
        }
    }, []);

    return (
        <div>
            <Header data={data} setData={setData}/>
            {data.results &&
                <PokemonTiles results={data.results} data={data}/>
            }
        </div>
    );
}

export default App;

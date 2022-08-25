import './Billboard.css';
import { useEffect, useState } from 'react';
const axios = require('axios');

export default function Billboard(){

    const [movies, setMovies] = useState([]);

    useEffect(() =>{
        axios.get(`https://www.omdbapi.com/?apikey=4ef335cb&s=pokemon`)
        .then(r => r.data)
        .then(data => setMovies(data))
        .catch(e => console.log(e));
    }, [])
    return(
        <div className="billboard">
            <h2 className='billboard--title'>Catalogo de peliculas</h2>
        </div>
    )
}
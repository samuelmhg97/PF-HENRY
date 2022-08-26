import './Billboard.css';
// import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// const axios = require('axios');

export default function Billboard(){

    // const [movies, setMovies] = useState([]);

    const movies = [
        {
            id: '1',
            title: 'Pokémon: Detective Pikachu',
            poster: 'https://m.media-amazon.com/images/M/MV5BMDkxNzRmNDYtMDY0OS00N2JhLTkzZWUtMWE3MzZkNDk1MmJiXkEyXkFqcGdeQXVyNTA3MTU2MjE@._V1_SX300.jpg',
            description: 'The residents of a lonely gulch in inland California bear witness to an uncanny and chilling discovery.',
            premiere: false
        },
        {
            id: '2',
            title: 'Halloween',
            poster: 'https://m.media-amazon.com/images/I/61NDDpRDDJL._AC_SY741_.jpg',
            description: 'The residents of a lonely gulch in inland California bear witness to an uncanny and chilling discovery.',
            premiere: false
        },
        {
            id: '3',
            title: 'Nope',
            poster: 'https://hollywoodlife.com/wp-content/uploads/2022/06/Nope-Everything-To-Know-embed-1.jpg',
            description: 'The residents of a lonely gulch in inland California bear witness to an uncanny and chilling discovery.',
            premiere: true
        }
    ];
    
    // REVISAR 4 RENDERS
    // useEffect(() =>{
    //     console.log('render')
    //     axios.get(`https://www.omdbapi.com/?apikey=4ef335cb&s=pokemon`)
    //     .then(r => r.data)
    //     .then(data => setMovies(data.Search))
    //     .catch(e => console.log(e));
    // }, [])
    
    // console.log(movies)

    return(
        <div className="billboard">
            {/* <h2 className='billboard--title'>Catalogo de peliculas</h2> */}
            {/* RENDER MOVIES */}
            {movies.length > 0 ? movies.map(m => 
                <div key={m.id} className='billboard--container'>
                    <img className='billboard--poster' src={m.poster} alt={m.title}/>
                    <div className='billboard--info'>
                        <h3 className='billboard--title'>{m.title.toUpperCase()}</h3>
                        <p className='billboard--description'>{m.description}</p>
                        {m.premiere && <p className='billboard--comingsoon'>PREMIERE</p>}
                        <div className='billboard--container--button'>
                            <button className='billboard--button'><Link className='billboard--link' to={`/movie/${m.id}`}>View more</Link></button>
                            <button className='billboard--button'>Add to cart</button>
                        </div>
                    </div>
                </div>
            )
            : <p className='billboard--notfound'>No movies available.</p>
            }
        </div>
    )
}
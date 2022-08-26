import './Billboard.css';
import { Link } from 'react-router-dom';
import { useRef, useEffect, useState } from 'react';
// const axios = require('axios');


export default function Billboard(){
    
    const [isVisible, setIsVisible] = useState([]);

    // const [moviez, setMovies] = useState([]);
    
    // REVISAR 4 RENDERS FIXED - ERA POR EL REACT STRICT MODE
    // useEffect(() =>{
    //     console.log('render')
    //     axios.get(`https://www.omdbapi.com/?apikey=4ef335cb&s=pokemon`)
    //     .then(r => r.data)
    //     .then(data => setMovies(data.Search))
    //     .catch(e => console.log(e));
    // }, [])
    
    // console.log(movies)

    const movieCards = useRef([]);

    useEffect(() => {
        // Cada vez que se ve o se deja de ver una card entra en esta funcion y "entries" pasa a ser esa card
        const observer = new IntersectionObserver((entries) => {
            console.log(entries)
            const entry = entries.map(e => e.isIntersecting);
            console.log(entry)
            setIsVisible(entry);
        });
        // Cada vez que se modifique el estado isInvisible por un array de 1 length (1 entry), se lo modifica por un array con el largo de la cantidad de cards y un booleano dependiendo de si se ve o no
        if(isVisible.length <= 1){
            movieCards.current.forEach(card => observer.observe(card))
        }
        
    }, [isVisible])

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
        },
        {
            id: '4',
            title: 'DIGIMON',
            poster: 'https://hollywoodlife.com/wp-content/uploads/2022/06/Nope-Everything-To-Know-embed-1.jpg',
            description: 'The residents of a lonely gulch in inland California bear witness to an uncanny and chilling discovery.',
            premiere: true
        }
    ];
    

    return(
        <div className="billboard">
            {/* RENDER MOVIES */}
            {movies.length > 0 ? movies.map((m, index) =>
                // Checkeamos si el estado isVisible es true o false dependiendo del observer
                <div key={m.id} className={isVisible[index] ? 'billboard--container' : 'billboard--container billboard--container__notrender'} ref={element => movieCards.current[index] = element}>
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
            <p className='billboard--footer'>FOOTER</p>
        </div>
    )
}
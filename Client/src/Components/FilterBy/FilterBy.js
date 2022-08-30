import "./FilterBy.css";
import { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { filterMovies } from './../../Redux/Actions/index';

function FilterBy({ filterMovies, moviesFiltered}){

    // GENRES EXAMPLE
    const genres = [
    "Action",
    "Adventure",
    "Animation",
    "Anime",
    "Biography",
    "Comedy",
    "Crime",
    "Documentary",
    "Drama",
    "Family",
    "Fantasy",
    "History",
    "Horror",
    "Music",
    "Mystery",
    "Romance",
    "Sci-Fi",
    "Sport",
    "Thriller",
    "War",
    "Western"
    ]

    const [filters, setFilters] = useState({genre: 'default', comingSoon: 'default'});

    useEffect(() => {
        filterMovies(filters);
    }, [filters, filterMovies])

    let handleChange = (e) => {
        setFilters({
            ...filters,
            [e.target.name]: e.target.value
        })
    }
    console.log(filters)
    console.log(moviesFiltered)

    return(
        <>
            <div className='filters--container'>
                {/* <h3 className='filters--label'>Genres</h3> */}
                <select onChange={(e) => handleChange(e)} name='genre' className='filters--select'>
                    <option value="default" disabled className='filters--option'>Genre</option>
                    {genres.map((g, index) => <option key={index} value={g}>{g}</option>)}
                </select>
                {/* <h3 className='filters--label'>Coming soon</h3> */}
                <select onChange={(e) => handleChange(e)} name='comingSoon' className='filters--select'>
                    <option value="default" disabled className='filters--option'>Coming soon</option>
                    <option value={true}>True</option>
                    <option value={false}>False</option>
                </select>
            </div>
            {(filters.genre !== 'default' || filters.comingSoon !== 'default') && 
                <div className='show--filters--container'>
                    {filters.genre !== 'default' && 
                        <div className='show--filters'>
                            <p>{filters.genre.toUpperCase()}</p>
                            <button className='show--filters--button' onClick={() => setFilters({
                                ...filters,
                                genre: 'default'
                            })}>X</button>
                        </div>
                    }
                    {filters.comingSoon !== 'default' && 
                        <div className='show--filters'>
                            <p>{filters.comingSoon.toUpperCase()}</p>
                            <button className='show--filters--button' onClick={() => setFilters({
                                ...filters,
                                comingSoon: 'default'
                            })}>X</button>
                        </div>
                    }
                    {(moviesFiltered.length === 0 && (filters.genre !== 'default' || filters.comingSoon !== 'default')) &&
                        <p>No movies were found with the specified criteria.</p>
                    }
                </div>
            }
            
        </>
    )
}

const mapStateToProps = (state) => {
    return {
      moviesFiltered: state.moviesFiltered
    };
  };
  
  export default connect(mapStateToProps, { filterMovies })(FilterBy);
  
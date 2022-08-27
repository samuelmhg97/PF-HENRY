import React from "react";
import './MovieDetails.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getMovieDetail } from './../../Redux/Actions/index';
// import { useEffect } from 'react';
// import { useParams } from 'react-router-dom';

function MovieDetails({ getMovieDetail }) {


  const movieDetail = {
    movie_id: '3',
    title: 'Nope',
    poster: 'https://hollywoodlife.com/wp-content/uploads/2022/06/Nope-Everything-To-Know-embed-1.jpg',
    description: 'The residents of a lonely gulch in inland California bear witness to an uncanny and chilling discovery.',
    comingsoon: true,
    duration: 130,
    clasification: 'PG13',
    rating: 4.3,
    teaser: 'https://www.youtube.com/embed/In8fuzj3gck',
    cast: ['Brandon Perea', 'Keke Palmer', 'Daniel Kaluuya'],
    director: 'Jordan Peele',
    writter: 'Jordan Peele',
    language: 'English',
    genre: ['Thriller', 'Terror'],
    display: ['2D', '3D']
    // ranking: [{rate: 4, review: 'bla bla'}]
  }

  // DEJO ESTE CODIGO PARA CUANDO PODAMOS HACER EL LLAMADO A NUESTRA API

  // const { id } = useParams();
  // useEffect(() => {
  //   getMovieDetail(id);
  // },[getMovieDetail, id])


  return (
    <>
      {Object.keys(movieDetail).length > 1 ? 
        <div className='movie--detail--container'>
          <h2 className='movie--detail--title'>{movieDetail.title.toUpperCase()}</h2>
          <iframe className='movie--detail--teaser' src={movieDetail.teaser} title={`Trailer of ${movieDetail.title}`} allowFullScreen frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>

          {/* TODA LA INFORMACIÓN */}
          <div className='movie--detail--info'>
            <h3 className='movie--detail--sinopsistitle'>Sinopsis</h3>
            <p className='movie--detail--description'>{movieDetail.description}</p>
            <p className='movie--detail--rating'>RATING: {movieDetail.rating} / 5</p>
            <div className='movie--detail--container--info'>
              <div className='container--info--submenu'>
                <h3>Genre</h3>
                <ul className='info--submenu--list'>
                  {movieDetail.genre.map((genre, index) => <li className='info--submenu--list--item' key={index}>{genre}</li>)}
                </ul>
              </div>
              <div className='container--info--submenu'>
                <h3>Display</h3>
                <ul className='info--submenu--list'>
                  {movieDetail.display.map((display, index) => <li className='info--submenu--list--item' key={index}>{display}</li>)}
                </ul>
              </div>
              <div className='container--info--submenu'>
                <h3>Director</h3>
                <p className='info--submenu--list--item'>{movieDetail.director}</p>
              </div>
              <div className='container--info--submenu'>
                <h3>Cast</h3>
                <ul className='info--submenu--list'>
                  {movieDetail.cast.map((actor, index) => <li className='info--submenu--list--item' key={index}>{actor}</li>)}
                </ul>
              </div>
              <div className='container--info--submenu'>
                <h3>Clasification</h3>
                <p className='info--submenu--list--item'>{movieDetail.clasification}</p>
              </div>
              <div className='container--info--submenu'>
                <h3>Duration</h3>
                <p className='info--submenu--list--item'>{movieDetail.duration} min.</p>
              </div>
            </div>
          </div>
          <div className='movie--detail--container--buttons'>
            <Link className='movie--detail--container--button' to='/'>BACK</Link>
            <Link className='movie--detail--container--button' to=''>BUY TICKET</Link>
          </div>
        </div>
        :
        <h2>No detail available.</h2>
      }

    </>
  );
}

const mapStateToProps = (state) => {
  return {
    movieDetail: state.movieDetail
  }
}

export default connect(mapStateToProps, { getMovieDetail })(MovieDetails);

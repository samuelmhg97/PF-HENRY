import React from "react";
import { connect } from 'react-redux';
import { getMovieDetail } from './../../Redux/Actions/index';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function MovieDetails({ getMovieDetail }) {


  const movieDetail = {
    id: '3',
    title: 'Nope',
    poster: 'https://hollywoodlife.com/wp-content/uploads/2022/06/Nope-Everything-To-Know-embed-1.jpg',
    description: 'The residents of a lonely gulch in inland California bear witness to an uncanny and chilling discovery.',
    premiere: true,
    duration: '130m',
    clasification: 'P-13',
    rating: 4.3,
    trailer: 'https://www.youtube.com/watch?v=In8fuzj3gck',
    actors: 'Brandon Perea, Keke Palmer, Daniel Kaluuya',
    director: 'Jordan Peele',
    genre: 'Thriller'
  }

  // DEJO ESTE CODIGO PARA CUANDO PODAMOS HACER EL LLAMADO A NUESTRA API

  const { id } = useParams();
  useEffect(() => {
    getMovieDetail(id);
  },[getMovieDetail, id])


  return (
    <div>
      {Object.keys(movieDetail).length > 1 ? 
        <div className='movie--detail--container'>
          <h2>{movieDetail.title}</h2>

        </div>
        :
        <h2>No detail available.</h2>
      }

    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    movieDetail: state.movieDetail
  }
}

export default connect(mapStateToProps, { getMovieDetail })(MovieDetails);

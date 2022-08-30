import "./Billboard.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getMovies } from "./../../Redux/Actions/index";
import { connect } from "react-redux";

function Billboard({ getMovies, movies, moviesFiltered }) {
  const observer = new IntersectionObserver((entries) => {
    // console.log(entries)
    const entry = entries.map((e) => e.isIntersecting);
    // console.log(entry)
    if (entry[0]) {
    //   console.log(entries[0].target);
      entries[0].target.className = "billboard--container";
    } else {
      entries[0].target.className =
        "billboard--container billboard--container__notrender";
    }
  });
  const handleMovieRef = (element) => {
    // console.log(element)
    if (element != null) {
      observer.observe(element);
    }
  };

  function renderBillboard(m){
    return(
      <Link key={m.movie_id} className="billboard--big--link" to={`/movie/${m.movie_id}`}>
        <div
            className="billboard--container"
            ref={handleMovieRef}
        >
            <img className="billboard--poster" src={m.poster} alt={m.title} />
            <div className="billboard--info">
            <h3 className="billboard--title">
                {m.title.length > 22
                ? m.title.toUpperCase().slice(0, 22).concat("...")
                : m.title}
            </h3>
            <p className="billboard--description">
                {m.description.slice(0, 140).concat("...")}
            </p>
            {m.comingSoon && (
                <p className="billboard--comingsoon">PREMIERE</p>
            )}
            <div className="billboard--container--button">
                <button className="billboard--button">
                <Link className="billboard--link" to={`/movie/${m.movie_id}`}>
                    View more
                </Link>
                </button>
                <button className="billboard--button">Add to cart</button>
            </div>
            </div>
        </div>
      </Link>
    )
  }

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  return (
    <div className="billboard">
      {/* RENDER MOVIES */}
      {(movies.length > 0 && moviesFiltered.length === 0) ?
        movies.map((m) => (
          // Checkeamos si el estado isVisible es true o false dependiendo del observer
          // <div key={m.movie_id} className={isVisible[index] ? 'billboard--container' : 'billboard--container billboard--container__notrender'} ref={element => movieCards.current[index] = element}>
          // <div key={m.movie_id} className={isVisible[index] ? 'billboard--container' : 'billboard--container billboard--container__notrender'} ref={handleMovieRef}>
          renderBillboard(m)
        ))
      : 
        moviesFiltered.length > 0 ? 
                  moviesFiltered.map(m => 
                    renderBillboard(m)  
                  )
        : 
          <p className="billboard--notfound">No movies available.</p>
        
      }
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    moviesFiltered: state.moviesFiltered
  };
};

export default connect(mapStateToProps, { getMovies })(Billboard);

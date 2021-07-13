//Clave de la API (v3 auth)
//2ce693a30b3cee73af3b58f365b4f4c7

//Ejemplo de solicitud de API
//https://api.themoviedb.org/3/movie/550?api_key=2ce693a30b3cee73af3b58f365b4f4c7

//Token de acceso de lectura a la API (v4 auth)
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyY2U2OTNhMzBiM2NlZTczYWYzYjU4ZjM2NWI0ZjRjNyIsInN1YiI6IjYwZWIzYzg3MjljNjI2MDA0N2M0MWVmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bDsTozyohTufpJWaCN4MRbLXq6LLsry4V_Hc-l_nH7E

// import { div } from "prelude-ls"
import React, { useState } from "react";
import MovieCard from "./MovieCard";

function SearchMovies() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async (event) => {
    event.preventDefault();
    if (query) {
      const URL = `https://api.themoviedb.org/3/search/movie?api_key=2ce693a30b3cee73af3b58f365b4f4c7&language=en-US&query=${query}&page=1&include_adult=false`;
      try {
        const res = await fetch(URL);
        const data = await res.json();
        setMovies(data.results);
      } catch (err) {
        console.log(err);
      }
    } else {
      setQuery("Write a movie name");
    }
  };

  return (
    <div>
      <form className="form" onSubmit={searchMovies}>
        <label htmlFor="query" className="label">
          Movie name
        </label>
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="input"
          name="query"
          type="text"
          placeholder="i.e. Mad max"
        />
        <button type="submit" className="button">
          Search
        </button>
      </form>
      <div className="card-list">
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <MovieCard
              title={movie.title}
              key={movie.id}
              poster={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
              rd={movie.release_date}
              rating={movie.vote_average}
              overview={movie.overview}
            />
          ))}
      </div>
    </div>
  );
}
// }

export default SearchMovies;

/* <div key={movie.id} className="card">
                            <img className="card--image" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}/>
                            <div className="card--content">
                                <h3 className="card--title">{movie.title}</h3>
                                <p><small>RELEASE DATE: {movie.release_date}</small></p>
                                <p><small>RATING: {movie.vote_average}</small></p>
                                <p className="card--desc">{movie.overview}</p>
                            </div>
                        </div> */

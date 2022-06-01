import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
// import ScrollContainer from "react-indiana-drag-scroll";


const base_url = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl, isLargeRow }) {
  
  const [movies, setMovies] = useState([]);
  // const [trailerUrl, setTrailerUrl] = useState("");
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
    }
    fetchData();
  }, [fetchUrl]);
  // console.log(movies);

  return (
    <div className="row">
      <h2>{title}</h2>
      {/* <ScrollContainer className="row__posters"> */}
      <div className="row__posters">
        {(movies || []).map((movies) => (
          <img
            key={movies.id}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`} //use && if theres no else or : otherwise use ?
            src={`${base_url}${isLargeRow ? movies.poster_path : movies.backdrop_path}`}
            alt={movies.name}
          />
        ))}
        
      </div>
      <h2 className="row__post">{movies?.name || movies?.title || movies?.orginal_name}</h2> 


    </div>
  );
}

export default Row;


{/* <h2 className="row__post">{movies?.name || movies?.title || movies?.orginal_name}</h2> */ }
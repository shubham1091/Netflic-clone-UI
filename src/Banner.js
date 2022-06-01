import React, { useEffect, useState } from "react";
import axios from "./axios";
import requests from "./requests";
import "./Banner.css";
const base_url = "https://image.tmdb.org/t/p/original/";

function Banner() {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    async function fetchMovie() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
        Math.floor(Math.random() * request.data.results.length)
        ]
      ); // using prettier
    }
    fetchMovie();
  }, []);
  // console.log(movie);
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + '...' : string;
  }
  return (
    <header
      className="banner"
      style={{
        // backgroundSize: "length",
        backgroundSize:"100% 100%",
        backgroundImage: `url('${base_url}${movie?.backdrop_path}')`, //optional chaining: no need to check if movie is undefined '?' saw this neat trick on stackoverflow
        backgroundPosition: "center",
        // height: `100px`,
        // imageRendering:`high-quality`
        backgroundRepeat:"no-repeat",        
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title ">
          {/* i notice that some movies give u a title a name or an orginal name , api information isnt consistent   */}
          {movie?.name || movie?.title || movie?.orginal_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">More Info</button>
        </div>
        <p className="banner__description  ">{truncate(movie?.overview, 150)}</p>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;

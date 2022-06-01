import React from 'react';
import Banner from '../Banner';
import './HomeScreen.css';
import Nav from '../Nav';
import requests from '../requests';
import Row from '../Row';

function HomeScreen() {
  return (
    <div className="homeScreen">
      <Nav />

      <Banner />

      {/* <Row title="NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOriginals} isLargeRow={true} /> <Row title="Trending Now" fetchURL={requests.fetchTrending} /> */}
      <Row title="NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOriginals} isLargeRow ={true} />
      <Row title="Trending Now" fetchURL={requests.fetchTrending} />
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchURL={requests.fetchDocumentaries} />


    </div>
  )
}

export default HomeScreen

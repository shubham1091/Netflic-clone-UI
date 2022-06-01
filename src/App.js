import React, { useEffect } from "react";
import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/profileScreen";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(()=>{
    const unsubscribe =  auth.onAuthStateChanged((userAuth)=>{
      if (userAuth){
        console.log(userAuth);
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,

        }))
      }
      else{
        dispatch(logout());
      }
    });
    return unsubscribe;
  },[dispatch])

  return (
    <div className="app">
     
     <BrowserRouter>
        {!user ? (<LoginScreen/>) :(
        <Routes>
          <Route exact path="/profile" element={<ProfileScreen/>} />
          <Route path="/" element={<Home />} />

        </Routes>)}
        {/* <Routes>
          <Route path="/" element={<HomeScreen />} />

        </Routes> */}
      </BrowserRouter>

    </div>
  );
}

export default App;



function Home() {
  return (
    <div>
      <Nav />
      <Banner />
      <Row
        isLargeRow
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      {/* <Row title="Trending now" fetchUrl={requests.fetchPopular} /> */}
      <Row title="Top Rated" fetchUrl={requests.fetchTrending} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}
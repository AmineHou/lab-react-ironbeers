import React from "react";
import { Link } from "react-router-dom";
import beersImg from "./../assets/beers.png";
import randomBeerImg from "./../assets/random-beer.png";
import newBeerImg from "./../assets/new-beer.png";

const Home = () => {
  return (
    <div>
      <h1>Welcome to Ironbeers</h1>

      <div className="container">
        <h2>Beers list</h2>
        <Link className="link" to="/beers">All the beers</Link>
        <img src={beersImg} alt="beers" />
      </div>

      <div className="container">
        <h2>Random beer</h2>
        <Link className="link" to="/random-beer">Get a random beer</Link>
        <img src={randomBeerImg} alt="random beer" />
      </div>

      <div className="container">
        <h2>New beer</h2>
        <Link className="link" to="/new-beer">Add a new beer</Link>
        <img src={newBeerImg} alt="new-beer" />
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import "./Navbar.css";
import request from "./request";

function Navbar({ setSelectedOption }) {
  return (
    <div className="navbar">
      <h2 onClick={() => setSelectedOption(request.fetchTrending)}>Trending</h2>
      <h2 onClick={() => setSelectedOption(request.fetchTopRated)}>
        Top Rated
      </h2>
      <h2 onClick={() => setSelectedOption(request.fetchAction)}>Action</h2>
      <h2 onClick={() => setSelectedOption(request.fetchComady)}>Comedy</h2>
      <h2 onClick={() => setSelectedOption(request.fetchHorror)}>Horror</h2>
      <h2 onClick={() => setSelectedOption(request.fetchRomance)}>Romance</h2>
      <h2 onClick={() => setSelectedOption(request.fetchMystry)}>Mystry</h2>
      <h2 onClick={() => setSelectedOption(request.fetchSciFI)}>Sci-Fi</h2>
      <h2 onClick={() => setSelectedOption(request.fetchWestern)}>Western</h2>
      <h2 onClick={() => setSelectedOption(request.fetchAnimation)}>
        Animation
      </h2>
      <h2 onClick={() => setSelectedOption(request.fetchTv)}>Movies</h2>
    </div>
  );
}

export default Navbar;

import React, { useState, useEffect } from "react";
import "./Results.css";
import VideoCard from "./VideoCard";
import axios from "./axios";
import request from "./request";

function Results({ selectedOption }) {
  const [movies, setMovies] = useState([]);
  console.log({ selectedOption });

  useEffect(() => {
    async function fetchdata() {
      const res = await axios.get(selectedOption);
      setMovies(res.data.results);
      console.log(res);
      return res;
    }

    fetchdata();
  }, [selectedOption]);

  return (
    <div className="results">
      {movies.map((movie) => (
        <VideoCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default Results;

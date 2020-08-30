import React from "react";
import "./VideoCard.css";
import TextTruncate from "react-text-truncate";
import FavoriteIcon from "@material-ui/icons/Favorite";

const base_url = "https://image.tmdb.org/t/p/original/";

function VideoCard({ movie }) {
  return (
    <div className="videocard">
      <img src={`${base_url}${movie.backdrop_path}`} alt="Cardlogo" />
      <TextTruncate
        line={1}
        element="p"
        truncateText="..."
        text={movie.overview}
      />
      <h2>{movie.original_title}</h2>
      <p className="video_stats">
        {movie.release_date || movie.first_air_date} .
        <FavoriteIcon /> {movie.vote_count}
      </p>
      {/* <p>{movie.overview}</p> */}
    </div>
  );
}

export default VideoCard;

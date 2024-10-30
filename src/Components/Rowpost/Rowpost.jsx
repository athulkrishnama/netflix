import React, { useState } from "react";
import Youtube from 'react-youtube';
import styles from "./Rowpost.module.css";
import axios from '../../axios/axios.js'
function Rowpost({ heading, data, isLarge }) {
  const [movieId, setMovieId] = useState(null)
  const opt = {
    height: '600',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const trailerBar = <div>
    <Youtube  opts={opt} videoId={movieId}/>
  </div>
  const handleMovieChange = (id)=>{
    axios.get(`movie/${id}/videos`).then((res)=>{
      console.log(res)
      setMovieId(res.data.results[0]?.key)
    })
  }
  return (
    <div
      className={`${styles.rowpost} ${isLarge ? styles.large : styles.small}`}
    >
      <h3>{heading}</h3>
      <div className={styles.movies}>
        {data?.map?.((movie, index) => {
          return <img className={styles.movie} src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt="" onClick={()=>handleMovieChange(movie.id)}/>
        })}
      </div>
      {movieId && trailerBar}
    </div>
  );
}

export default Rowpost;

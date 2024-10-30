import React from "react";
import styles from "./Rowpost.module.css";
function Rowpost({ heading, data, isLarge }) {
  console.log(data);
  return (
    <div
      className={`${styles.rowpost} ${isLarge ? styles.large : styles.small}`}
    >
      <h3>{heading}</h3>
      <div className={styles.movies}>
        {data?.map((movie, index) => {
          return <img className={styles.movie} src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt=""/>
        })}
      </div>
    </div>
  );
}

export default Rowpost;

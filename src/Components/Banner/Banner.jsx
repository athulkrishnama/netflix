import React,{useEffect, useState} from 'react'
import styles from './Banner.module.css';
import axios, {popular} from '../../axios/axios'
import play from '../../assets/play.png'
import info from '../../assets/info.svg'
function Banner() {
    const [movie, setMovie] = useState({});
    useEffect(()=>{
        axios.get(popular).then((res)=>{
            const num = Math.floor(Math.random() * (20));
            const movieObj = {
                movieName:res.data.results[num].title,
                movieDescription:res.data.results[num].overview,
                posterUrl:`https://image.tmdb.org/t/p/original/${res.data.results[num].backdrop_path}`
            }
            setMovie(movieObj)
        })
    },[])
  return (
    <div className={styles.banner} style={{backgroundImage:`url(${movie.posterUrl})`}}>
      <div className={styles.movieDetails}>
        <h1>{movie.movieName}</h1>
        <p>{movie.movieDescription}</p>
        <div className={styles.buttons}>
            <button className={styles.play}><img src={play} alt="" />Play</button>
            <button className={styles.info}><img src={info} alt="" />More Info</button>
        </div>
      </div>
    </div>
  )
}

export default Banner

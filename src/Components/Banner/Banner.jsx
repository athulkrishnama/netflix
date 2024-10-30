import React,{useEffect, useState} from 'react'
import styles from './Banner.module.css';
import axios, {original, popular} from '../../axios/axios'
import play from '../../assets/play.png'
import info from '../../assets/info.svg'
import Rowpost from '../Rowpost/Rowpost';
function Banner() {
    const [movie, setMovie] = useState({});
    const [originals, setOriginals] = useState([]);
    useEffect(()=>{
    // fetching banner movie
      axios.get(popular).then((res)=>{
        const num = Math.floor(Math.random() * (20));
        const movieObj = {
          movieName:res.data.results[num].title,
          movieDescription:res.data.results[num].overview,
          posterUrl:`https://image.tmdb.org/t/p/original/${res.data.results[num].backdrop_path}`
        }
        setMovie(movieObj)
      })
      // fetching originals
      axios.get(original).then((res)=>{
        setOriginals(res.data.results);
      })
    },[])
  return (
    <div className={styles.banner} style={{backgroundImage:`linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(9,9,9,0.5830707282913166) 44%, rgba(0,0,0,1) 100%) ,url(${movie.posterUrl})`,}}>
      <div className={styles.movieDetails}>
        <h1>{movie.movieName}</h1>
        <p>{movie.movieDescription}</p>
        <div className={styles.buttons}>
            <button className={styles.play}><img src={play} alt="" />Play</button>
            <button className={styles.info}><img src={info} alt="" />More Info</button>
        </div>
      </div>
      <Rowpost heading="Originals" data={originals} isLarge/>
    </div>
  )
}

export default Banner

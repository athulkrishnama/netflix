import React,{useEffect, useState} from 'react'
import Rowpost from '../Rowpost/Rowpost'
import axios,{action,adventure,comedy,fantacy} from '../../axios/axios.js'
import styles from './Sections.module.css';
function Sections() {
    const [actionData, setActionData] = useState([])
    const [adventureData, setAdventureData] = useState([])
    const [comedyData, setComedyData] = useState([])
    const [fantacyData, setFantacyData] = useState([])

    useEffect(()=>{
        axios.get(action).then((res)=>{
            setActionData(res.data.results);
        })
        axios.get(adventure).then((res)=>{
            setAdventureData(res.data.results);
        })
        axios.get(comedy).then((res)=>{
            setComedyData(res.data.results);
        })
        axios.get(fantacy).then((res)=>{
            setFantacyData(res.data.results);
        })
    },[])
    return (
        <div className={styles.section}>
            <Rowpost heading="Action" data={actionData}/>
            <Rowpost heading="Adventure" data={adventureData}/>
            <Rowpost heading="Comedy" data={comedyData}/>
            <Rowpost heading="Fantacy" data={fantacyData}/>
        </div>
    )
}

export default Sections

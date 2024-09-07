import axios from 'axios';
import React, { useEffect, useState } from 'react'
import axios from '../..Utils/axios'
import requests from '../../Utils/requests';

const Banner = () => {
    let [movie,setMovie]=useState({});
    useEffect(()=>{
        (async()=>{
            try{
                let request=await axios.get(requests.fetchNetflixOriginals)
                setMovie(request.data.results[Math.floor(Math.random()*request.data.results.length)]);
            }catch(error){
                console.log("error",error);
                
            }
            
        })()
   ,[]});
  return (
    <div className='banner' style={{
        backgroundSize:"cover",
        backgroundImage:`url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
        backgroundPosition:"center",
        backgroundRepeat:"no-repeat"
    }}>
<div className="baner_contents">
    <h1 className='baner_title'>{movie?.title||movie?.name||movie?.original_name}
    </h1>
    <div className="banner_buttons">
        <button className="banner_button-paly">play</button>
        <div className="banner_button">My List</div>
    </div>
    <h1 className='banner_description'>{truncate(movie?.overview,150)}</h1>
</div>
    </div>
  )
}

export default Banner
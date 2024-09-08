
import React, { useEffect, useState } from 'react'
import './Row.css'
import axios from "../../../Utils/axios";
import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube';
console.log(movieTrailer);
const Row = ({title,fetchUrl,islargeRow}) => {
    let[movies,setMovie]=useState([]);
    let[trailUrl,setTrailUrl]=useState("");
    let base_url="https://image.tmdb.org/t/p/original";
    useEffect(()=>{
        (async()=>{
            try{
                console.log(fetchUrl);;
                let request=await axios.get(fetchUrl);
                console.log(request);
                setMovie(request.data.results);
                
                
            }catch(error){
                console.log("error",error);
                
            }
        })()
    },[fetchUrl]);
    
const handleClick = (movie) => {
    if (trailUrl) {
        setTrailUrl('');
    } else {
        movieTrailer(movie?.title || movie?.name || movie?.original_name)
            .then((url) => {
                let urlParams = new URLSearchParams(new URL(url).search);
                setTrailUrl(urlParams.get('v'));
            })
            .catch((error) => console.error("Trailer not found", error));
    }
};
    let opts={
        height:'390',
        width:"100%",
        palayerVar:{
        autoplay:1,
        }
    }
  return (
    <div className='row'>
        <h1>{title}</h1>
        <div className='row_posters'>
            {movies?.map((movie,index)=>(
                <img 
                onClick={()=>handleClick(movie)}
                key={index} src={`${base_url}${islargeRow?movie.poster_path:movie.backdrop_path}`}alt={movie.name} className={`row_poster ${islargeRow &&"row_posterlarge"}`}/>
            ))};
        </div>
        <div style={{padding:'10px'}}>
        {trailUrl &&<YouTube videoid={trailUrl} opts={opts}/>}
       </div>
    </div>
  )
}

export default Row
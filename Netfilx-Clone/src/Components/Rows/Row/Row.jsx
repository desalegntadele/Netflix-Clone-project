
import React, { useEffect, useState } from 'react'
import './Row.css'
import axios from "../../../Utils/axios";
import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube';
// console.log(movieTrailer);
let Row = ({title,fetchUrl,islargeRow}) => {
    let [movies,setMovie]=useState([]);
    let [trailUrl,setTrailUrl]=useState("");
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
        //The ?. (optional chaining) operator is used to safely access the title, name, or original_name properties.
        movieTrailer(movie?.title || movie?.name || movie?.original_name)
            .then((url) => {
                console.log(url);
                
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
                //optional chaining operator (?.) to safely access the map method on the movies array.
                <img 
                onClick={()=>handleClick(movie)}
                key={index} src={`${base_url}${islargeRow?movie.poster_path:movie.backdrop_path}`}alt={movie.name} className={`row_poster ${islargeRow &&"row_posterlarge"}`}/>
                //class row_poster is always applied
                //If islargeRow is true, the class row_posterlarge is also added.
            ))};
        </div>
        <div style={{padding:'10px'}}>
        {trailUrl &&<YouTube videoid={trailUrl} opts={opts}/>}
       </div>
    </div>
  )
}

export default Row
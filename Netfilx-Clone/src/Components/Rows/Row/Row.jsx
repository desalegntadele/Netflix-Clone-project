import React, { useEffect, useState } from 'react'
import './Row.css'
import axios from 'axios';

const Row = ({title,fetchUrl,islargeRow}) => {
    let[movies,setMovie]=useState("");
    let[trailUrl,setTrailUrl]=useState("");
    let base_url="https://image.tmdb.org/t/p/original";
    useEffect(()=>{
        (async()=>{
            try{
                console.log(fetchUrl);;
                let request=await axios.get(`https://localhost:4000/api/${fetchUrl}`);
                console.log(request);
                setMovie(request.data.results);
                
                
            }catch(error){
                console.log("error",error);
                
            }
        })()
    },[fetchUrl]);
    let handleClick=(movie)=>{
        if(trailUrl){
            setTrailUrl('')
        }else{
            movieTrailer(movie?.title||movie?.name||movie?.original_name)
            .then((url)=>{
                console.log(url);
                let urlparams=new URLsearchparams(newURL(url).search)
                console.log(urlparams);
                console.log(urlparams.get('v'));
                setTrailUrl(urlparams.get('v'))
            })
        }
    }
  return (
    <div className='row'>
        <h1>{title}</h1>
        <div className='row_posters'>
            {movies?.map((movie,index)=>(
                <img onClick={()=>handleClick(movie)}
                key={index} src={`${base_url}${islargeRow?movie.poster_path:movie.backdrop_path}`}alt={movie.name} className={`row_poster`$(islargeRow &&"row_posterlarge")}/>
            ))}
        </div>
        
    </div>
  )
}

export default Row
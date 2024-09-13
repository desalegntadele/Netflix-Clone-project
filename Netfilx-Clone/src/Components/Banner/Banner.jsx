import React, { useEffect, useState } from 'react'
import axios from '../../Utils/axios'
import requests from '../../Utils/requests';
import "./banner.css"

let Banner = () => {
    let [movie,setMovie]=useState({});
    useEffect(()=>{
        (async()=>{
            try{
                let request=await axios.get(requests.fetchNetflixOriginals)
                setMovie(request.data.results[Math.floor(Math.random()*request.data.results.length)]);
                //let randomIndex = Math.floor(Math.random() * request.data.results.length);
                //setMovie(request.data.results[randomIndex]);
            }catch(error){
                console.log("error",error);
            }
            
        })()
   },[]);
   //The empty array [] at the end tells React to run this effect only once when the component first mounts, 
   function truncate(str,n){
return str?.length>n?str.substr(0,n-1)+'.....':str;
//The use of optional chaining (str?.length) prevents the function from throwing an error if str is null or undefined.
   }
  return (
        <div className='banner' style={{
        backgroundSize:"cover",
backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,        backgroundPosition:"center",
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

export default Banner;
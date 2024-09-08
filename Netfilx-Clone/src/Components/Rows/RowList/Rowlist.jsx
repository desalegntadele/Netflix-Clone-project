import React from 'react'
import Row from '../Row/Row'
import requests from '../../../Utils/requests'

const Rowlist = () => {
  return (
    <>
    <Row
    title="NETFLIX ORIGINALS"
    fetchUrl={requests.fetchNetflixOriginals}
    islargeRow={true}
    />
    <Row 
    title="ActionMovie"
        fetchUrl={requests.fetchAction}
        />
        <Row 
    title="Adventure"
        fetchUrl={requests.fetchAdventure}
        />
        <Row 
    title="Animation"
        fetchUrl={requests. fetchAnimation}
        />
        <Row 
    title="ComedyMovie"
        fetchUrl={requests.fetchComedy}
        />
        <Row 
    title="CrimeMovie"
        fetchUrl={requests.fetchCrime}
        />
        <Row 
    title="Documentary"
        fetchUrl={requests.fetchDocumentary}
        />
        <Row 
    title="DramaMovie"
        fetchUrl={requests.fetchDrama}
        />
        <Row 
    title="FamilyMovie"
        fetchUrl={requests.fetchFamily}
        />
        <Row 
    title="FantasyMovie"
        fetchUrl={requests.fetchFantasy}
        />
            <Row 
    title="History"
        fetchUrl={requests.fetchHistory}
        />
            <Row 
    title="HorrorMovie"
        fetchUrl={requests.fetchHorror}
        />
            <Row 
    title="MusicMovie"
        fetchUrl={requests.fetchMusic}
        />
           <Row 
    title="Mystery"
        fetchUrl={requests.fetchMystery}
        />
            <Row 
    title="Romance"
        fetchUrl={requests.fetchRomance}
        />
            <Row 
    title="ScienceFictionMovie"
        fetchUrl={requests.fetchScienceFiction}
        />
         <Row 
    title="TVmovie"
        fetchUrl={requests.fetchTVmovie}
        />
         <Row 
    title="Thriller"
        fetchUrl={requests.fetchThriller}
        />
         <Row 
    title="WarMovie"
        fetchUrl={requests.fetchWar}
        />
         <Row 
    title="Westernr"
        fetchUrl={requests.fetchWesternr}
        />
 
    </>
  )
}

export default Rowlist 
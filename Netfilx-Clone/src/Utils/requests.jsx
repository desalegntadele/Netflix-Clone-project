
//let API_KEY=5f9f00a92c71f58231e9af40a56079e8;
//-url 'https://api.themoviedb.org/3/genre/movie/list?api_key=5f9f00a92c71f58231e9af40a56079e8&language=en' \
const API_KEY = '5f9f00a92c71f58231e9af40a56079e8';
const requests =  {
fetchNetflixOriginals: `/discover/movie?api_key=${API_KEY}&with_networks=213`,
fetchAction:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
 fetchAdventure:`/discover/movie?api_key=${API_KEY}&with_genres=12`,
 fetchAnimation:`/discover/movie?api_key=${API_KEY}&with_genres=16`,
 fetchComedy:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
 fetchCrime:`/discover/movie?api_key=${API_KEY}&with_genres=80`,
 fetchDocumentary:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
 fetchDrama:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
 fetchFamily:`/discover/movie?api_key=${API_KEY}&with_genres=10751`,
 fetchFantasy:`/discover/movie?api_key=${API_KEY}&with_genres=14`,
 fetchHistory:`/discover/movie?api_key=${API_KEY}&with_genres=36`,
 fetchHorror:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
 fetchMusic:`/discover/movie?api_key=${API_KEY}&with_genres=10402`,
 fetchMystery:`/discover/movie?api_key=${API_KEY}&with_genres=9648`,
 fetchRomance:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
 fetchScienceFiction:`/discover/movie?api_key=${API_KEY}&with_genres=878`,
 fetchTVmovie:`/discover/movie?api_key=${API_KEY}&with_genres=10770`,
 fetchThriller:`/discover/movie?api_key=${API_KEY}&with_genres=53`,
 fetchWar:`/discover/movie?api_key=${API_KEY}&with_genres=10752`,
 fetchWesternr:`/discover/movie?api_key=${API_KEY}&with_genres=37`,

}

export default requests
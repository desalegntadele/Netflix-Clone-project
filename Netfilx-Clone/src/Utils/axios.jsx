import axios from 'axios'
let instance=axios.create({
  baseURL:"https://api.themoviedb.org/3",
})
export default instance;
//we're using the axios library to send a GET request to a URL defined in requests.fetchNetflixOriginals.
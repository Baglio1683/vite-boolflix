import {reactive} from 'vue'; 

export const store = reactive ({

apiUrlMovie : "https://api.themoviedb.org/3/search/movie?api_key=58acd0e327568914bcb60892cb3ab70a&query=", 
loading : false, 
query: "", 
moviesList: [], 

// "https://api.themoviedb.org/3/search/movie?api_key={{this.apiKey}}&query=ciao&language=en-US"

}); 


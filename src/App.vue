<script>
import axios from "axios";
import AppHeader from './components/AppHeader.vue';
import AppMovieList from './components/AppMovieList.vue';
import AppSingleMovie from "./components/AppSingleMovie.vue";
import { store } from './store'

export default{

components: {
AppHeader, 
AppMovieList, 
AppSingleMovie
}, 

data(){
  return{
    store,
  }
}, 

methods: {

  getMovies(){
      
      this.store.loading = true;
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=58acd0e327568914bcb60892cb3ab70a&query=${store.query}`).then((res) => {
      this.store.moviesList = res.data.results;
      this.store.loading = false;
      
      });
  }, 

}, 

created(){
    this.getMovies()
  }

}


</script>

<template>

<AppHeader  @searchMovie="getMovies" />
<AppMovieList />

<div class="container">

</div>


</template>


<style lang="scss">
@use './styles/general.scss'; 


h1{
  color: red; 
}

</style>
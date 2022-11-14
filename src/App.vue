<script>
import axios from "axios";
import AppHeader from './components/AppHeader.vue';
import AppMovieList from './components/AppMovieList.vue';
import { store } from './store'

export default{

components: {
AppHeader, 
AppMovieList
}, 

data(){
  return{
    store,
  }
}, 

methods: {

  getMovies(){

      this.store.loading = true;
      axios.get('https://api.themoviedb.org/3/search/movie?api_key=58acd0e327568914bcb60892cb3ab70a&query="ciao"&language=en-US').then((res) => {
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

<AppHeader />
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
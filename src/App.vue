<script>
import axios from "axios";
import AppHeader from './components/AppHeader.vue';
import AppMovieList from './components/AppMovieList.vue';
import AppSingleMovie from "./components/AppSingleMovie.vue";
import { store } from './store'; 

export default{

components: {
AppHeader, 
AppMovieList, 
AppSingleMovie,
}, 

data(){
  return{
    store,
  }
}, 

methods: {

  SearchMoviesAndSeries(){

    this.getMovies(); 
    this.getSeries(); 
  },
  
  
  getMovies(){
      
      this.store.loading = true;
      axios.get(`${store.apiUrlMovie}${store.query}`).then((res) => {
      this.store.moviesList = res.data.results;
      this.store.loading = false;
      
      }).catch(err => {
          console.log(err);
        });
      }, 

      getSeries(){
      
      this.store.loading = true;
      axios.get(`${store.apiUrlSeires}${store.query}`).then((res) => {
      this.store.seriesList = res.data.results;
      this.store.loading = false;
      
      }).catch(err => {
          console.log(err);
        });
      }, 


}, 

created(){

    this.SearchMoviesAndSeries();
 
  }

}


</script>

<template>

<AppHeader  @searchMovie="SearchMoviesAndSeries" />

<main>
  <AppMovieList />  
</main>


</template>


<style lang="scss">
@use './styles/general.scss'; 

main{
  height: 85vh;
  overflow-y: scroll;
}

h1{
  color: red; 
}

</style>
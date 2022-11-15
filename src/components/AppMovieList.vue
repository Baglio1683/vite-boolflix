<script>
import AppSingleMovie from './AppSingleMovie.vue';
import { store } from '../store'

export default{

    name: 'AppMovieList',

    components: {
       AppSingleMovie
    } , 

    data(){
        return{
          store, 
        }
    }

}


</script>



<template>

<div class="container">

     <h2>Lista Film</h2>

    <div class="card" v-for="(mov) in store.moviesList">

        <AppSingleMovie :movie="mov" />

    </div> 

    <h2>Lista Serie TV</h2>
    
     <div class="card" v-for="(ser) in store.seriesList">
        
        <AppSingleMovie :movie="ser" />

     </div>
</div>  

</template>



<style lang="scss" scoped>

.card{
    margin-right: 10px;
    margin-bottom: 10px;
    width: calc(100% / 3 - 10px );
    border: 1px solid black;
}




</style>
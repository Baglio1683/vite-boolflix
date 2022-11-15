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


<h2>Lista Film</h2>

<div class="container">


    <div class="card" v-for="(mov) in store.moviesList">

        <AppSingleMovie :movie="mov" />

    </div> 
</div>



<h2>Lista Serie TV</h2>
<div class="container">
     <div class="card" v-for="(ser) in store.seriesList">
        
        <AppSingleMovie :movie="ser" />

     </div>
</div>  

</template>



<style lang="scss" scoped>




h2{
    width: 100%;
    text-align: center; 
    padding: 1rem;
}



.card{
    position: relative;
    margin-right: 10px;
    margin-bottom: 10px;
    width: calc(100% / 3 - 10px );
    height: 400px;
}




</style>
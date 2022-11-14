<script>
import AppHeader from './components/AppHeader.vue';
import AppMovieList from './components/AppMovieList.vue';


export default{

components: {
AppHeader, 
AppMovieList
}, 

data(){
  return{
    message : "hello"
  }
}, 

methods: {

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
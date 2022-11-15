<script>

export default{

     name: 'AppSingleMovie', 

     data(){
        return{
         flags: ['en' , 'it']
        }
     },


     props: {
        movie: Object
    }, 

    methods : {

        getImgUrl(imgName) {
            return new URL(`../assets/img/${imgName}.png`, import.meta.url).href;
        }
    },

    computed: {

        getTitle(){
            return this.movie.title ? this.movie.title : this.movie.name;
        }, 

        getOriginalTitle(){
            return this.movie.original_title ? this.movie.original_title : this.movie.original_name;
        }, 
    }

}

</script>

<template>


    <h2>Titolo : {{getTitle}}</h2>
    <h3>Titolo originale : {{getOriginalTitle}}</h3>
    <img v-if="flags.includes(movie.original_language)" :src="getImgUrl(movie.original_language)" alt="">
    <p v-else>lingua originale : {{movie.original_language}}</p>
    <p>Voto : {{movie.vote_average}}</p>

</template>

<style>





</style>
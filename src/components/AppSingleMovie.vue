<script>

export default{

     name: 'AppSingleMovie', 

     data(){
        return{
         flags: ['en' , 'it'], 
         counter: [1]
        }
     },


     props: {
        movie: Object
    }, 

    methods : {

        getImgUrl(imgName) {
            return new URL(`../assets/img/${imgName}.png`, import.meta.url).href;
        },

        getPosterImage(posterImg){
         
        return `https://image.tmdb.org/t/p/w300${posterImg}`; 

         },

        }, 
    

    computed: {

        getTitle(){
            return this.movie.title ? this.movie.title : this.movie.name;
        }, 

        getOriginalTitle(){
            return this.movie.original_title ? this.movie.original_title : this.movie.original_name;
        }, 
        
        getVote(){

             const i = parseInt(this.movie.vote_average)
             console.log(i)

             let newcount =[]
             newcount.length = i
             console.log(newcount)

             this.counter = newcount
             console.log(this.counter)

             return 
            },

        }
     }

</script>

<template>

    <h2>Titolo : {{getTitle}}</h2>
    <h3>Titolo originale : {{getOriginalTitle}}</h3>
    <img v-if="flags.includes(movie.original_language)" :src="getImgUrl(movie.original_language)" alt="">
    <p v-else>lingua originale : {{movie.original_language}}</p>
    <span>Il voto è: {{getVote}} <i v-for="(item) in counter" class="fa-solid fa-star"></i></span>
    <img :src="getPosterImage(movie.poster_path)" alt="">

</template>

<style>





</style>
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
         
        return `https://image.tmdb.org/t/p/w342${posterImg}`; 

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
             
             return this.movie.vote_average

            },

        }
     }

</script>

<template>

<div>
    <h2>Titolo : {{getTitle}}</h2>
    <h3>Titolo originale : {{getOriginalTitle}}</h3>
    <img v-if="flags.includes(movie.original_language)" :src="getImgUrl(movie.original_language)"  class="flag_img" alt="">
    <p v-else>lingua originale : {{movie.original_language}}</p>
    <p>Il voto è: {{getVote}} <i v-for="(item) in counter" class="fa-solid fa-star"></i></p>
    <img v-if="movie.poster_path" :src="getPosterImage(movie.poster_path)" alt="" class="poster_img">
    <img v-else src="../assets/img/no_available.jpeg" alt="" class="poster_img">
</div>

</template>

<style lang="scss" scoped>

     h2{
        margin-bottom: 10px;
     }

     h3{
        margin-bottom: 10px;
     }
    .flag_img{
        width: 30px;
        margin-bottom: 10px;
    }

    .poster_img{
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        z-index: 99;
    }

    .card:hover .poster_img{
        display: none;
    }

</style>
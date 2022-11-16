<script>

export default{

     name: 'AppSingleMovie', 

     data(){
        return{
         flags: ['en' , 'it'], 
         counterStarfull: [], 
         conterStarEmpty: [],
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

             const i = Math.ceil(this.movie.vote_average)

             let y; 
             let k;

             if(i === 9 || i === 10){
                 y = 5
                 k = 0
             }

             if(i === 8 || i === 7){
                y = 4
                k = 1
            }

            if(i === 6 || i === 5){
                y = 3
                k = 2
            }

            if(i === 4 || i === 3){
                y = 2
                k = 3
            }

            if(i === 2 || i === 1){
                y = 1
                k = 4
            }

            if(i === 0){
                y = 0
                k = 5
            }

             let newcount = []
             newcount.length = y
             console.log(newcount)

             let newcount2 = []
             newcount2.length = k


             this.counterStarfull = newcount
             this.counterStarEmpty = newcount2

             return i

            },

        }
     }

</script>

<template>

<div class="main_card">

   <div class="card_text">
        <h2>Titolo : {{getTitle}}</h2>
        <h3>Titolo originale : {{getOriginalTitle}}</h3>
        <img v-if="flags.includes(movie.original_language)" :src="getImgUrl(movie.original_language)"  class="flag_img" alt="">
        <p v-else>lingua originale : {{movie.original_language}}</p>
        <p>Il voto è: {{getVote}} <i v-for="(item) in counterStarfull" class="fa-solid fa-star"></i> <i v-for="(itm) in counterStarEmpty" class="fa-regular fa-star"></i></p>
    </div>

    <div class="card_img">
        <img v-if="movie.poster_path" :src="getPosterImage(movie.poster_path)" alt="" class="poster_img">
        <img v-else src="../assets/img/no_available.jpeg" alt="" class="poster_img">
    </div>

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
        transition: visibility 1.5s;
        perspective: 1000px;
    }

    .card:hover .card_img{
        visibility: hidden;
    }

    .card:hover .card_text{
        animation-name: rotationText;
        animation-timing-function: linear; 
        animation-duration: 3s;
    }

    @keyframes rotationText{
        0%   {transform: rotateY(0deg);}
        25%  {transform: rotateY(45deg);}
        50%  {transform: rotateY(90deg);}
        75%  {transform: rotateY(135deg);}
        100% {transform: rotateY(180deg)}
     }


</style>
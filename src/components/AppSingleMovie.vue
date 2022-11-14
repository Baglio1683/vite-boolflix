<script>

export default{

     name: 'AppSingleMovie', 

     props: {
        movie: Object
    }

}

</script>

<template>


    <h2>Titolo : {{movie.title}}</h2>
    <h3>Titolo originale : {{movie.original_title}}</h3>
    <p>lingua originale : {{movie.original_language}}</p>
    <p>Voto : {{movie.vote_average}}</p>

</template>

<style>





</style>
<script>
import { store } from '../store'


export default{
    name: 'Appheader', 

    data(){
        return{
            store, 
        }
    
    }
}



</script>


<template>

<header>

    <div class="logo">BOOLFIX</div>

    <div>
        <input type="search" placeholder="Cerca film e serie TV" v-model="store.query">
        <button @click="$emit('searchMovie')">Vai</button>
    </div>

</header>


</template>

<style lang="scss" scoped>

header{
    display: flex;
    justify-content: space-between;
    align-content: flex-start;
    align-items: center;
    padding: 1rem;
    height: 15vh;
    background-color: black;

    .logo{
        color: red; 
    }

    input{
        display: inline-block;
        height: 50px;
        }

     input:focus {
        outline-width: 0;
     }

     button{
        width: 50px;
        height: 50px;

     }

                                                        
    }



</style>

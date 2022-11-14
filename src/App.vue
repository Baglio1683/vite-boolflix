<script>

export default{

components: {

}, 

data(){
  return{
    message : "hello"
  }
}





}


</script>

<template>

<div class="container"><h1>{{message}}</h1></div>

</template>


<style lang="scss">
@use './styles/general.scss'; 


h1{
  color: red; 
}

</style>
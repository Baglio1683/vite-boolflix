<script>

export default{
    name: 'Appheader', 

    data(){
        return{
            
        }
    }
}



</script>


<template>

<header>

    <div>logo</div>

    <div>
        <input type="text" placeholder="Cerca film">
        <button>Vai</button>

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
}

</style>

<template>
    <div class="ccTile">      
        <img class="ccImg" src="https://via.placeholder.com/300x150" alt="Girl in a jacket">
        <div class="ccNom"> Programme Cadeau </div>
        <div class="ccPrix">80$</div>
    </div>
</template>

<script>
    export default {
        name: 'CCTile',
        components: {

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .ccTile {
        position:relative;
        margin:0 1rem;
    }
    .ccImg {
        height:150px;
        width:300px;
    }
    .ccNom {
        height: 75px;
        width:300px;
        position:absolute;
        top:20px;
        background-color:rgb(0,0,0,.6);
        z-index:5;
        display:flex;
        justify-content:center;
        align-items:center;
        font-size: 20px;
    }
    .ccPrix {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin:1rem 0 ;
        font-size: 32px;
    }
</style>

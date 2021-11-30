<template>
    <div class="tile">
        <div class="tileTop">Nom du groupe de tarif</div>
        <div class="tileBot">50$</div>
    </div>
</template>

<script>
    export default {
        name: 'TileTarif',
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .tile {
        background:black;
        min-width:200px;
        width:300px;
        height:120px;
        border:grey 1px solid;
        margin: 0 1rem;
    }
    .tileTop {
        height: 40%;
        border-bottom: 2px solid #fece00;
        margin: 0 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
    }
    .tileBot {
        display: flex;
        align-items: center;
        justify-content: center;
        height:60%;
        font-size:32px;
    }
</style>

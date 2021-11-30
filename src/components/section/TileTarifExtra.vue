<template>
    <div class="tileExtra">
        <div class="tileExtraLeft">Pour le mardi</div>
        <div class="tileExtraRight">07$</div>
        
    </div>
</template>

<script>
    export default {
        name: 'TileTarifExtra',
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .tileExtra {
        
        height:3rem;
        font-size: 20px;
        display:flex;
        justify-content: center;
        margin-bottom: 2rem;
    }

    .tileExtraLeft {
        display: flex;
        justify-content: right;
        align-items: center;
        width: 50%;
        border-right: 2px solid #fece00;
        padding-right:1rem;
        margin:6px 0;
    }

    .tileExtraRight {
        width: 50%;
        display: flex;
        justify-content: left;
        align-items: center;
        padding-left:1rem;
    }


</style>

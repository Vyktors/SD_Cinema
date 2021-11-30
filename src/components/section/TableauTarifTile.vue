<template>
    <div class="tile"></div>
</template>

<script>
    export default {
        name: 'TableauTarifTile',
        props: {
            msg: String
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .tile {
        background:black;
        min-width:200px;
        width:300px;
        height:100px;
        border:grey 2px solid;
    }
</style>

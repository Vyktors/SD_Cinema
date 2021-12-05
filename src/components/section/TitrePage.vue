<template>
    <div class="title">
        <h1>{{ titre }}</h1>
    </div>
    <div class="textHeader">
        {{ description }}
    </div>
</template>
<script>
    export default {
        name: 'TitrePage',
        props: {
            titre: String,
            description: String
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .title {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 0 2rem ;
    }
    .textHeader {
        display: flex;
        justify-content: center;
        padding: 0 2rem 2rem;
        font-size: 16px;
        text-align: center;
    }
</style>

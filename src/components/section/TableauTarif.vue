<template>
    <div class="tab">
        <TileTarif 
            v-for="(item,index) in list"
            v-bind:key="index"
            :nom="item.nom"
            :prix="item.prix" />
    </div>
</template>

<script>
    import TileTarif from "@/components/section/TileTarif.vue"
    export default {
        name: 'TableauTarif',
        components: {
            TileTarif,
        },
        props: {
            list : Array
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .tab {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        align-items: center;
    }
</style>

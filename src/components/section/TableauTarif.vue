<template>
    <div class="tab">
        <TileTarif />
        <TileTarif />
        <TileTarif />
    </div>
</template>

<script>
    import TileTarif from "@/components/section/TileTarif.vue"
    export default {
        name: 'TableauTarif',
        components: {
            TileTarif,
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

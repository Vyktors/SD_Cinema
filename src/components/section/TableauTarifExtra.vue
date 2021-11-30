<template>
    <div class="tabExtra">
        <TileTarifExtra />
        <TileTarifExtra />
        <TileTarifExtra />
    </div>
</template>

<script>
    import TileTarifExtra from "@/components/section/TileTarifExtra.vue"
    export default {
        name: 'TableauTarifExtra',
        components: {
            TileTarifExtra,
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .tabExtra {
        display: flex;
        justify-content: center;
        margin-bottom: 2rem;
        flex-direction:column;
    }
</style>

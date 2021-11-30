<template>
    <div class="tab">
        <TableauTarifTile />
        <TableauTarifTile />
        <TableauTarifTile />
    </div>
</template>

<script>
    import TableauTarifTile from "@/components/section/TableauTarifTile.vue"
    export default {
        name: 'TableauTarif',
        components: {
            TableauTarifTile,
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .tab {
        display:flex;
        justify-content: center;

    }
</style>

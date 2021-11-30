<template>
    <div class="tabCad">
        <CCTile />
        <CCTile />
        <CCTile />
    </div>
</template>

<script>
    import CCTile from '@/components/section/CCTile.vue'

    export default {
        name: 'CarteCadeaux',
        components: {
            CCTile,

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .tabCad{
        display:flex;
        justify-content:space-between;
    }
</style>

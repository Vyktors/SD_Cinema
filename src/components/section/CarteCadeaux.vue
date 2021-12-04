<template>
    <div class="tabCad">
        <CCTile 
            v-for="(item,index) in cadeaux"
            v-bind:key="index"
            :nom="item.nom"
            :prix="item.prix"
            />
    </div>
</template>

<script>
    import CCTile from '@/components/section/CCTile.vue'

    export default {
        name: 'CarteCadeaux',
        components: {
            CCTile,
        },
        props: {
            cadeaux : Array
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .tabCad{
        display:flex;
        justify-content:center;
        flex-wrap:wrap;
        align-items:center;
    }
</style>

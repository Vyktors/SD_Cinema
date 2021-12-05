<template>
    <div class="tabExtra">
        <Item v-for="(item,index) in list"
              v-bind:key="index"
              :nom="item.nom"
              :prix="item.prix"/>
    </div>
</template>

<script>
    import Item from "@/components/section/Item.vue"
    export default {
        name: 'ListeItem',
        components: {
            Item,
        },
        props: {
            list: Object,
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

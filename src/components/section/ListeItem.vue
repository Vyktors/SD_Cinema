<template>
    <div class="tabExtra">
        <Item />
        <Item />
        <Item />
    </div>
</template>

<script>
    import Item from "@/components/section/Item.vue"
    export default {
        name: 'ListeItem',
        components: {
            Item,
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

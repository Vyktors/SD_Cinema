<template>
    <DescriptionFilm v-if="charged" :objFilm="films.find(a=>a.id == $route.params.id)" />
</template>

<script>
    import axios from 'axios';
    import DescriptionFilm from "@/components/section/DescriptionFilm.vue";

    export default {
        name: 'Film',
        components: {
            DescriptionFilm,
        },
        data() {
            return {
                films: [],
                charged: false,
            }
        },
        created() {
            axios
                .get('http://127.0.0.1:3333/')
                .then(response => {
                    (this.films = response.data)
                    this.charged = true
                })
        }
    }
</script>

<style scoped>


</style>

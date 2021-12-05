<template>
    <DescriptionFilm v-if="charged" :objFilm="film" />
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
                film: Object,
                charged: false,
            }
        },
        created() {
            axios
                .get('http://127.0.0.1:3333/film/'+ this.$route.params.id)
                .then(response => {
                    (this.film = response.data)
                    this.charged = true
                })
        }
    }
</script>

<style scoped>


</style>

<template>
    <TitrePage :titre="film.titre"
               :description="'Vous trouverez ci-dessous toutes les informations pour votre aventure!'" />
    <DescriptionFilm v-if="charged" :objFilm="film" />
</template>

<script>
    import axios from 'axios';
    import DescriptionFilm from "@/components/section/DescriptionFilm.vue";
    import TitrePage from '@/components/section/TitrePage.vue'
    export default {
        name: 'Film',
        components: {
            DescriptionFilm,
            TitrePage
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

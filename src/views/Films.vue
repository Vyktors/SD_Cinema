<template>
    <TitrePage :titre="'Tous les films!'"
               :description="'Vous trouverez ci-dessous tout notre catalogue de films!'" />

    <RangeeFilmSpecial v-if="checkAiring"
                       :titreSpecial="`En vedette`"
                       :listeFilm="airing.featured"
                       :wDate="false" />

    <RangeeFilmSpecial v-if="checkUpcomings"
                       :titreSpecial="`Bientot a l'affiche`"
                       :listeFilm="upcomings"
                       :wDate="true" />

    <RangeeFilm v-if="checkAiring"
                :titre="`En vigueur`"
                :listeFilm="airing.regular"
                />
</template>

<script>
    import axios from 'axios';

    import RangeeFilmSpecial from '@/components/section/RangeeFilmSpecial.vue'
    import RangeeFilm from '@/components/section/RangeeFilm.vue'
    import TitrePage from '@/components/section/TitrePage.vue'
    export default {
        name: 'Films',
        components: {
            RangeeFilmSpecial,
            RangeeFilm,
            TitrePage
        },
        data() {
            return {
                upcomings: [],
                airing: [],
                checkUpcomings: false,
                checkAiring: false,
            }
        },
        created() {
            //ENDPOINTS Airing
            axios
                .get('http://127.0.0.1:3333/films/airing')
                .then(response => {
                    (this.airing = response.data)
                    this.checkAiring = true
                })

            //ENDPOINTS Upcomings
            axios
                .get('http://127.0.0.1:3333/films/upcoming')
                .then(response => {
                    (this.upcomings = response.data)
                    this.checkUpcomings = true
                })

            
        }
    }
</script>

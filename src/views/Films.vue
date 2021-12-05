<template>
    <TitrePage :titre="'Tous les films!'"
               :description="'Vous trouverez ci-dessous tout notre catalogue de films!'" />
    <RangeeFilmVedette/>
    <br><br><br>
    <RangeeFilmAVenir/>
    <br><br><br><br><br>
    <TousLesFilms/>
</template>

<script>
    import RangeeFilmVedette from '@/components/section/RangeeFilmVedette.vue'
    import RangeeFilmAVenir from '@/components/section/RangeeFilmAVenir.vue'
    import TousLesFilms from '@/components/section/RangeeFilm.vue'
    import TitrePage from '@/components/section/TitrePage.vue'
    export default {
            name: 'Films',
            components: {
               RangeeFilmVedette,
               RangeeFilmAVenir,
                TousLesFilms,
                TitrePage
            }
    }
</script>

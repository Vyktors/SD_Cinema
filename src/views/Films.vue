<template>
films
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
export default {
        name: 'Films',
        components: {
           RangeeFilmVedette,
           RangeeFilmAVenir,
           TousLesFilms
        }
    }
</script>

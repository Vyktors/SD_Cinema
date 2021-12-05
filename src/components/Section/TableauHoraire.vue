<template>
    <div class="tableau-horaire-container">
        <div class="rangee-horaire-container">
            <div
                v-for="film, index in listeFilm"
                :key="index"
                class="rangee-horaire">
               <RangeeHoraire
                    :show-date="index === 0"
                    :listeHoraire="film"
                    :id="film.film.id"
                />
            </div>
        </div>
    </div>
</template>

<script>
import RangeeHoraire from '@/components/section/RangeeHoraire.vue'

export default {
        name: 'TableauHoraire',
        props: {
            listeFilm: {
                type: Object,
            },
        },
        components: {
            RangeeHoraire
        },
}
</script>

<style scoped>
.tableau-horaire-container {
    display: flex;
    justify-content: center;
}

.rangee-horaire-container {
    overflow-x: auto;
}

.rangee-horaire{
    margin-bottom: 1rem;
}
</style>
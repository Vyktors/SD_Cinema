<template>
    description {{ $route.params.id }}
    <div class="film__container">
        <div class="film__apropos">
            <div class="film__affiche">
                <img src="@/assets/affiche-film.jpg" alt="Affiche du film"/>
            </div>
            <div class="film__description">
                <div class="film__titre"></div>
                <div class="film__resume"></div>
                <div class="film__duree-realisateur">
                    <div class="film__duree"></div>
                    <div class="film__realisateur"></div>
                </div>
                <div class="film__acteur"></div>
            </div>
        </div>
        <div class="film__horaire">
            <RangeeHoraire/>
        </div>
    </div>
</template>

<script>
import RangeeHoraire from '@/components/Section/RangeeHoraire';

export default {
    name: 'Film',
    components: { RangeeHoraire },
}
</script>

<style scoped>

</style>

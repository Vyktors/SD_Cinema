<template>
      
    <div class="conteneur_bande">
        <div class="enteteCatalogue"> {{ titre }}  </div>
        <!-- Afficher la rangée de film -->  
            <div class="conteneur_films">
                <div class="conteneur_film" v-for="film in listeFilm" :key="film.id">
                    <router-link :to="{name:'film', params:{ id: film.id }}" class="film_canvas" :style="{ backgroundImage: 'url(' + film.img + ')' }">
                        <img class="film" :src="`${film.img}`" alt="Afficher le film" />
                    </router-link>
                </div>
            </div>
    </div>
</template>

<script>
 export default {
        name: 'RangeeFilm',    
        props: {
            titre: {
                type: String,
                default: "Titre section"
            },
            listeFilm: {
                type: Object,
                default: null
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    .conteneur_bande {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .conteneur_films {
        max-width: 1440px;
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }

    .enteteCatalogue {
        width: fit-content;
        min-width: 250px;
        padding: 1rem;
        justify-content: center;
        align-items: center;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        display: flex;
        font-size: 30px;
    }

    .film_canvas {
        display: flex;
        height: 100%;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        background-color: black;
        width: 188px;
        height: 250px;
        margin: 2rem;
        border: 2px white solid;
        border-radius: 5px;
    }

    .film {
        display: none;
    }

    .conteneur_film {
        position: relative;
    }

</style>

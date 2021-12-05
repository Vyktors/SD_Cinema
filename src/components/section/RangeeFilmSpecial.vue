<template>
    <div class="conteneur_bande">
        <div class="entete"> {{ titreSpecial}}  </div>
        <!-- Afficher la rangée de film -->
        <div class="bande">
            <div class="conteneur_films">
                <div class="conteneur_film" v-for="film in listeFilm" :key="film.id">
                    <router-link :to="{name:'film', params:{ id: film.id }}" class="film_canvas" :style="{ backgroundImage: 'url(' + film.img + ')' }">
                        <img class="film" :src="`${film.img}`" alt="Afficher le film" />
                    </router-link>
                    <div v-if="wDate" class="dateSortie">{{film.date_sortie}}</div>
                </div>
            </div>
        </div>
    </div>
            
</template>

<script>
 export default {
        name: 'RangeeFilmSpecial',
        props: {
            titreSpecial: {
                type: String,
                default: "Titre section"
            },
            listeFilm: {
                type: Object,
                default: null
            },

            wDate: {
                type: Boolean,
                default: false
            }
        }
 }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .conteneur_bande {
        width: 100%;
        display:flex;
        flex-direction:column;
        justify-content: center;
        align-items:center;
    }

    .bande {
        width:100%;
        background-color: #43484b;
        min-height: 300px;
        display: flex;
        justify-content: center;
        border-radius: 5px 10px 0 5px;
        margin-bottom: 4rem;
    }

    .conteneur_films {
        max-width: 1440px;
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        flex-wrap:wrap;
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
    .entete {
        width:fit-content;
        min-width:250px;
        padding:1rem 2rem;
        background-color: #43484b;
        justify-content: center;
        align-items:center;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        display: flex;
        font-size: 30px;
    }

    .film{
       visibility:hidden;
    }

    .conteneur_film {
        position:relative;
    }

    .dateSortie {
        height: 45px;
        width: 192px;
        position: absolute;
        top: 50%;
        left: 2rem;
        background-color: rgb(0,0,0,.6);
        z-index: 5;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        box-sizing:border-box;
        pointer-events:none;
    }
</style>


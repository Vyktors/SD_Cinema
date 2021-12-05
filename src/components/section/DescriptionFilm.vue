<template>

    <!-- description -->
    <div class="film__container">
        <div class="film__apropos">

            <!-- Affiche -->
            <div class="film__affiche-container">
                <img :src="`${objFilm.img}`" alt="Affiche du film" class="film__affiche" />
            </div>

            <!-- Description du film -->
            <div class="film__description">

                <!-- Titre et resume-->
                <div class="film__titre">
                    <h2>{{objFilm.titre}}</h2><div class="film__genre">| {{objFilm.genre.nom}}</div>
                </div>
                <div class="film__resume">
                    {{objFilm.description}}
                </div>

                <div class="film__duree-realisateur">
                    <!-- duree -->
                    <div class="film__duree-container">
                        <div class="film__icon-container">
                            <i class="material-icons">timer</i>
                        </div>
                        <div class="film__duree">
                            {{objFilm.duree_minutes}}m
                        </div>
                    </div>

                    <!-- Realisateur -->
                    <div class="film__realisateur-container">
                        <div class="film__icon-container">
                            <i class="material-icons">chair</i>
                        </div>
                        <div class="film__realisateur">
                            {{objFilm.realisateur}}
                        </div>
                    </div>
                </div>

                <!-- Acteur -->
                <div class="film__acteur-container">
                    <div class="film__icon-container">
                        <i class="material-icons">groups</i>
                    </div>
                    <div class="film__acteur">
                        {{objFilm.acteur}}
                    </div>
                </div>
            </div>
        </div>
        <div class="film__horaire">
            <RangeeHoraire v-if="charged"
                :overflowx="true"
                :show-date="true"
                :listeHoraire="horaire"
                :id="objFilm.id"
            />
        </div>
    </div>
</template>

<script>
    import RangeeHoraire from '@/components/section/RangeeHoraire';
    import axios from 'axios';

    export default {
        name: 'DescriptionFilm',
        components: { RangeeHoraire },
        props: {
            objFilm: Object
        },
        data() {
            return {
                horaire: Object,
                charged: false,
            }
        },
        created() {
            axios
                .get('http://127.0.0.1:3333/horaire/' + this.objFilm.id)
                .then(response => {
                    (this.horaire = response.data)
                    this.charged = true
                })
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .film__container {
        width: 100%;
        margin-top: 30px;
    }

    .film__apropos {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .film__affiche {
        width: 350px;
        height: 400px;
        margin-right: 20px;
    }

    .film__icon {
        width: 32px;
        height: 32px;
    }

    .film__description {
        margin-left: 2em;
    }
    .film__titre {
        display:flex;
        align-items:center;

    }
    .film__titre h2{
        padding: 0 1rem 0 0;
    }

    .film__genre {
        opacity: 0.8;
        font-size: 20px;
    }
    .film__resume {
        max-width: 750px;
        min-width: 600px;
        min-height: 100px;
        margin-bottom: 20px;
        text-align: left;
    }

    .film__duree-realisateur,
    .film__realisateur-container,
    .film__duree-container,
    .film__acteur-container {
        display: flex;
        align-items: center;
    }

    .film__realisateur-container {
        margin-right: 10px;
        margin-left: auto;
    }

    .film__icon-container {
        margin-right: 5px;
    }

    

    .film__horaire {
        height: 400px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media (max-width:800px) {
        .film__apropos {
            display: flex;
            justify-content: center;
            flex-direction: column;
        }

        .film__description {
            margin-left: auto;
        }
    }
</style>

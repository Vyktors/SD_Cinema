<template>

    <!-- description -->
    <div class="film__container">
        <div class="film__apropos">

            <!-- Affiche -->
            <div class="film__affiche-container" :style="{ backgroundImage: 'url(' + objFilm.img + ')' }">
                <img :src="`${objFilm.img}`" alt="Affiche du film" class="film__affiche" />
            </div>

            <!-- Description du film -->
            <div class="film__description">
                <div class="film__desc__text">
                    <!-- Titre et resume-->
                    <div class="film__titre">
                        <h1>{{objFilm.titre}}</h1><div class="film__genre">&nbsp;| {{objFilm.genre.nom}}</div>
                    </div>
                    <div class="film__resume">
                        {{objFilm.description}}
                    </div>
                </div>
                <div class="film__desc__stat">
                    
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
        margin-top: 5rem;
        display:flex;
        justify-content:center;
        align-items: center;
        flex-direction:column;
    }

    .film__apropos {
        padding: 0 2rem;
        display: flex;
        justify-content: center;
        align-items:center;
        max-width: 1440px;
    }

    .film__affiche-container {
        display: flex;
        justify-content: center;
        padding: 0 1rem;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        height: 100%;
        background-color: black;
        border: white solid 2px;
        border-radius: 5px;
        width: 300px;
        max-height: 450px;
    }

    .film__affiche {
        max-height: 450px;
        visibility: hidden;
    }

    .film__icon {
        width: 32px;
        height: 32px;
    }

    .film__description {
        padding: 0 2rem;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        font-size:20px;
    }
    .film__titre {
        display:flex;
        flex-wrap:wrap;
        align-items:flex-end;
        margin:0 0 1rem;
    }
    .film__titre h1{
        margin:0;
    }

    .film__genre {
        opacity: 0.8;
        font-size: 26px;
        padding-bottom:6px;
    }
    .film__resume {
        min-height: 100px;
        margin-bottom: 20px;
        text-align: left;
    }

    .film__desc__text {

    }

    .film__desc__stat {
    }

    .film__realisateur-container,
    .film__duree-container,
    .film__acteur-container {
        display: flex;
        align-items: center;
        margin:1rem 2rem 0 0;

    }

    .film__realisateur-container {

    }

    .film__icon-container {
        margin-right: 1rem;
    }

    .film__horaire {
        width:100%;
        max-width:1440px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 4rem 0;
    }

    .material-icons {
        font-size: 36px;
        display:flex;
        align-items:center;
    }
    @media (max-width:800px) {
        
        .film__apropos {
            flex-direction:column;
        }

        .film__affiche-container {
            margin-bottom: 2rem;
        }
        .film__affiche {
            max-width:100%;
        }
    }
</style>

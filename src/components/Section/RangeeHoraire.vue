<template>
    <div class="container"
    :class="{ 'overflowx': overflowx }">
        <table>
            <!-- liste date -->
            <tr v-if="showDate"
                class="liste-date">
                <!-- on skip la cellule en dessus de l'image-->
                <th></th>

                <th v-for="date, index in listeDate"
                    :key="date"
                    class="date-container">
                    <div class="date"
                         :class="{ 'highlight': index == 0}">
                        {{ date }}
                    </div>
                </th>
            </tr>

            <tr class="ligne-liste-horaire">
                <td>

                    <router-link :to="{ name: 'film', params: {id: this.id} }" class="affiche__container">

                        <img :src="`${listeHoraire.film.img}`" alt="Affiche du film" class="affiche" />
                    </router-link>
                </td>

                <!-- liste des horaires -->

                <td v-for="journalier, index in listeHoraire.horaire" :key="index"
                    class="film-horaire-container">
                    <div v-if="journalier.length > 0"
                         class="liste-heure-container"
                         :class="{ 'highlight': index == 0}">
                        <ul class="horaire-journalier">
                            <li v-for="horaire, deudex in journalier" :key="deudex"
                                class="heure-container">
                                <div>
                                    {{ formatHeure(horaire.heure) }}
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div v-else
                         class="liste-heure-container liste-vide">
                        <i class="material-icons rangee-horaire__no-horaire">hide_source</i>
                    </div>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>

    export default {

    name: 'RangeeHoraire',
    props: {
        /*idFilm: {
            type: Number,
        },*/

        /**
         * si true, on pourrait scroller horizontalement le tableau
         */
        overflowx: {
            type: Boolean,
            default: false,
        },

        showDate: {
            type: Boolean,
            default: false,
        },

        listeHoraire: {
            type: Object
        },

        id: {
            type: Number,
            default: null
        },

        wImage: {
            type: Boolean,
            default: true
        }
    },

    computed: {
        /**
         *  retourne la liste des 7 prochains jours, aujourd'hui inclus
         */
        listeDate(){
            let resultat = []
            let dateActuelle = new Date()
            let date = new Date()
            let mois = [
                {id:0, nom:"janvier"},
                {id:1, nom:"fevrier"},
                {id:2, nom:"mars"},
                {id:3, nom:"avril"},
                {id:4, nom:"mai"},
                {id:5, nom:"juin"},
                {id:6, nom:"juillet"},
                {id:7, nom:"aout"},
                {id:8, nom:"septembre"},
                {id:9, nom:"octobre"},
                {id:10, nom:"novembre"},
                {id:11, nom:"decembre"}
            ]
            resultat.push("Aujourd'hui");
            for( let i = 1; i < 7; i++) {
                date.setDate(dateActuelle.getDate() + i)
                let dateString = date.getDate() + " " + mois.find(o => o.id=== date.getMonth()).nom //+ " " + date.getFullYear()
                resultat.push(dateString)
            }
            return resultat
        }
    },
        methods: {
            formatHeure(heureString) {
                let tabHeure = heureString.split(':');
                return tabHeure[0]+ ':'+ tabHeure[1]
            }
        }


}
</script>

<style scoped>
    .container {
        width: 100%;
        display: flex;
        justify-content: center;
        padding:0 2rem;
    }
    .overflowx{
        overflow-x: auto;
    }
    .affiche,
    .film-horaire-container {
        width: 150px;
        height: 200px;
    }

    .date,
    .liste-heure-container {
        width: 150px;
    }

    .affiche__container {
        display:flex;
        height:100%;
    }
    .date {
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .affiche,
    .date,
    .liste-heure-container {
        border: solid 2px white;
        border-radius: 5px;
    }

    .liste-heure-container {
        display: flex;
        align-items: center;
        height: 100%;
    }

    .liste-vide {
        justify-content: center;
    }

    .highlight {
        border: solid 4px #fece00;
        box-sizing: border-box;
    }

    .horaire-journalier {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 0;
    }

    .heure-container {
        margin: 0.5rem 0rem;
        display: flex;
        justify-content:center;
        font-size:20px;
    }
    @media (max-width:1250px) {

        .container {
            justify-content: flex-start;
        }

    }
</style>
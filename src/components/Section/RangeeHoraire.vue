<template>
    <div class="container"
    :class="{ 'overflowx': overflowx }">
        <table>
            <!-- liste date -->
            <tr 
                v-if="showDate"
                class="liste-date"
            >
                <!-- on skip la cellule en dessus de l'image-->
                <th></th>

                <th
                    v-for="date, index in listeDate"
                    :key="date"
                    class="date-container"
                >
                    <div
                        class="date"
                        :class="{ 'highlight': index == 0}"
                    >
                        {{ date }}
                    </div>
                </th>
            </tr>
            <tr class="ligne-liste-horaire">

                <td>
                    <router-link :to="{ name: 'film', params: { id: idFilm } }">
                        <img src="@/assets/affiche-film.jpg" alt="Affiche du film" class="affiche" />
                    </router-link>
                </td>
                
                <!-- liste des horaires -->
                <td
                    v-for="journalier, index in listeHoraire" :key="journalier"
                    class="film-horaire-container">
                    <div
                        v-if="journalier.length > 0"
                        class="liste-heure-container"
                        :class="{ 'highlight': index == 0}"
                    >
                        <ul class="horaire-journalier">
                            <li
                                v-for="horaire in journalier" :key="horaire"
                                class="heure-container"
                            >
                                <div>
                                    {{ horaire }}
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div
                        v-else
                        class="liste-heure-container liste-vide"
                    >
                        <i class="material-icons rangee-horaire__no-horaire">hide_source</i>
                    </div>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>

export default{
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
        }
    },
    data() {
        return {
            idFilm: 1,
            listeHoraire: [
                [
                    '10:30',
                    '15:00',
                ],
                [
                    '10:30',
                    '18:00',
                ],
                [
                    '07:30',
                    '18:00',
                ],
                [],
                [
                    '10:30',
                ],
                [
                    '07:30',
                    '10:30',
                    '18:00',
                ],
                [
                ],
            ]
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
            for( let i = 0; i < 7; i++) {
                date.setDate(dateActuelle.getDate() + i)
                let dateString = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
                resultat.push(dateString)
            }
            return resultat
        }
    }
}
</script>

<style scoped>
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
    border: solid 2px #fece00;
}
</style>
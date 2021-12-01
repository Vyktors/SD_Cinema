<template>
    <table class="rangee-horaire__liste">
        <!-- liste date -->
        <tr class="rangee-horaire__liste-date">
            <th class="rangee-horaire__vide"></th>
            <th
                v-for="date in listeDate"
                :key="date"
                class="rangee-horaire__date"
            >
                {{ date }}
            </th>
        </tr>
        <tr class="rangee-horaire__liste-horaire">

            <td><img src="@/assets/affiche-film.jpg" alt="Affiche du film" class="rangee-horaire__affiche" /></td>
            
            <!-- liste des horaires -->
            <td
                v-for="journalier in listeHoraire" :key="journalier"
                class="rangee-horaire__horaire-journalier-liste">
                <div v-if="journalier.length > 0">
                    <ul class="rangee-horaire__horaire-journalier">
                        <li
                            v-for="horaire in journalier" :key="horaire"
                            class="rangee-horaire__heure"
                        >
                            {{ horaire }}
                        </li>
                    </ul>
                </div>
                <div
                    v-else
                    class="rangee-horaire__horaire-journalier"
                >
                    <i class="material-icons rangee-horaire__no-horaire">hide_source</i>
                </div>
            </td>
        </tr>
    </table>
</template>

<script>

export default{
    name: 'RangeeHoraire',
    props: {
        idFilm: {
            type: Number,
        },
    },
    data() {
        return {
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
                    '10:30',
                ],
                [
                    '10:30',
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
.rangee-horaire__affiche{
    width: 150px;
    height: 200px;
}

.rangee-horaire__date{
    min-width: 150px;
}

.rangee-horaire__horaire-journalier-container:first-of-type {
    border-style: solid;
    border-color: #fece00;
}

.rangee-horaire__horaire-journalier{
    border-style: solid;
    border-color: white;
    margin-left: 5px;
    border-radius: 5px;
    height: 200px;
}

.rangee-horaire__no-horaire{
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
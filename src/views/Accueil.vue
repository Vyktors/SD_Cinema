<template>
    <TitrePage :titre="'Bienvenue chez Cinema'"
               :description="`Ci-dessous l'horaire de la semaine`" />
    <TableauHoraire :liste-film="listeFilm" />
</template>

<script>
    import axios from 'axios';
    import TitrePage from '@/components/section/TitrePage.vue'
    import TableauHoraire from "@/components/section/TableauHoraire.vue"
    export default {
        name: 'Acceuil',

        components: {
            TableauHoraire,
            TitrePage
        },
        data() {
            return {
                listeFilm: [],
                charged: false
            }
        },
        created() {
            axios
                .get('http://127.0.0.1:3333/horaires')
                .then(response => {
                    (this.listeFilm = response.data)
                    this.charged = true
                })
        },        
    }
</script>
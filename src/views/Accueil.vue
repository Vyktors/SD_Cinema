<template>
    <TableauHoraire
        :liste-film="listeFilm"
    />
</template>

<script>
    import axios from 'axios';
    import TableauHoraire from "@/components/section/TableauHoraire.vue"
    export default {
        name: 'Acceuil',

        components: {
            TableauHoraire
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
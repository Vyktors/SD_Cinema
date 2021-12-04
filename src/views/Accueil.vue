<template>
    <TableauHoraire
        :liste-film="listeFilm"
    />
</template>

<script>
import TableauHoraire from "@/components/section/TableauHoraire.vue"
export default {
    name: 'Acceuil',

    components: { TableauHoraire },

    data() {
        return {
            listeFilm: [
                {
                    id: 1,
                    horaire: [
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
                },
                {
                    id: 2,
                    horaire: [
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
                },
                {
                    id: 3,
                    horaire: [
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
                },
            ]
        }
    }
}
</script>
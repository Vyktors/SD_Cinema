<template>
      
    <p> Tous les Films </p>
     <!-- Afficher la rangée de film -->
        <div class="conteneur_film">
            <div class = "film1" v-for="film in filmVedette" :key="film.id">
                <router-link :to="{name:'film', params:{ id: film.id }}">
                    <img src="@/assets/affiche-film.jpg" alt="Afficher le film" class="film__affiche1" /> 
                </router-link>
            </div>
        </div>
</template>

<script>
 export default {
        name: 'TousLesFilms',
        data: function () {
    return {
      filmVedette:[
      {
        id: 1,
      },

      {
        id: 2,
      },

      {
        id: 3,
      },

      {
        id: 4,
      },

      ]
    }
    },
        components: {
            
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    .conteneur_film {
        width:100%;
        display:flex;
        flex-wrap: wrap;
        flex-direction: row-reverse;
        justify-content: space-evenly;
        border-radius: 5px 10px 0 5px;
    }

    img{
        width: 220px; 
        height: 250px;
        margin-top: 50px;
    }

    p{
        color: white;
        font-size: 16px;
        text-transform : uppercase;
        text-align: center;
    }
</style>

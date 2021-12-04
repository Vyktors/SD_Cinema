<template>
    <div class="entête">    
        <p> En Vedette </p>
    </div>
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
    name: 'RangeeFilmVedette',
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
    components: {}
 }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    .conteneur_film {
        
        background-color: #808080;
        width:100%;
		height:300px;
        display:flex;
        flex-wrap: nowrap;
        justify-content: space-evenly;
        border-radius: 5px 10px 0 5px;

    }

    .entête{
        width:450px;
		height:40px;
        background-color: #808080;
        justify-content: center;
        margin:auto;
        border-radius: 5px 10px 0 5px;
        display: flex;
        flex-wrap: wrap;
    }

    img{
       width: 220px; 
        height: 250px;
        margin-top: 25px; 
        flex-grow: 1;
        flex-shrink: 3;
        flex-basis: auto; 
    }

    p{
        color: black;
        font-size: 16px;
        text-transform : uppercase;
    }
</style>


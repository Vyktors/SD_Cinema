<template>
    <div class="entête">    
        <p> A Venir </p>
    </div>
     <!-- Afficher la rangée de film -->
            <div class="conteneur_film">
                <div class = "film1" v-for="film in filmAVenir" :key="film.dateSortie">
                     <router-link :to="{name:'film', params:{ id: film.id }}">
                         <img src="@/assets/affiche-film.jpg" alt="Afficher le film" class="film__affiche1" /> 
                         <div class="dateSortie">{{film.dateSortie}} </div>
                     </router-link>
                </div>
            </div>
</template>

<script>
 export default {
    name: 'RangeeFilmAVenir',
    data: function () {
    return {
      filmAVenir:[
      {
        dateSortie:'10/10/10',
        id: 1,
      },

      {
        dateSortie:'11/11/11',
        id: 2,
      },

      {
        dateSortie:'25/12/11',
        id: 3,
      },

      {
        dateSortie:'15/2/11',
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

    .dateSortie {
        height: 45px;
        width: 220px;
        position:absolute;
        top:600px;
        background-color:rgb(0,0,0,.6);
        z-index:5;
        display: flex;
        flex-wrap: wrap;
        justify-content:center;
        align-items:center;
        font-size: 20px;
    }

</style>
<template>
      
    <p> Tous les Films </p>
     <!-- Afficher la rangée de film -->
        <div class="conteneur_film">
            <div class = "film1">
                <img src="@/assets/affiche-film.jpg" alt="Afficher le film" class="film__affiche1" />
            </div>
            <div class = "film2">
                <img src="@/assets/affiche-film.jpg" alt="Afficher le film" class="film__affiche2" />
            </div>
            <div class = "film3">
                <img src="@/assets/affiche-film.jpg" alt="Afficher le film" class="film__affiche3" />
            </div>
            <div class = "film4">
                <img src="@/assets/affiche-film.jpg" alt="Afficher le film" class="film__affiche4" />
            </div>
            <div class = "film5">
                <img src="@/assets/affiche-film.jpg" alt="Afficher le film" class="film__affiche4" />
            </div>
            <div class = "film6">
                <img src="@/assets/affiche-film.jpg" alt="Afficher le film" class="film__affiche4" />
            </div>
            <div class = "film7">
                <img src="@/assets/affiche-film.jpg" alt="Afficher le film" class="film__affiche4" />
            </div>
            <div class = "film8">
                <img src="@/assets/affiche-film.jpg" alt="Afficher le film" class="film__affiche4" />
            </div>
            <div class = "film9">
                <img src="@/assets/affiche-film.jpg" alt="Afficher le film" class="film__affiche4" />
            </div>
            <div class = "film10">
                <img src="@/assets/affiche-film.jpg" alt="Afficher le film" class="film__affiche4" />
            </div>
            <div class = "film11">
                <img src="@/assets/affiche-film.jpg" alt="Afficher le film" class="film__affiche4" />
            </div>
            <div class = "film12">
                <img src="@/assets/affiche-film.jpg" alt="Afficher le film" class="film__affiche4" />
            </div>
        </div>
</template>

<script>
 export default {
        name: 'TousLesFilms',
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
    .conteneur_film>* {
        flex: 0 0 20.3333%;
    }

    img{
        width: 100%; 
        height: 60%;
        margin-top: 20%; 
    }

    p{
        color: white;
        font-size: 16px;
        text-transform : uppercase;
        text-align: center;
    }
</style>

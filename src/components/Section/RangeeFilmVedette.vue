<template>
     <!-- Afficher la rangée de film -->
            <div class="conteneur_film">
                <div class = "film1">
                     <img src="@/assets/affiche-film.jpg" alt="Afficher le film" class="film__affiche" />
                </div>
                <div class = "film2">
                    <img src="@/assets/affiche-film.jpg" alt="Afficher le film" class="film__affiche" />
                </div>
                <div class = "film3">
                    <img src="@/assets/affiche-film.jpg" alt="Afficher le film" class="film__affiche" />
                </div>
            </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    .conteneur_film {
         
        background-color: #CCC;
        width:100%;
		height:100px;
        display:flex;
        justify-content: space-around;

    }

    .film1, .film2,.film3 {

        height:80px;
		width:10%;
		float:left;
		margin: 10px;
    }

</style>


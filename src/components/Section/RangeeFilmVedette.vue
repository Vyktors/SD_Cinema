<template>
    <div class="entête">    
        <p> En Vedette </p>
    </div>
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
            </div>
</template>

<script>
 export default {
        name: 'RangeeFilmVedette',
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
        width:30%;
		height:40px;
        background-color: #808080;
        justify-content: center;
        margin: 0 auto;
        border-radius: 5px 10px 0 5px;
        display: flex;
        flex-wrap:wrap;
    }

    img{
        width: 110%; 
        height: 80%;
        margin-top: 20%; 
    }

    p{
        color: black;
        font-size: 16px;
        text-transform : uppercase;
    }
</style>


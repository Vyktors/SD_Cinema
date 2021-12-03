<template>
    <div class="entête">    
        <p> A Venir </p>
    </div>
     <!-- Afficher la rangée de film -->
            <div class="conteneur_film">
                <div class = "film1">
                     <img src="@/assets/affiche-film.jpg" alt="Afficher le film" class="film__affiche1" />
                      <div class="Avenir"> 4/2/2021 </div>
                </div>
                <div class = "film2">
                    <img src="@/assets/affiche-film.jpg" alt="Afficher le film" class="film__affiche2" />
                    <div class="Avenir"> 25/12/2021 </div>
                </div>
                <div class = "film3">
                    <img src="@/assets/affiche-film.jpg" alt="Afficher le film" class="film__affiche3" />
                     <div class="Avenir"> 2/12/2021 </div>
                </div>
                <div class = "film4">
                    <img src="@/assets/affiche-film.jpg" alt="Afficher le film" class="film__affiche4" />
                    <div class="Avenir"> 20/10/2021 </div>
                </div>
            </div>
</template>

<script>
 export default {
        name: 'RangeeFilmAVenir',
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
        flex-wrap: wrap;
    }

    img{
        width: 110%; 
        height: 80%;
        margin-top: 20%; 
        flex-grow: 1;
        flex-shrink: 3;
        flex-basis: auto;
    }

    p{
        color: black;
        font-size: 16px;
        text-transform : uppercase;
    }

    .Avenir {
        height: 5%;
        width: 12%;
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
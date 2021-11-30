<template>
    <!-- description {{ $route.params.id }} -->
    <div class="film__container">
        <div class="film__apropos">

            <!-- Affiche -->
            <div class="film__affiche-container">
                <img src="@/assets/affiche-film.jpg" alt="Affiche du film" class="film__affiche"/>
            </div>

            <!-- Description du film -->
            <div class="film__description">

                <!-- Titre et resume-->
                <div class="film__titre">
                    <h2>Titre du film</h2>
                </div>
                <div class="film__resume">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    Eget nunc lobortis mattis aliquam faucibus purus. In hac habitasse platea dictumst quisque. Risus in hendrerit gravida rutrum quisque non. Et malesuada fames ac turpis. Ornare massa eget egestas purus viverra. Leo in vitae turpis massa. Duis ut diam quam nulla porttitor massa id neque. Mi bibendum neque egestas congue quisque. Nam libero justo laoreet sit amet cursus. Dui sapien eget mi proin sed libero. Sagittis eu volutpat odio facilisis. Donec adipiscing tristique risus nec feugiat in fermentum posuere urna. Sit amet venenatis urna cursus eget nunc. Orci porta non pulvinar neque laoreet suspendisse interdum consectetur libero. Leo integer malesuada nunc vel risus. Metus vulputate eu scelerisque felis imperdiet. Facilisis volutpat est velit egestas. Id donec ultrices tincidunt arcu non sodales neque sodales.
                </div>

                <div class="film__duree-realisateur">
                    <!-- duree -->
                    <div class="film__duree-container">
                        <div class="film__icon-container">
                            <i class="material-icons">timer</i>
                        </div>
                        <div class="film__duree">
                            Duree du film
                        </div>
                    </div>

                    <!-- Realisateur -->
                    <div class="film__realisateur-container">
                        <div class="film__icon-container">
                            <i class="material-icons">chair</i>
                        </div>
                        <div class="film__realisateur">
                            Nom du realisateur
                        </div>
                    </div>
                </div>

                <!-- Acteur -->
                <div class="film__acteur-container">
                    <div class="film__icon-container">
                        <i class="material-icons">groups</i>    
                    </div>
                    <div class="film__acteur">
                        Nom des acteurs
                    </div>
                </div>
            </div>
        </div>
        <div class="film__horaire">
            <RangeeHoraire/>
        </div>
    </div>
</template>

<script>
import RangeeHoraire from '@/components/section/RangeeHoraire';

export default {
    name: 'Film',
    components: { RangeeHoraire },
}
</script>

<style scoped>
.film__container {
    width: 100%;
    margin-top: 30px;
}

.film__apropos {
    display: flex;
    justify-content: center;
    align-items: center;
}
.film__affiche {
    width: 350px;
    height: 400px;
    margin-right: 20px;
}

.film__icon {
    width: 32px;
    height: 32px;
}

.film__description {
    margin-left: 2em;
}

.film__resume {
    max-width: 750px;
    margin-bottom: 20px;
    text-align: left;
}

.film__duree-realisateur,
.film__realisateur-container,
.film__duree-container,
.film__acteur-container {
    display: flex;
    align-items: center;
}

.film__realisateur-container {
    margin-left: auto;
}

.film__icon-container {
    margin-right: 5px;
}

@media (max-width:800px) {
    .film__apropos {
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

    .film__description {
        margin-left: auto;
    }
}

</style>

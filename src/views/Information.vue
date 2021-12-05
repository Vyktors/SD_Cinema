<template>
    <TitrePage
                :titre="'Informations'"
                :description="'Vous trouverez ci-dessous toutes les informations pour votre aventure!'"/>

    <!--BILLETERIE-->
    <div class="contFull odd">
        <div class="title">
            <h2 id="billetterie">- Billeterie -</h2>
        </div>
        <div class="container">
            <TableauTarif v-if="checkBillets" :list="billets.main"/>
        </div>

        <div class="title">
            <h2>- Tarifs speciaux -</h2>
        </div>
        <div class="container">
            <ListeItem v-if="checkBillets" :list="billets.extra"/>
        </div>
    </div>

    <!--CARTE CADEAU-->
    <div class="contFull">
        <div class="title">
            <h2 id="carte-cadeau">- Carte cadeau -</h2>
        </div>
        <div class="container">
            <CarteCadeaux v-if="checkCadeaux" :cadeaux="cadeaux"/>
        </div>
    </div>

    <!--NOURRITURE-->
    <div class="contFull odd">
        <div class="title">
            <h2 id="nourriture">- Nourriture -</h2>
        </div>
        <div class="container">
            <ListeItem v-if="checkNourriture" :list="bouffe" />
        </div>
    </div>

    <!--COVID-19-->
    <div class="contFull">
        <div class="title">
            <h2 id="covid-19">- Covid-19 -</h2>
        </div>
        <div class="container">
            <div class="tabCovid">
                <div class="tileCovid">
                    <div class="imgCovid imgMasque"></div>
                    <div class="titleCovid"> Port du masque </div>
                    <div class="descCovid">Le port du masque est obligatoire lorsque vous n'etes pas assis </div>
                </div>
                <div class="tileCovid">
                    <div class="imgCovid imgPassport"></div>
                    <div class="titleCovid"> Passeport vaccinale </div>
                    <div class="descCovid">Passeport vaccinale obligatoire a l'entree</div>
                </div>
                <div class="tileCovid">
                    <div class="imgCovid imgDistance"></div>
                    <div class="titleCovid"> Distanciation </div>
                    <div class="descCovid">Respecter la distanciation de 2 metres entre bulle</div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import axios from 'axios';

    import TitrePage from '@/components/section/TitrePage.vue'
    import TableauTarif from '@/components/section/TableauTarif.vue';
    import ListeItem from '@/components/section/ListeItem.vue';
    import CarteCadeaux from '@/components/section/CarteCadeaux.vue';

    export default {
        name: 'Information',
        components: {
            TableauTarif,
            ListeItem,
            CarteCadeaux,
            TitrePage
        },
        data() {
            return {
                bouffe: [],
                billets: [],
                cadeaux: [],
                checkNourriture: false,
                checkBillets: false,
                checkCadeaux: false,
                charged: false
            }
        },
        created() {

            //ENDPOINTS Nourriture
            axios
                .get('http://127.0.0.1:3333/nourriture') 
                .then(response => {
                    (this.bouffe = response.data)
                    this.checkNourriture = true
                })

            //ENDPOINTS Tarifs
            axios
                .get('http://127.0.0.1:3333/billets') 
                .then(response => {
                    this.billets = response.data
                    this.checkBillets = true
                })

            //ENDPOINTS Cadeaux
            axios
                .get('http://127.0.0.1:3333/cadeau')
                .then(response => {
                    this.cadeaux = response.data
                    this.checkCadeaux = true
                })
        }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1 {
        font-size: 40px;
    }

    h2 {
        font-size: 30px;
    }

    .contFull {
        width: 100%;
        display:flex;
        justify-content:center;
        flex-direction:column;
        align-items:center;
    }

    .odd {
        background-color: rgb(42, 42, 42)
    }

    .title {
        display: flex;
        justify-content:center;
        align-items:center;
    }

    .textHeader{
        display: flex;
        justify-content:center;
        padding:0 2rem 2rem;
        font-size:16px;
        text-align:center;
    }

    .container {
        max-width:1440px;
        min-height:50px;
        width:100%;
    }

    .tabCovid {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    .tileCovid {
        margin: 0 1rem;
        min-width: 200px;
        width: 300px;
        margin-bottom:2rem;
    }

    .imgCovid {
        background-position:center center;
        background-repeat:no-repeat;
        background-size: contain;
        height:100%;
        height: 150px;
        width: 300px;
    }

    .imgMasque {
        background-image: url(/icons/portmasque.png);
    }

    .imgPassport {
        background-image: url(/icons/passVax.png);
    }

    .imgDistance {
        background-image: url(/icons/distance.png);
    }

    .titleCovid {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        padding: 1rem 0;
    }

    .descCovid {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 16px;
        text-align:center;
    }
</style>

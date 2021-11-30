<template>
    <div class="contFull">
        <div class="title">
            <h1>Informations</h1>
        </div>
        <div class="textHeader">
            Vous trouverez ci-dessous toutes les informations pour votre aventure!
        </div>
    </div>
    <div id="billetterie" class="contFull odd">
        <div class="title">
            <h2>- Billeterie -</h2>
        </div>
        <div class="billetterieContainer">
            <div class="tabTarif"><TableauTarif/></div>
        </div>
        
    </div>
    <div id="carte-cadeau" class="contFull">
        <div class="title">
            <h2>- Carte cadeau -</h2>
        </div>
    </div>
    <div id="nourriture" class="contFull odd">
        <div class="title">
            <h2>- Nourriture -</h2>
        </div>
    </div>
    <div id="covid-19" class="contFull">
        <div class="title">
            <h2>- Covid-19 -</h2>
        </div>
    </div>

</template>

<script>
    import TableauTarif from '@/components/section/TableauTarif.vue';

    export default {
        name: 'Information',
        components: {
            TableauTarif
        },
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
        padding-bottom:2rem;
    }

    .billetterieContainer {
        width:1440px;
        border:2px red solid;
    }

    .tabTarif {
        width:100%;
    }
</style>

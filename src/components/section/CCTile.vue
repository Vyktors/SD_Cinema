<template>
    <div class="ccTile">      
        <img class="ccImg" :src="'${ img }'">
        <div class="ccNom"> {{ nom }} </div>
        <div class="ccPrix">{{ formattedCurrencyValue }}</div>
    </div>
</template>

<script>
    export default {
        name: 'CCTile',
        props: {
            nom: String,
            prix: Number,
            img : String
        },
        computed: {
            formattedCurrencyValue: function () {
                if (!this.prix) { return "0.00 $" }
                return parseFloat(this.prix).toFixed(2) +" $"
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .ccTile {
        position:relative;
        margin:0 1rem;
    }
    .ccImg {
        height:150px;
        width:300px;
    }
    .ccNom {
        height: 75px;
        width:300px;
        position:absolute;
        top:20px;
        background-color:rgb(0,0,0,.6);
        z-index:5;
        display:flex;
        justify-content:center;
        align-items:center;
        font-size: 20px;
    }
    .ccPrix {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin:1rem 0 ;
        font-size: 32px;
    }
</style>

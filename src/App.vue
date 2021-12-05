<template>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <MenuPrincipal />
    <router-view />
    <Footer />
</template>


<script>
    import MenuPrincipal from "@/components/section/MenuPrincipal.vue";
    import Footer from "@/components/section/Footer.vue";

    export default {
        name: "app",
        components: {
            MenuPrincipal,
            Footer
        }
    };
</script>
<style>

    @import url('https://fonts.googleapis.com/css2?family=Sora&display=swap');


    body,
    button {
        font-family:'Sora', sans-serif;
    }

    html,
    body,
    div {
        margin: 0;
        padding: 0;
        color:white;
    }

    a {
        text-decoration: none;
        color: white;
    }

    body {
        background-color: rgb(29, 29, 29);
    }

    button {
        border: none;
        display: inline-block;
        padding: 8 px 16 px;
        vertical-align: middle;
        overflow: hidden;
        text-decoration: none;
        color: inherit;
        background-color: inherit;
        text-align: center;
        cursor: pointer;
        white-space: nowrap;
    }


</style>

<template>
    <div class="navbar">
        <div class="logo"></div>
        <div class="navigation">
            <router-link to="/" class="nav-item"><span class="material-icons">date_range</span> HORAIRE</router-link>
            <router-link to="/films" class="nav-item"><span class="material-icons">movie</span> FILMS</router-link>
            <div class="dropdown-hover">
                <button class="nav-btn" title="More">
                    <span class="material-icons">info</span> INFORMATIONS
                    <span class="material-icons">arrow_drop_down</span>
                </button>
                <div class="dropdown-content">
                    <router-link to="/information#billeterie" class="bar-item">BILLETERIE</router-link>
                    <router-link to="/information#nourritture" class="bar-item">NOURRITTURE</router-link>
                    <router-link to="/information#carte-cadeau" class="bar-item">CARTE CADEAU</router-link>
                    <router-link to="/information#covid-19" class="bar-item">COVID-19</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


export default {
  name: 'MenuPrincipal'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    .navbar {
        width: 100%;
        height: 4rem;
        border-bottom: 3px #fece00 solid;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 2rem;
        background-color: black;
        color: white;
    }

    .logo {
        width: 25%;
        min-width: 12rem;
        height: 100%;
    }

    .navigation {
        font-size: 16px;
        width: 70%;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
    }

    .nav-item {
        height: 100%;
        min-width: 12rem;
        width: 30%;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
    }

    .nav-btn {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        font-family: 'Sora';
        font-size: 16px;
        height: 100%;
        width: 100%;
    }

    .nav-btn:hover,
    .bar-item:hover,
    .nav-item:hover,
    .nav-btn:focus-within,
    .bar-item:focus-within,
    .nav-item:focus-within {
        color: white;
        background-color: #43484b;
        box-sizing: border-box;
        border-bottom: #fece00 4px solid;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 1), 0 6px 20px 0 rgba(0, 0, 0, 1);
    }

    .dropdown-hover {
        height: 100%;
        width: 30%;
        min-width: 12rem;
        display: block;
        position: static;
    }

    .dropdown-hover:hover,
    .dropdown-hover:focus,
    .dropdown-hover:focus-within {
        background-color: #43484b;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 1), 0 6px 20px 0 rgba(0, 0, 0, 1);
    }

    .dropdown-hover:hover .dropdown-content,
    .dropdown-hover:focus .dropdown-content,
    .dropdown-hover:focus-within .dropdown-content {
        display: flex;
        flex-direction: column;
        height: auto;
    }

    .dropdown-content {
        display: none;
        align-items: left;
        background-color: black;
        position: relative;
    }

    .bar-item {
        height: 4rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .material-icons {
        margin-right: 3px;
    }
</style>

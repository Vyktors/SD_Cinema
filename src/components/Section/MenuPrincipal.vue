<template>
    <div class="navbar">
        <div class="logo"></div>
        <div class="navigation">
            <router-link to="/" class="nav-item"><span class="material-icons">date_range</span> HORAIRE</router-link>
            <router-link :to="{name:'films'}" class="nav-item"><span class="material-icons">movie</span> FILMS</router-link>
            <router-link :to="{name:'information'}" class="nav-item">
                
                    <span class="material-icons">info</span> INFORMATIONS
                    
                
                
            </router-link>
        </div>



        <div class="navigation-mobile">
            <div id="menuToggle">
                <input type="checkbox" />
                <!--Icon homemade-->
                <span></span>
                <span></span>
                <span></span>

                <ul id="menu">
                    <div class="menuTitle">MENU</div>
                    <li><router-link to="/" class="nav-item-mobile"><div class="material-icons">date_range</div> HORAIRE</router-link></li>
                    <li><router-link :to="{name:'films'}" class="nav-item-mobile"><div class="material-icons">movie</div> FILMS</router-link></li>
                    <li><router-link :to="{name:'information'}" class="nav-item-mobile"><div class="material-icons">info</div> INFORMATIONS</router-link></li>
                </ul>
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

    .navigation-mobile,
    #menu-mobile {
        display: none;
    }

    @media only screen and (max-width: 750px) {
        .navigation {
            display: none;
        }

        

        #menuToggle input:checked #menu-mobile {
            display: flex;
        }

        .navigation-mobile {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 1rem;
        }


        #menuToggle {
            display: flex;
            flex-direction: column;
            position: relative;
            z-index: 1;
            -webkit-user-select: none;
            user-select: none;
        }

            #menuToggle input {
                display: flex;
                width: 100%;
                height: 100%;
                left: 0;
                position: absolute;
                cursor: pointer;
                opacity: 0;
                margin: 0 !important;
                z-index: 2;
            }

            #menuToggle span {
                display: flex;
                width: 29px;
                height: 2px;
                margin-bottom: 5px;
                position: relative;
                background: #ffffff;
                border-radius: 3px;
                z-index: 1;
                transform-origin: 5px 0px;
                transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0), 
                            background 0.5s cubic-bezier(0.77,0.2,0.05,1.0), 
                            opacity 0.55s ease;
            }

            #menuToggle span:first-child {
                transform-origin: 0% 0%;
            }

            #menuToggle span:nth-last-child(2) {
                transform-origin: 0% 100%;
            }

            #menuToggle input:checked ~ span {
                opacity: 1;
                transform: rotate(45deg) translate(-3px, -1px);
                background: white;
            }

            #menuToggle input:checked ~ span:nth-last-child(3) {
                opacity: 0;
                transform: rotate(0deg) scale(0.2, 0.2);
            }

            #menuToggle input:checked ~ span:nth-last-child(2) {
                transform: rotate(-45deg) translate(0, -1px);
            }

        #menu {
            display: none;
            visibility: hidden;
            opacity: 0;
            position: absolute;
            width: 300px;
            height: 400px;
            box-shadow: 0 0 10px #85888C;
            margin: -20px 0 0 -70px;
            padding: 0;
            left: -185px;
            background-color: black;
            transform-origin: 0% 0%;
            transform: translate(100%,0);
            transition: visibility 0s, opacity 0.5s, transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
        }

        #menu li {
            padding:0;
        }

        #menu li a {
            display: flex;
            justify-content:left;
            
            align-items:center;
            padding:1rem 2rem;
        }

        #menuToggle input:checked ~ ul {
            display: flex;
            flex-direction: column;
            transform: none;
            visibility: visible;
            opacity: 1;
            list-style-type:none;
        }

        .nav-item-mobile {
            margin: 0;
        }

        .nav-item-mobile:hover,
        .nav-item-mobile:focus,
        .nav-item-mobile:focus-within {
            background-color: #43484b;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 1), 0 6px 20px 0 rgba(0, 0, 0, 1);
        }

        .menuTitle {
            display:flex;
            justify-content:left;
            padding:2rem 2rem 80px;
            font-size: 30px;
        }
    }

</style>

<template>
    <div class="footer">
        <div class="logo-footer-container">
            <div class="logo-footer"></div>
        </div>
        <div class="media-footer-container">
            <div class="media-footer">
                <a href="#" class="media-item">
                    <span class="fa fa-facebook" aria-hidden="true"></span>
                </a>
                <a href="#" class="media-item">
                    <span class="fa fa-youtube" aria-hidden="true"></span>
                </a>
                <a href="#" class="media-item">
                    <span class="fa fa-twitter" aria-hidden="true"></span>
                </a>
                <a href="tel:438-390-5580" class="media-item">
                    <span class="fa fa-phone" aria-hidden="true"></span>
                </a>

                <a href="tel:438-390-5580" class="media-item">
                    <span class="fa fa-map" aria-hidden="true"></span>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .footer {
        width: 100%;
        height: 20rem;
        background-color: black;
        display: flex;
        flex-direction: column;
        margin-top:2rem;
    }

    .logo-footer-container {
        width: 100%;
        height: 8rem;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .logo-footer {
        height: 100%;
        width: 20rem;
    }

    .media-footer-container {
        width: 100%;
        height: 4rem;
        margin-top: 1rem;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .media-footer {
        height: 100%;
        width: 30rem;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }

    .media-item {
        width: 5rem;
        height: 100%;
        background-color: #43484b;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
